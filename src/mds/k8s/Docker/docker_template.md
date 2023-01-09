# Docker 产物转镜像
Dockfile
```text
FROM nginx
COPY dist/ /usr/share/nginx/html/dist/
COPY scripts/nginx.conf /etc/nginx/nginx.conf
COPY scripts/mime.types /etc/nginx/mime.types
```

docker build
```text
docker build -t imdemo.wiki-web:1.0.3 
```

docker image
```text
$ docker images
REPOSITORY            TAG       IMAGE ID       CREATED          SIZE
imdemo.wiki-web       1.0.3     2c5811bfc746   51 minutes ago   147MB
<none>                <none>    0fbf29249638   3 hours ago      147MB
<none>                <none>    c30d0f94e30a   3 hours ago      147MB
<none>                <none>    075f6bee3116   3 hours ago      147MB
nginx                 latest    1403e55ab369   2 weeks ago      142MB
```

docker run
```text
docker run --name imdemo.wiki-web -p 5555:5555 -d imdemo.wiki-web:1.0.3
```

docker logs
```text
$ docker logs 5f743d385536
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2023/01/07 11:36:09 [emerg] 1#1: getgrnam("nobody") failed in /etc/nginx/nginx.conf:1
nginx: [emerg] getgrnam("nobody") failed in /etc/nginx/nginx.conf:1
```

# Docker 直接npm依赖运行


# 其他命令

```text
docker rmi idxxxxxxxx
docker rmi id.name:tag
docker ps -a
docker ps
docker stop containeridxxxxx
docker rm containeridxxxxx
```
