# 属性文件
resource/application.properties
```text
com.didispace.name=xyz
com.didispace.author=linly123
com.didispace.from=didi
```

# pom依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
</dependency>
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</dependency>
```

# binder - 显示绑定
## app入口
```java
package com.abc;

import info.wifi.Wifi;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.bind.Bindable;
import org.springframework.boot.context.properties.bind.Binder;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringBootApplicationRun {
  public static void main(String[] args) {
    //运行SpringBoot项目
    ApplicationContext ctx = SpringApplication.run(SpringBootApplicationRun.class,args);

    Binder binder = Binder.get(ctx.getEnvironment());

    // 绑定简单配置
    Wifi foo = binder.bind("com.didispace", Bindable.of(Wifi.class)).get();
    System.out.println(foo.getFrom()+'/'+foo.getName()+'/'+foo.getAuthor());
    System.out.println("Started! 1.8");
  }
}
```

## class 绑定属性
```java
package info.wifi;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "com.didispace")
public class Wifi {
  public String name;
  public String author;
  public String from;

  public String scan(Integer a) {

    return a + "tzzzz/" + this.getAuthor() + '/' + this.getName()+'/'+this.getFrom();
  }
}
```

# autowired 注解绑定
使用类，绑定类需要同个包名下
## class 绑定属性
```java
package com.abc;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "mycar")
public class House {
  private String site;

  public String getSite() {
    return site;
  }

  public void setSite(String nw) {
    this.site = nw;
  }
}
```

## @Autowired - 使用类
```java
package com.abc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.self.MathAbc;
import info.wifi.Wifi;

@Controller
public class HelloController {

  @Autowired
  private House house;

  @ResponseBody
  @RequestMapping(value = "/hello")
  public String hello() {
    MathAbc zz = new MathAbc();
    String b = zz.add();
    System.out.println("zzz" + b);
    Wifi wifi = new Wifi();
    System.out.println("wifi x "+ wifi.scan(1234));
    System.out.println("wifi y "+ wifi.getFrom()+'/'+wifi.getName());

    System.out.println(house.getSite());


    return "Hello World";
  }
}
```

## @Autowired + @Value
绑定类
```java
package com.abc;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "mycar")
public class House {
  private String site;

  @Value("${mycar.area}")
  private String area;

  public String getSite() {
    return site;
  }

  public void setSite(String nw) {
    this.site = nw;
  }

  public String showArea(){
    return this.area;
  }
}
```

使用类
```java
@Autowired
private House house;

System.out.println(house.showArea());

```
