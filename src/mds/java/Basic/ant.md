# Class自己

```shell
~/Documents/mylab/spdemo18/src/main/java/com/abc on  master! ⌚ 16:39:48
$ tree ant
ant
├── MyField.java
└── MyFieldTest.java

0 directories, 2 files
```

## MyField.java
```java
package com.abc.ant;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface MyField {
  String description();
  int length();
}
```

## MyFieldTest.java
```java
package com.abc.ant;

import java.lang.reflect.Field;

public class MyFieldTest {
  //使用我们的自定义注解
  @MyField(description = "用户名", length = 12)
  private String username;

//@Test
  public void testMyField(){

    this.username = "abcd";

    // 获取类模板
    Class c = MyFieldTest.class;

    // 获取所有字段
    for(Field f : c.getDeclaredFields()){
      // 判断这个字段是否有MyField注解
      if(f.isAnnotationPresent(MyField.class)){
        MyField annotation = f.getAnnotation(MyField.class);
        System.out.println("字段:[" + f.getName() + "], 描述:[" + annotation.description() + "], 长度:[" + annotation.length() +"]");
      }
    }

  }
}
```

## 使用
```java
 @ResponseBody
  @PostMapping(value = "/www_view")
  public String tp(@RequestBody MultiValueMap<String, String> values) {
    System.out.println("K=V - {}" + values);

    System.out.println("z" + values.getFirst("id"));
    System.out.println("z" + values.get("name"));
    System.out.println("z" + values.get("age"));

    MyFieldTest mz  = new MyFieldTest();
    mz.testMyField();
    return "www";
  }
```

# Class别人
```shell
~/Downloads/annotation-range-check/src/com/itranswarp/learnjava ⌚ 16:42:25
$ tree .
.
├── Main.java
├── Person.java
└── Range.java

0 directories, 3 files
```

## Main.java
```java
package com.itranswarp.learnjava;

import java.lang.reflect.Field;

/**
 * Learn Java from https://www.liaoxuefeng.com/
 * 
 * @author liaoxuefeng
 */
public class Main {

	public static void main(String[] args) throws Exception {
		Person p1 = new Person("Bob", "Beijing", 20);
		Person p2 = new Person("", "Shanghai", 20);
		Person p3 = new Person("Alice", "Shanghai", 199);
		for (Person p : new Person[] { p1, p2, p3 }) {
			try {
				check(p);
				System.out.println("Person " + p + " checked ok.");
			} catch (IllegalArgumentException e) {
				System.out.println("Person " + p + " checked failed: " + e);
			}
		}
	}

	static void check(Person person) throws IllegalArgumentException, ReflectiveOperationException {
		for (Field field : person.getClass().getFields()) {
			Range range = field.getAnnotation(Range.class);
			 if (range != null) {
            	// 获取Field的值:
	            Object value = field.get(person);
	            // 如果值是String:
	            if (value instanceof String) {
	                String s = (String) value;
	                // 判断值是否满足@Range的min/max:
	                if (s.length() < range.min() || s.length() > range.max()) {
	                    throw new IllegalArgumentException("Invalid field: " + field.getName());
	                }
	            }
	        }
		}
	}
}
```

## Person.java
```java
package com.itranswarp.learnjava;

public class Person {

	@Range(min = 1, max = 20)
	public String name;

	@Range(max = 10)
	public String city;

	@Range(min = 1, max = 100)
	public int age;

	public Person(String name, String city, int age) {
		this.name = name;
		this.city = city;
		this.age = age;
	}

	@Override
	public String toString() {
		return String.format("{Person: name=%s, city=%s, age=%d}", name, city, age);
	}
}
```

## Range.java
```java
package com.itranswarp.learnjava;

import java.lang.annotation.ElementType;
import java.lang.annotation.RetentionPolicy;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Range {

	int min() default 0;

	int max() default 255;

}
```

## 使用
```java
Main m = new Main()
m.check()
```


# Spring Validated
```text
核心是
1，spring Validated来触发
2，ParamConstraintValidated来定义检查方式
3，Check来定义检查标准

controller
=> method  
    import org.springframework.validation.annotation.Validated;
    public Object test(@Validated @RequestBody User user) { ... }
    
=> 实体user 
    @Check(paramValues = {"man", "woman"})
    private String sex;
    
=> 注解Check
    @Constraint(validatedBy = ParamConstraintValidated.class)
    public @interface Check { }
    
=> javax.validation.Constraint
=> ParamConstraintValidated继承ConstraintValidator

    import javax.validation.ConstraintValidator;
    import javax.validation.ConstraintValidatorContext;

    public class ParamConstraintValidated implements ConstraintValidator<Check, Object> {...}
    
=> 实现注解逻辑
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {
        if (paramValues.contains(o)) {
            return true;
        }

        //不在指定的参数列表中
        return false;
    }
```

```text
custom-annotation github
```

# Spring Interceptor
```text
=> controller 
    @PermissionCheck(resourceKey = "test")
    public Object testPermissionCheck() {
        return "hello world";
    }
    
=> AsyncHandlerInterceptor
=> HandlerInterceptorAdapter @preHandle
=> PermissionCheckInterceptor extends HandlerInterceptorAdapter
public class PermissionCheckInterceptor extends HandlerInterceptorAdapter {...}

/**
     * 处理器处理之前调用
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                             Object handler) throws Exception {
                             ...
                             }


=> Spring InterceptorConfigurer
    @Configuration
    public class InterceptorConfigurer extends WebMvcConfigurerAdapter {
        @Override
        public void addInterceptors(InterceptorRegistry registry) {
            //权限验证拦截
            registry.addInterceptor(new PermissionCheckInterceptor()).addPathPatterns("/api/test");
    
            super.addInterceptors(registry);
        }
    }

=> Configuration
    import org.springframework.context.annotation.Configuration;
```

```text
custom-annotation github
```
