# 毛玻璃
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>毛玻璃效果制作</title>
</head>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html,body{
        width: 100vw;
        height: 100vh;

    }
    .banner{
        width: 100vw;
        height: 100vh;
        background: url(./img.png);
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;

    }


    .glass{
        width: 100%;
        height: 100%;
        background: url(./img.png);
        background-size: cover;
        background-position:center;
        clip-path: inset(200px 200px);
        filter: blur(20px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span{
        position: absolute;
        color: white;
        font-size: 40px;
        letter-spacing: 0.75em;
        padding-left: 0.375em;
    }
    /*.drop-shadow{*/
    /*    height: 100%;*/
    /*    width: 100%;*/
    /*    !*filter:  drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.1));*!*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*}*/
</style>
<body>
<div class="banner">
<!--  <div class="drop-shadow">-->
    <div class="glass"></div>
    <span>毛玻璃效果GLASS</span>
<!--  </div>-->
</div>
</body>
</html>
```

<img src="mds_sucai/Web/glass.jpg" alt="毛玻璃"/>
