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
