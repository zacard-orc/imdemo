# rem
```html
 <!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <title>h5_rem</title>
    <meta name="viewport" content="initial-scale=1.0, minimum-scale=0.1, maximum-scale=1.0, user-scalable=no">
</head>
<body>
<div class='container'>h5 rem uibase@375 run device</div>
</body>
<style>
    /*:root{*/
    /*    !* 375设计稿  iphone se 可以选择硬编码 *!*/
    /*    font-size: 37.5px;*/
    /*}*/

    html,body {
        margin: 0;
    }

    .container {
        width: 10rem;
        height: 5rem;
        background-color: #C8AEFB;
        font-size: 0.5rem;
        font-family: Arial,sans-serif;
        padding: 0.3rem;
        box-sizing: border-box;
        color: #49484a;
    }
</style>
<script>
    let chrem_x = 1
    const chrem = function (doc, win) {
        var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    var isAndroid = /Android/gi.test(window.navigator.appVersion);
                    // 安卓超大屏幕降级412
                    if (isAndroid && clientWidth > 480){
                        clientWidth = 412;
                    }
                    console.log('ClientWidth', clientWidth)
                    // 兼容Mui 必须赶到20
                    const rootsize = clientWidth / 10 + 'px';
                    // if (clientWidth === 412 || clientWidth === 414) {
                    //   rootsize = 54.6 + 'px';
                    // } else if (clientWidth < 480) {
                    //   rootsize = 50 + 'px';
                    // } else if (clientWidth === 480) {
                    //   rootsize = 75 + 'px';
                    // } else if (clientWidth > 480 && clientWidth <= 960) {
                    //   rootsize = 100 + 'px';
                    // } else if (clientWidth > 960 && clientWidth < 1440) {
                    //   rootsize = 150 + 'px';
                    // } else if (clientWidth >= 1440) {
                    //   rootsize = 200 + 'px';
                    // }
                    docEl.style.fontSize = rootsize;
                };
        if (!doc.addEventListener) {
            return;
        }
        if(chrem_x===1){
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        }
        chrem_x+=1
        recalc()
    }
    chrem(document, window)
</script>
</html>
```
<img src="mds_sucai/Web/css_h5size1.jpg" alt="001" width="300px"/>

# viewport
## scale=0.5 眼球离开屏幕近
```html
  <meta name="viewport" content="width=device-width, initial-scale=2, minimum-scale=2, maximum-scale=2, user-scalable=no">
```
<img src="mds_sucai/Web/css_h5size5.jpg" alt="001" width="300px"/>

```text
因为viewport近了，需要通过压缩width，来还原
比如，原先100px要压缩到50px
```

## scale=1 眼球离开屏幕=1
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>h5_rem</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=0.1, maximum-scale=1, user-scalable=no">
</head>
<body>
<div class='container'>h5 viewport uibase@375 run device
  <div id='hpw'></div>
  <div id='hpwbody'></div>
  <div id='hpwav'></div>
  <div id='hdpr'></div>
</div>
<div class='bar bar100'>100</div>
<div class='bar bar200'>200</div>
<div class='bar bar300'>300</div>
</body>
<style>
  /*:root{*/
  /*    !* 375设计稿  iphone se 可以选择硬编码 *!*/
  /*    font-size: 37.5px;*/
  /*}*/

  html,body {
      margin: 0;
  }
  .bar {
      height: 30px;
      background-color: lightblue;
      line-height: 30px;
      padding-left: 5px;
      box-sizing: border-box;
      margin-bottom: 2px;
  }

  .bar100 {
      width: 100px;
  }
  .bar200 {
      width: 200px;
  }
  .bar300 {
      width: 300px;
  }

  .container {
      width: 100%;
      background-color: #C8AEFB;
      font-size: 0.5rem;
      font-family: Arial,sans-serif;
      padding: 0.3rem;
      box-sizing: border-box;
      color: #49484a;
  }
</style>
<script>


  const domhpw = document.getElementById('hpw')
  const hdw = window.screen.width
  const hdh = window.screen.height
  domhpw.innerText='物理尺寸: '+hdw+' x '+hdh


  const domhpwbd = document.getElementById('hpwbody')
  const hdwbd = document.body.clientWidth
  const hdhbd = document.body.clientHeight
  domhpwbd.innerText='body惰性: '+hdwbd+' x '+hdhbd

  const domhpwav = document.getElementById('hpwav')
  const hdwav = window.innerWidth
  const hdhav = window.innerHeight
  domhpwav.innerText='window自然: '+hdwav+' x '+hdhav

  const domdpr = document.getElementById('hdpr')
  const hdrp = window.devicePixelRatio;
  domdpr.innerText='dpr: '+hdrp
</script>
</html>
```

<img src="mds_sucai/Web/css_h5size2.jpg" alt="001" width="300px"/>

## scale=0.5 眼球离开屏幕远
```html
  <meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.1, maximum-scale=0.5, user-scalable=no">
```
```text
所以此时要把实际单位拉长
原先scale=1时，长度100的，要变成200才能欢迎

scale的缩放可以根据dpr来决定
```

<img src="mds_sucai/Web/css_h5size3.jpg" alt="001" width="300px"/>


```css
.bar100 {
  width: 200px;
}
.bar200 {
  width: 400px;
}
.bar300 {
  width: 600px;
}
```
<img src="mds_sucai/Web/css_h5size4.jpg" alt="001" width="300px"/>


# 三大高度
## 屏幕物理
```js

  const domhpw = document.getElementById('hpw')
  const hdw = window.screen.width
  const hdh = window.screen.height
  domhpw.innerText='物理尺寸: '+hdw+' x '+hdh

```

## body惰性可用
```js

  const domhpwbd = document.getElementById('hpwbody')
  const hdwbd = document.body.clientWidth
  const hdhbd = document.body.clientHeight
  domhpwbd.innerText='body惰性: '+hdwbd+' x '+hdhbd


```

## window自然可用
```js
  const domhpwav = document.getElementById('hpwav')
  const hdwav = window.innerWidth
  const hdhav = window.innerHeight
  domhpwav.innerText='window可用: '+hdwav+' x '+hdhav
```

# 硬件
## dpr
```js
const domdpr = document.getElementById('hdpr')
  const hdrp = window.devicePixelRatio;
  domdpr.innerText='dpr: '+hdrp
```
