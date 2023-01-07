# Docker 产物转镜像
## Dockfile
```text
FROM nginx
COPY dist/ /usr/share/nginx/html/dist/
COPY scripts/nginx.conf /etc/nginx/nginx.conf
COPY scripts/mime.types /etc/nginx/mime.types
```

## docker build
```text
docker build -t imdemo.wiki-web:1.0.3 
```

## docker image
```text
$ docker images
REPOSITORY            TAG       IMAGE ID       CREATED          SIZE
imdemo.wiki-web       1.0.3     2c5811bfc746   51 minutes ago   147MB
<none>                <none>    0fbf29249638   3 hours ago      147MB
<none>                <none>    c30d0f94e30a   3 hours ago      147MB
<none>                <none>    075f6bee3116   3 hours ago      147MB
nginx                 latest    1403e55ab369   2 weeks ago      142MB
```

## docker run
```text
docker run --name imdemo.wiki-web -p 5555:5555 -d imdemo.wiki-web:1.0.3
```

# Docker 直接npm依赖运行
