# Maven3安装

## 下载
```text
https://maven.apache.org/download.cgi?Preferred=http%3A%2F%2Fmirrors.tuna.tsinghua.edu.cn%2Fapache%2F
apache-maven-3.8.7-bin.tar.gz	
```

## 解压修改环境
```text
# maven3
export M3_HOME="/Users/macbookpro/Documents/mysoft/maven"
export PATH=$PATH:$M3_HOME/bin
source ~/.bash_profile
```

## 确认版本
```text
$ mvn --version
        Apache Maven 3.8.7 (b89d5959fcde851dcb1c8946a785a163f14e1e29)
        Maven home: /Users/macbookpro/Documents/mysoft/maven
        Java version: 11.0.17, vendor: Amazon.com Inc., runtime: /Users/macbookpro/Library/Java/JavaVirtualMachines/corretto-11.0.17/Contents/Home
        Default locale: zh_CN_#Hans, platform encoding: UTF-8
        OS name: "mac os x", version: "12.2", arch: "x86_64", family: "mac"
```

## 镜像修改
修改setting.xml
```xml
 <mirrors>
    修改镜像
     -->
    <mirror>
        <id>alimaven</id>
        <mirrorOf>central</mirrorOf>
        <name>aliyun maven</name>
        <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
    </mirror>
  </mirrors>
```

## 版本适配jdk11
修改setting.xml
```xml
 <profiles>
    <profile>
        <id>development</id>

        <activation>
            <jdk>11</jdk>
            <activeByDefault>true</activeByDefault>
        </activation>

        <properties>
            <maven.compiler.source>11</maven.compiler.source>
            <maven.compiler.target>11</maven.compiler.target>
            <maven.compiler.compilerVersion>11</maven.compiler.compilerVersion>
        </properties>
    </profile>
</profiles>
```

# Idea修改
<img src="mds_sucai/Java/maven_idea_conf1.jpg" alt="1" width="600px"/>
<img src="mds_sucai/Java/maven_idea_conf2.jpg" alt="1" width="600px"/>
