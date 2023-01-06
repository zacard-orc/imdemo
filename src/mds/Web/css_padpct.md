# Sample-1

1，里面盒子高度是外面盒子宽度到一半  
2，里面盒子宽度是100%等于外面盒子到宽度  
3，里面盒子位置是居中  
4，外面盒子可以margin 0 auto 来做屏幕居中  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>高是宽一半1</title>
  <style>
      * {
          margin: 0;
          padding: 0;
      }

      html,
      body {
          width: 100%;
          height: 100%;
      }

      .outer {
          width: 300px;
          height: 100%;
          background: lightblue;
          margin: 0 auto;

          display: flex;
          align-items: center;
      }

      .inner {
          width: 100%;
          padding-bottom: 50%;
          background: #fda5a5;
      }
  </style>
</head>
<body>
<div class="outer">
  <div class="inner">
  </div>
</div>
</body>
</html>
```

<iframe src="/public/p5demo/p5_0001.html"></iframe>


# Sample-2
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>高是宽的一半2</title>
  <style>
      .outer {
          width: 800px;
          height: 200px;
          background: lightblue;
      }

      .inner {
          width: 20%;
          height: 20%;  /* ref 父级高度 */
          /*padding-bottom: 20%;*/ /* ref 父级宽度 */
          background: #fda5a5;
      }
  </style>
</head>
<body>
<div class="outer">
  <div class="inner"></div>
</div>
</body>
</html>
```

<iframe src="/public/p5demo/p5_0002.html"></iframe>
