# 版本5,8
Spring5+Java1.8+Idea2021.3.3

## Pom设置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.abc</groupId>
    <artifactId>spdemo18</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
    </properties>

    <!--添加父依赖-->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.12.RELEASE</version>
    </parent>

    <!--添加web启动器-->
    <dependencies>
        <dependency><groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```

## Idea初始化设置
```text
选择maven工程
选择jdk 1.8
```

## 修改maven jdk
修改setting.xml
```xml
 <profiles>
    <profile>
        <id>development</id>

        <activation>
            <jdk>8</jdk>
            <activeByDefault>true</activeByDefault>
        </activation>

        <properties>
            <maven.compiler.source>8</maven.compiler.source>
            <maven.compiler.target>8</maven.compiler.target>
            <maven.compiler.compilerVersion>8</maven.compiler.compilerVersion>
        </properties>
    </profile>
</profiles>
```

# 构建
## package
```text
在main/java下新建package com.abc
```

## class - main
```java
package com.abc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootApplicationRun {
  public static void main(String[] args) {
    //运行SpringBoot项目
    SpringApplication.run(SpringBootApplicationRun.class,args);
    System.out.println("Started! 1.8");
  }
}
```

## class - controller
```java
package com.abc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.self.MathAbc;
import info.wifi.Wifi;

@Controller
public class HelloController {
  @ResponseBody
  @RequestMapping(value = "/hello")
  public String hello() {
    MathAbc zz = new MathAbc();
    String b = zz.add();
    System.out.println("zzz" + b);
    Wifi wifi = new Wifi();
    System.out.println("wifi x "+ wifi.scan(1234));

    return "hello SpringBoot";
  }
}


```

## class - 其他pkg
package com.self;
```java
package com.self;

public class MathAbc {
  public String add(){
    return "im add 99999";
  }
}
```

package info.wifi;
```java
package info.wifi;

public class Wifi {
  public String scan(Integer a) {
    return String.valueOf(a) + "tzzzz";
  }
}
```

# 添加单元测试
## pom加依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

## class - test
```java
package com.abc;

import com.abc.HelloController;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest
public class ChapterApplicationTests {

  private MockMvc mvc;

  @Before
  public void setUp() throws Exception {
    mvc = MockMvcBuilders.standaloneSetup(new HelloController()).build();
  }

  @Test
  public void getHello() throws Exception {
    mvc.perform(MockMvcRequestBuilders.get("/hello").accept(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(content().string(equalTo("Hello World")));
  }

}
```
