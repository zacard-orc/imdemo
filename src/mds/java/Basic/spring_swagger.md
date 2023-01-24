# 项目参考
```text
https://github.com/SpringForAll/spring-boot-starter-swagger
```

# pom依赖 - 全
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>demo</name>
    <description>Demo project for Spring Boot</description>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.3.0.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>com.spring4all</groupId>
            <artifactId>swagger-spring-boot-starter</artifactId>
            <version>2.0.2.RELEASE</version>
        </dependency>

        <dependency>
            <groupId>javax.validation</groupId>
            <artifactId>validation-api</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>io.github.swagger2markup</groupId>
                <artifactId>swagger2markup-maven-plugin</artifactId>
                <version>1.3.1</version>
                <configuration>
                    <swaggerInput>http://localhost:8080/v2/api-docs</swaggerInput>
                    <outputDir>src/docs/asciidoc/generated</outputDir>
                    <config>
                        <swagger2markup.markupLanguage>ASCIIDOC</swagger2markup.markupLanguage>
                    </config>
                </configuration>
            </plugin>

            <plugin>
                <groupId>org.asciidoctor</groupId>
                <artifactId>asciidoctor-maven-plugin</artifactId>
                <version>1.5.6</version>
                <configuration>
                    <sourceDirectory>src/docs/asciidoc/generated</sourceDirectory>
                    <outputDirectory>src/docs/asciidoc/html</outputDirectory>
                    <backend>html</backend>
                    <sourceHighlighter>coderay</sourceHighlighter>
                    <attributes>
                        <toc>left</toc>
                    </attributes>
                </configuration>
            </plugin>
        </plugins>
    </build>

    <repositories>
        <repository>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
            <id>jcenter-releases</id>
            <name>jcenter</name>
            <url>http://jcenter.bintray.com</url>
        </repository>
    </repositories>

</project>
```

# pom依赖 - 增量
```xml
<dependency>
    <groupId>com.spring4all</groupId>
    <artifactId>swagger-spring-boot-starter</artifactId>
    <version>2.0.2.RELEASE</version>
</dependency>

<dependency>
    <groupId>javax.validation</groupId>
    <artifactId>validation-api</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.plugin</groupId>
    <artifactId>spring-plugin-core</artifactId>
    <version>2.0.0.RELEASE</version>
</dependency>

<build>
<plugins>
    <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
    <plugin>
        <groupId>io.github.swagger2markup</groupId>
        <artifactId>swagger2markup-maven-plugin</artifactId>
        <version>1.3.1</version>
        <configuration>
            <swaggerInput>http://localhost:8080/v2/api-docs</swaggerInput>
            <outputDir>src/docs/asciidoc/generated</outputDir>
            <config>
                <swagger2markup.markupLanguage>ASCIIDOC</swagger2markup.markupLanguage>
            </config>
        </configuration>
    </plugin>

    <plugin>
        <groupId>org.asciidoctor</groupId>
        <artifactId>asciidoctor-maven-plugin</artifactId>
        <version>1.5.6</version>
        <configuration>
            <sourceDirectory>src/docs/asciidoc/generated</sourceDirectory>
            <outputDirectory>src/docs/asciidoc/html</outputDirectory>
            <backend>html</backend>
            <sourceHighlighter>coderay</sourceHighlighter>
            <attributes>
                <toc>left</toc>
            </attributes>
        </configuration>
    </plugin>
</plugins>
</build>
```

# 属性文件
```shell
logging.level.root=debug
logging.level.org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping=trace
spring.application.name=swagger-demo
# Swagger Enable/Disable
springfox.documentation.enabled=true
# ApiInfo
swagger.title=spring-boot-starter-swagger
swagger.description=Starter for swagger 3.x
swagger.version=3.0.0.RELEASE
swagger.license=Apache License, Version 2.0
swagger.licenseUrl=https://www.apache.org/licenses/LICENSE-2.0.html
swagger.termsOfServiceUrl=https://github.com/dyc87112/spring-boot-starter-swagger
swagger.contact.name=didi
swagger.contact.url=http://blog.didispace.com
swagger.contact.email=dyc87112@qq.com
swagger.host=localhost:8080
swagger.base-package=com.didispace.demo.controller
swagger.base-path=/**
swagger.exclude-path=/error, /ops/**
##swagger.ignored-parameter-types[0]=com.didispace.demo.User
#å¨å±è¯·æ±åæ°ï¼1ï¼
swagger.global-operation-parameters[0].name=access_token
swagger.global-operation-parameters[0].description=user access token
swagger.global-operation-parameters[0].modelRef=string
swagger.global-operation-parameters[0].parameterType=header
swagger.global-operation-parameters[0].required=true
#å¨å±è¯·æ±åæ°ï¼2ï¼
swagger.global-operation-parameters[1].name=timestamp
swagger.global-operation-parameters[1].description=access timestamp
swagger.global-operation-parameters[1].modelRef=int
swagger.global-operation-parameters[1].parameterType=header
swagger.global-operation-parameters[1].required=false
#
#swagger.apply-default-response-messages=true
#swagger.global-response-message.get[0].code=401
#swagger.global-response-message.get[0].message=401get
#swagger.global-response-message.get[1].code=500
#swagger.global-response-message.get[1].message=500get
#swagger.global-response-message.get[1].modelRef=ERROR
#
#swagger.ui-config.json-editor=false
#swagger.ui-config.show-request-headers=true
#swagger.ui-config.request-timeout=5000
#swagger.ui-config.submit-methods=get,delete
# å¤ä¸ªåç»éç½®
# åç» ææ rest
swagger.docket.all.title=group-all
# åç» group-administrator
swagger.docket.administrator.title=group-administrator
swagger.docket.administrator.description=Starter for swagger 3.x
swagger.docket.administrator.version=3.0.1.RELEASE
swagger.docket.administrator.termsOfServiceUrl=https://gitee.com/didispace/spring-boot-starter-swagger
swagger.docket.administrator.contact.name=zhaiyongchao
swagger.docket.administrator.contact.url=http://spring4all.com/
swagger.docket.administrator.contact.email=didi@potatomato.club
# å¦æä¸éç½® basePackageï¼åæ¾ç¤ºææè¯·æ±æé¤å° excludePath
# swagger.docket.administrator.basePackage=com.didispace.demo.controller.department
swagger.docket.administrator.excludePath=/ops/**,/error/**
swagger.docket.administrator.globalOperationParameters[0].name=name three
swagger.docket.administrator.globalOperationParameters[0].description=some description three override
swagger.docket.administrator.globalOperationParameters[0].modelRef=string
swagger.docket.administrator.globalOperationParameters[0].parameterType=header
# åç» group-administrator
swagger.docket.department.title=group-department
swagger.docket.department.basePackage=com.didispace.demo.controller.department
```

# class - 入口
无需改动自动扫描
```java
package com.didispace.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
        System.out.println("Started!");

    }
}
```

# class - 控制器
```java
package com.didispace.demo;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.*;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import springfox.documentation.annotations.ApiIgnore;

@Api(tags = "用户管理")
@RestController
public class UserController {

    @ApiOperation("创建用户")
    @PostMapping("/users")
    public User create(@RequestBody @Valid User user) {
        return user;
    }

    @ApiOperation("用户详情")
    @GetMapping("/users/{id}")
    public User findById(@PathVariable Long id) {
        return new User("bbb", 21, "上海", "aaa@bbb.com");
    }

    @ApiOperation("用户列表")
    @GetMapping("/users")
    public List<User> list(@ApiParam("查看第几页") @RequestParam int pageIndex,
        @ApiParam("每页多少条") @RequestParam int pageSize) {
        List<User> result = new ArrayList<>();
        result.add(new User("aaa", 50, "北京", "aaa@ccc.com"));
        result.add(new User("bbb", 21, "广州", "aaa@ddd.com"));
        return result;
    }

    @ApiIgnore
    @DeleteMapping("/users/{id}")
    public String deleteById(@PathVariable Long id) {
        return "delete user : " + id;
    }
}
```

# class - model
```java
package com.didispace.demo;

import javax.validation.constraints.*;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel("用户基本信息")
public class User {

    @ApiModelProperty("姓名")
    @Size(max = 20)
    private String name;
    @ApiModelProperty("年龄")
    @Max(150)
    @Min(1)
    private Integer age;
    @NotNull
    private String address;
    @Pattern(regexp = "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$")
    private String email;

}
```
