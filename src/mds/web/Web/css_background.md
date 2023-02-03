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
