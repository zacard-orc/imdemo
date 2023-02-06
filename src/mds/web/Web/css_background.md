# 窄图
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Title</title>
</head>
<body>
<div class='container'>
  <div class='a1'>bg</div>
  <div class='a2'>bg-pos10</div>
  <div class='b'>
    img
    <img alt='z' src='bgz_v.jpg' />
  </div>
</div>

</body>
<style>
  .a1 {
      display: inline-block;
      width: 375px;
      height: 400px;
      border: 1px dashed grey;
      background-position: 0 0;
      background-image: url("./bgz_v.jpg");
      background-size: 100% auto;
      background-repeat: no-repeat;
      vertical-align: top;
  }

  .a2 {
      display: inline-block;
      width: 375px;
      height: 400px;
      border: 1px dashed grey;
      background-position: 50px 50px;
      background-image: url("./bgz_v.jpg");
      background-size: 100% auto;
      background-repeat: no-repeat;
      vertical-align: top;
  }


  .b {
      display: inline-block;
      width: 375px;
      height: 400px;
      overflow: hidden;
      border: 1px dashed grey;
      vertical-align: top;
  }
  .b img {
      width: 100%;
  }

</style>
</html>
```
<img src="mds_sucai/Web/css_background1.jpg" alt="001" width="500px"/>

# 宽图
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Title</title>
</head>
<body>
<div class='container'>
  <div class='a1'>bg</div>
  <div class='a2'>bg-pos10</div>
  <div class='b'>
    img
    <img alt='z' src='bgz_h.jpg' />
  </div>
</div>

</body>
<style>
  .a1 {
      display: inline-block;
      width: 375px;
      height: 400px;
      border: 1px dashed grey;
      background-position: 0 0;
      background-image: url("./bgz_h.jpg");
      background-size: 100% auto;
      background-repeat: no-repeat;
      vertical-align: top;
  }

  .a2 {
      display: inline-block;
      width: 375px;
      height: 400px;
      border: 1px dashed grey;
      background-position: 50px 50px;
      background-image: url("./bgz_h.jpg");
      background-size: 100% auto;
      background-repeat: no-repeat;
      vertical-align: top;
  }


  .b {
      display: inline-block;
      width: 375px;
      height: 400px;
      overflow: hidden;
      border: 1px dashed grey;
      vertical-align: top;
  }
  .b img {
      width: 100%;
  }

</style>
</html>
```

<img src="mds_sucai/Web/css_background2.jpg" alt="001" width="500px"/>

# 强行设置px会压缩变形
```text
除非能算的很精准
```

```css
  .a1 {
      display: inline-block;
      width: 375px;
      height: 400px;
      border: 1px dashed grey;
      background-position: 0 0;
      background-image: url("./bgz_v.jpg");
      /*background-size: 100% 200px;*/
      background-size: 100% 300px;
      background-repeat: no-repeat;
      vertical-align: top;
  }
```
<img src="mds_sucai/Web/css_background3.jpg" alt="001" width="500px"/>

# 适配窄屏幕
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>h5_rem</title>
  <meta name='viewport'
        content='width=device-width, initial-scale=1, minimum-scale=0.1, maximum-scale=1, user-scalable=no'>
</head>
<body>
<div class='container'>h5 viewport uibase@375 run device
  <div id='hpw'></div>
  <div id='hpwbody'></div>
  <div id='hpwav'></div>
  <div id='hdpr'></div>
</div>

<div class='mkbox'></div>
<div class='mkbox2'></div>
<div class='mkbox3'></div>
</body>
<style>
    .container {
        font-size: 0.4rem;
    }

    .mkbox {
        margin-bottom: 4px;
        box-sizing: border-box;
        border: 1px solid grey;
        width: 1.36rem;
        height: 1rem;
        background-image: url("207x153.png");
        background-size: cover;
        background-position: 50% 50%;
    }

    .mkbox2 {
        margin-bottom: 4px;
        box-sizing: border-box;
        border: 1px solid grey;
        width: 1.36rem;
        height: 1rem;
        background-image: url("207x153.png");
        background-size: cover;
        background-position: 50% 50%;
    }

    .mkbox3 {
        margin-bottom: 4px;
        box-sizing: border-box;
        border: 1px solid grey;
        width: 1.36rem;
        height: 1rem;
        background-image: url("207x153.png");
        background-size: cover;
        background-position: 50% 50%;
    }

    @media (max-width: 300px) {
        .mkbox {
            width: 0.9rem;
        }

        .mkbox3 {
            width: 0.9rem;
            height: 0.735294117647059rem;
        }
    }
</style>
<script>

  document.documentElement.style.fontSize = '50px';

  const domhpw = document.getElementById('hpw');
  const hdw = window.screen.width;
  const hdh = window.screen.height;
  domhpw.innerText = '物理尺寸: ' + hdw + ' x ' + hdh;


  const domhpwbd = document.getElementById('hpwbody');
  const hdwbd = document.body.clientWidth;
  const hdhbd = document.body.clientHeight;
  domhpwbd.innerText = 'body惰性: ' + hdwbd + ' x ' + hdhbd;

  const domhpwav = document.getElementById('hpwav');
  const hdwav = window.innerWidth;
  const hdhav = window.innerHeight;
  domhpwav.innerText = 'window自然: ' + hdwav + ' x ' + hdhav;

  const domdpr = document.getElementById('hdpr');
  const hdrp = window.devicePixelRatio;
  domdpr.innerText = 'dpr: ' + hdrp;
</script>
</html>

```

<img src="mds_sucai/Web/css_background4.jpg" alt="001" width="500px"/>
