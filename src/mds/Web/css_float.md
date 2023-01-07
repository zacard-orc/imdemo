# 自然float:left

1，2，3，4颜色float left排列  
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .bar{
        /*float: left;*/
        width: 200px;
        height: 80px;
        background-color: #C8AEFB;
        opacity: 0.7;
    }
    .bar-2 {
        background-color: orange;
        width: 500px;
        height: 80px;
        opacity: 0.7;
        float: left;
    }
    .bar-3 {
        background-color: lightblue;
        width: 300px;
        height: 100px;
        opacity: 0.7;
        float: left;
    }
    .bar-4 {
        background-color: #f88b8b;
        width: 250px;
        height: 130px;
        opacity: 0.7;
        float: left;
    }
  </style>
</head>
<body>
<div class='bar'>div1</div>
<!--至上而下扫描下来，优先靠边-->
<div class='bar-2'>div2</div>
<div class='bar-3'>div3</div>
<div class='bar-4'>div4</div>
</body>
</html>
```
<iframe src="/public/p5demo/float/p5_0001.html"></iframe>

# 自然float:left 但其中reset block

整个浮动布局就要重新向下排列  
例如3不浮动时，不止3要不浮动了，2的位置还要被3占据  
同时4的浮动变成了初始，重新顶格计算浮动  
```css
.bar-3 {
        background-color: lightblue;
        width: 300px;
        height: 100px;
        opacity: 0.7;
        /*float: left;*/
    }
```
<img src="mds_sucai/Web/css_float_0001.jpg" alt="001"/>

# 对第二个div清除浮动

可以看到整个变化，先有div3补位  
再有div4继续纵向排列  
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .bar{
        /*float: left;*/
        width: 200px;
        height: 80px;
        background-color: #C8AEFB;
        opacity: 0.7;
        float: left;
    }
    .bar-2 {
        background-color: orange;
        width: 150px;
        height: 80px;
        opacity: 0.7;
        float: left;
        /* 1，2浮动 =》 2不浮动，所以clear作用自己，让自己左边没有浮动元素 =》 让自己顶到标准行最前面*/
        clear:left;
    }
    .bar-3 {
        background-color: lightblue;
        width: 130px;
        height: 100px;
        opacity: 0.7;
        /*float: right;*/
    }
    .bar-4 {
        background-color: #f88b8b;
        width: 250px;
        height: 130px;
        opacity: 0.7;
        /*float: left;*/
    }
  </style>
</head>
<body>
<div class='bar'>div1</div>
<!--至上而下扫描下来，优先靠边-->
<div class='bar-2'>div2</div>
<div class='bar-3'>div3</div>
<div class='bar-4'>div4</div>
</body>
</html>
```
<img src="mds_sucai/Web/css_float_0002.jpg" alt="001"/>


# 对right进行float操作
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .bar{
        /*float: left;*/
        width: 200px;
        height: 80px;
        background-color: #C8AEFB;
        opacity: 0.7;
        float: right;
    }
    .bar-2 {
        background-color: orange;
        width: 150px;
        height: 80px;
        opacity: 0.7;
        float: right;
        /* 1，2浮动 =》 2不浮动，所以clear作用自己，让自己右边没有浮动元素 =》 让自己顶到标准行最后面*/
        /*clear:right;*/
    }
    .bar-3 {
        background-color: lightblue;
        width: 130px;
        height: 100px;
        opacity: 0.7;
        /*float: right;*/
    }
    .bar-4 {
        background-color: #f88b8b;
        width: 250px;
        height: 130px;
        opacity: 0.7;
        /*float: left;*/
    }
  </style>
</head>
<body>
<div class='bar'>div1</div>
<!--至上而下扫描下来，优先靠边-->
<div class='bar-2'>div2</div>
<div class='bar-3'>div3</div>
<div class='bar-4'>div4</div>
</body>
</html>
```
<iframe src="/public/p5demo/float/p5_0002.html"></iframe>

# 对right进行float:clear操作

如果对dv2 还清楚浮动，那么dv2还是在右边  
但是保留了block的属性  
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .bar{
        /*float: left;*/
        width: 200px;
        height: 80px;
        background-color: #C8AEFB;
        opacity: 0.7;
        float: right;
    }
    .bar-2 {
        background-color: orange;
        width: 150px;
        height: 80px;
        opacity: 0.7;
        float: right;
        /* 1，2浮动 =》 2不浮动，所以clear作用自己，让自己右边没有浮动元素 =》 让自己顶到标准行最后面*/
        clear:right;
    }
    .bar-3 {
        background-color: lightblue;
        width: 130px;
        height: 100px;
        opacity: 0.7;
        /*float: right;*/
    }
    .bar-4 {
        background-color: #f88b8b;
        width: 250px;
        height: 130px;
        opacity: 0.7;
        /*float: left;*/
    }
  </style>
</head>
<body>
<div class='bar'>div1</div>
<!--至上而下扫描下来，优先靠边-->
<div class='bar-2'>div2</div>
<div class='bar-3'>div3</div>
<div class='bar-4'>div4</div>
</body>
</html>
```

<iframe src="/public/p5demo/float/p5_0003.html"></iframe>
