# 适配多环境的核心原理

## 区分环境暴露
```javascript
 if (typeof exports == "object") {
        module.exports = SliceCaptcha;
} else if (typeof define == "function" && define.amd) {
    define([], function () {
        return SliceCaptcha;
    });
} else if (window) {
    window.SliceCaptcha = SliceCaptcha;
    window._CaptchaObj = _CaptchaObj;
}
```

## 把自己装在IIFE里
```javascript
// eslint-disable;
(function (msg) {
    console.log(msg)
    const Mbz = function () {}

    Mbz.prototype.shock = function (v) {
        console.log(v)
    }

    if (typeof exports == 'object') {
        module.exports = Mbz
        // eslint-disable-next-line no-undef
    } else if (typeof define == 'function' && define.amd) {
        define([], function () {
            return Mbz
        })
    } else if (window) {
        window.Mbz = Mbz
    }
})('abc')
```

## 在其他js中使用
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <script src="./Mbz.js"></script>
</head>
<body>
<div>1</div>
</body>
<script>
  console.log(Mbz)
</script>
</html>

```

# 上传按钮隐藏
```html
<p>
    <!--                <img src="./img/upload.png" id="cv-img" alt="upload">-->
    <button id="but_sel">1，选择文件</button>
    <input type="file" id="z-upload" multiple onchange="showname()"
           accept="image/jpeg,image/gif,image/png"/>
</p>
<p>
    <button id="but_upload">3，上传</button>
</p>
```

```js
$(document).ready(function() {
    const dvlistnew = $('#list-new')
    const dvlistpv = $('#list-preview')

    // 选择
    $('#but_sel').click(function () {
        $('#z-upload').click();
    });

    // 上传
    $("#but_upload").click(function() {
        dvlistnew.html('')
        dvlistpv.html('')
        const fd = new FormData();
        for(let el of $('#z-upload')[0].files){
            fd.append('apple', el);
        }

        fd.append('sv_png', $('#sv_png').text())
        fd.append('sv_gif', $('#sv_gif').text())
        fd.append('sess', window.localStorage.getItem('upload_sess'))


        $.ajax({
            url: '/svc_upload',
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
            success: function(res){
                console.log(res)
                window.localStorage.upload_sess = res.sess
                renderNewList(res.cvs)
                renderPreviewList(res.cvs)
            },
            fail: function (res){

            }
        });
    });
})
```

<img src="mds_sucai/Web/browser_upload.jpg" alt="1" width="300px"/>
