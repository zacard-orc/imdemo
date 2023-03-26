# 移动条
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Title</title>
</head>
<body>
<div class='z'>
  <div class='zs'></div>
</div>
</body>
<script>
  // 滑动
</script>
<style>
  .z {
      width: 200px;
      height: 10px;
      position: relative;
      border: 1px solid grey;
      border-radius: 6px;
      overflow: hidden;
  }

  .zs {
      position: absolute;
      width: 50px;
      height: 10px;
      left: -50px;
      background-image: linear-gradient(to right,#FF0000,#FFA500);
      animation:myAnim 5s linear infinite;
  }

  @keyframes myAnim{
      0% { left: -50px; }
      100% { left: 250px; }
  }

</style>
</html>
```

<img src="mds_sucai/Web/css_anm_movingbar.jpg" alt="1" width="300px"/>

# 呼吸灯
```scss
 > .sym-core {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #3f6bc1;
      animation:anmBreath 3s ease-in infinite;
    
      @keyframes anmBreath{
        0% { opacity: 0 }
        50% { opacity: 1 }
        100% { opacity: 0}
      }
    }
```
<img src="mds_sucai/Web/css_anm_breath.jpg" alt="1" width="300px"/>
