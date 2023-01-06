# Sample-1

1，外层要设置百分比  
2，里面盒子才能设置margin 0 auto  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>margin0auto</title>
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
          height: 50%;
          position: relative;
          transform: translateY(50%);
          background: #add8e6;
          margin: 0 auto;
      }



  </style>
</head>
<body>
<div class="outer">

</div>
</body>
</html>

```

<iframe src="/public/p5demo/p5_0003.html"></iframe>


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>margin0auto</title>
  <style>
      * {
          margin: 0;
          padding: 0;
      }
      .outer {
          width: 500px;
          height: 300px;
          background: #add8e6;
      }


      .inner {
          width: 300px;
          height: 50%;
          transform: translateY(50%);
          background: #dcade6;
          margin: 0 auto;
      }



  </style>
</head>
<body>
<div class="outer">
  <div class='inner'></div>
</div>
</body>
</html>
```
<iframe src="/public/p5demo/p5_0004.html"></iframe>
