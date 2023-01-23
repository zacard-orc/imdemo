# pom依赖
```xml
 <dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>2.0.22</version>
</dependency>
```

# URL处理
## Post json请求解析
直接解析到实体
```java
@ResponseBody
@RequestMapping(value = "/view")
public String tp(@RequestBody User user) {
    System.out.println(user.getAge());
    return "Hello World";
}
```

提取原始JSON
```java
@ResponseBody
@RequestMapping(value = "/raw_view")
public String tp(@RequestBody JSONObject jsonParam) {
    System.out.println(jsonParam.toString());
    return "Hello World";
}
```

提取原始JSON再转实体
```java
    @ResponseBody
  @PostMapping(value = "/meet_view")
  public String tp(@RequestBody JSONObject jsonParam) {
    System.out.println(jsonParam.toString());
    return jsonParam.toString();
  }
```

## 返回JSON
```java
 @ResponseBody
  @RequestMapping(value = "/raw_view")
  public String tp(@RequestBody JSONObject jsonParam) {
    System.out.println(jsonParam.toString());
    return jsonParam.toString();
  }
```

## Post www-formed请求处理
```java
 @ResponseBody
  @PostMapping(value = "/www_view")
  public String tp(@RequestBody MultiValueMap<String, String> values) {
    System.out.println("K=V - {}" + values);

    System.out.println("z" + values.getFirst("id"));
    System.out.println("z" + values.get("name"));
    System.out.println("z" + values.get("age"));
    return "www";
  }
```
```text
z7
z[mary]
z[28]
```

## Post header处理
```java
  @Autowired
  private HttpServletRequest request;
  
  /**
   * 获取头
   * @param abc
   * @param headers
   * @param jsonParam
   * @return
   */
  @ResponseBody
  @RequestMapping(value="/print/{abc}", method= RequestMethod.POST)
  public String tst(@PathVariable String abc,
                   @RequestHeader HttpHeaders headers,
                    @RequestBody JSONObject jsonParam) {

    System.out.println("from header-1:" + request.getHeader("x-domain"));
    System.out.println("from header-2:" + headers.getFirst("x-apikey"));
    System.out.println("from param:" + abc);

    System.out.println("from body:" +jsonParam.toString());
    return "www";
  }
```

```text
from header-1:baidu.com
from header-2:abcd
from param:linly
from body:{"name":"爽肤水","id":1000,"age":88}
```

## 设置返回头
```java
  @ResponseBody
  @RequestMapping(value="/car/{abc}", method= RequestMethod.POST)
  public ResponseEntity<String> hello() {
    HttpHeaders headers = new HttpHeaders();
    headers.set("foo","bar");
    headers.set("rio","messi");
    headers.set("content-type","application/json;charset=UTF-8");
    return ResponseEntity
        .status(200)
        .headers(headers)
        .body("{\"a\":1}");
  }
```
如果不设置content-type，则默认test/plain
```text
* Mark bundle as not supporting multiuse
< HTTP/1.1 200
< foo: bar
< rio: messi
< Content-Type: application/json;charset=UTF-8
< Content-Length: 7
< Date: Mon, 23 Jan 2023 12:50:46 GMT
<
* Connection #0 to host 127.0.0.1 left intact
{"a":1}%
```
