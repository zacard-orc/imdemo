# Get
```shell
curl 'http://127.0.0.1:8080/hello'
curl 'http://127.0.0.1:8080/view'
```

# Post
## json
```shell
curl -H "Content-Type: application/json" \
-X POST \
-d '{"flowId":"1313"}' \
http://127.0.0.1:8080/view


curl -H "Content-Type: application/json" \
-X POST \
-d '{"id":1000,"name":"爽肤水","age":88}' \
http://127.0.0.1:8080/view
```

## www-formed
```shell
curl -H "x-apikey: abcd" \
-X POST 'http://127.0.0.1:8080/www_view' \
-d 'id=7&name=mary&age=28'
```

## header
```shell
curl -H "x-apikey: abcd" \
-H "x-domain: baidu.com" \
-H "x-server: chinanet" \
-X POST 'http://127.0.0.1:8080/www_view' \
-d 'id=7&name=mary&age=28'
```

```shell
curl -H "Content-Type: application/json" \
-H "x-apikey: abcd" \
-H "x-domain: baidu.com" \
-H "x-server: chinanet" \
-X POST \
-d '{"id":1000,"name":"爽肤水","age":88}' \
http://127.0.0.1:8080/print/linly
```

# 查看明细
```shell
curl -v -H "Content-Type: application/json" \
-H "x-apikey: abcd" \
-H "x-domain: baidu.com" \
-H "x-server: chinanet" \
-X POST \
-d '{"id":1000,"name":"爽肤水","age":88}' \
http://127.0.0.1:8080/car/linly 
```
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

# 上传本地文件
```shell
echo "pub to afb"

# envType token teamId

afb_token=`cat ~/Documents/fbplain.txt|grep ${envType}|awk -F ' ' '{ if ($1 =="'${envType}'") print $2}'`
afb_teamid=`cat ~/Documents/fbplain.txt|grep ${envType}|awk -F ' ' '{ if ($1 =="'${envType}'") print $3}'`

curl -X POST -k "https://x.x.x.x:yyyy/api/apps/${afb_teamid}/upload" \
-H "accept: application/json" \
-H "apikey: ${afb_token}" \
-H "content-type: multipart/form-data" \
-F "file=@${project_path}/dist_${netType}/ios_${project_version}_${netType}_${envType}_${pkg_time}_${bnvc}_${shortbranch}.ipa"

```
