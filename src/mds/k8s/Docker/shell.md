# 自动重启
```shell

while true
do
  echo "start loop"
  oldpid=`ps -ef|grep f2_hk|egrep -v 'grep'|awk -F ' ' '{print $2}'`
  echo "pid=> ${oldpid}"
  if [ 0"$oldpid" = "0" ];then
    echo "no exist,start new"
    cd ~
    sleep 3
    nohup node ./f2_hk.js &
  else
    echo "pid ${oldpid} exist"
  fi
  sleep 10
done

```

# windows重启
```shell
cd c:/xxx/zzz/xxx/ccc
taskkill /f /im "nginx"
start nginx
```
