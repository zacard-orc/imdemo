# exec
## 检索图片和大小
```shell
 find . -regex ".*\.\(jpe?g\|png\|gif\|webp\)$" -exec du -sk {} \;
```
```text
272     ./static/media/bindpid03.209d1737b969d1ddfb17.jpg
184     ./static/media/bindpid01.121bb3024c30a8dc0456.jpg
28      ./static/media/reg_qrcode.a9d1985ef2c286868441.jpg
72      ./static/media/docx1.f4761bb7238e233ec762.jpg
128     ./static/media/ic_bg04.ebf8a7a07f8283fa1681.jpg
128     ./static/media/docx2.a38636279e483174c599.jpg
288     ./static/media/bindpid04.85493bf9b1b83cfa1a18.jpg
140     ./static/media/bindpid02.4b52171f581fb7c00ecf.jpg
28      ./static/media/docx3.e76f0469f691ffcd9be8.jpg
12      ./logo512.png
8       ./logo192.png
```

## 检索图片大小并排序
```shell
 find . -regex ".*\.\(jpe?g\|png\|gif\|webp\)$" -exec du -sk {} + | sort -n -r -k 1; 
```

```text
288     ./static/media/bindpid04.85493bf9b1b83cfa1a18.jpg
272     ./static/media/bindpid03.209d1737b969d1ddfb17.jpg
184     ./static/media/bindpid01.121bb3024c30a8dc0456.jpg
140     ./static/media/bindpid02.4b52171f581fb7c00ecf.jpg
128     ./static/media/ic_bg04.ebf8a7a07f8283fa1681.jpg
128     ./static/media/docx2.a38636279e483174c599.jpg
72      ./static/media/docx1.f4761bb7238e233ec762.jpg
28      ./static/media/reg_qrcode.a9d1985ef2c286868441.jpg
28      ./static/media/docx3.e76f0469f691ffcd9be8.jpg
12      ./logo512.png
8       ./logo192.png
```
