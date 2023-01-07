# 自然-无配置 inline-block

满足条件：  
1，外部有个常规的容器div，不用设置任何额外属性  
2，内部元素使用inline-block或者inline元素    
3，使用div+inline-block  
4，使用span  
5，同理使用fontsize,padding,lineheight  

```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Title</title>
</head>
<body>
<div class='ct'>
  <div class='core core1'>上海</div>
  <div class='core core2'>北京</div>
  <div class='core core3'>广州</div>
</div>
</body>
<style>
  .ct {
      width: 300px;
      height: 200px;
      background-color: lightblue;
      padding-top: 10px;
      box-sizing: border-box;
  }
  .core {
      display: inline-block;
      width: 50px;
      background-color: #C8AEFB;
      /*vertical-align: middle;*/
  }
  .core1 {
      height: 50px;
      box-sizing: border-box;
      /*padding-top: 20px;*/
      /*font-size: 14px;*/
      /*line-height: 50px;*/
  }
  .core2 {
      height: 150px;
      box-sizing: border-box;
      /*padding-top: 40px;*/
      /*font-size: 25px;*/
      /*line-height:150px;*/
  }
  .core3 {
      height: 100px;
      box-sizing: border-box;
      /*padding-top: 60px;*/
      /*font-size: 25px;*/
      /*line-height:100px;*/
  }
</style>
</html>
```

<img src="mds_sucai/Web/css_baseline001.jpg" alt="001"/>

# 自然-字体随机 inline-block
```css
 .core1 {
      height: 50px;
      box-sizing: border-box;
      /*padding-top: 20px;*/
      font-size: 14px;
      /*line-height: 50px;*/
  }
  .core2 {
      height: 150px;
      box-sizing: border-box;
      /*padding-top: 40px;*/
      font-size: 24px;
      /*line-height:150px;*/
  }
  .core3 {
      height: 100px;
      box-sizing: border-box;
      /*padding-top: 60px;*/
      font-size: 20px;
      /*line-height:100px;*/
  }
```

<img src="mds_sucai/Web/css_baseline002.jpg" alt="001"/>

# top-字体随机 inline-block
```css
 .core {
      display: inline-block;
      width: 50px;
      background-color: #C8AEFB;
      vertical-align: top;
  }
```
<img src="mds_sucai/Web/css_baseline003.jpg" alt="001"/>

# middle-字体随机 inline-block
```css
 .core {
      display: inline-block;
      width: 50px;
      background-color: #C8AEFB;
      vertical-align: middle;
  }
```
<img src="mds_sucai/Web/css_baseline004.jpg" alt="001"/>

# baseline-字体随机 inline-block
```css
 .core {
      display: inline-block;
      width: 50px;
      background-color: #C8AEFB;
      vertical-align: baseline;
  }
```
<img src="mds_sucai/Web/css_baseline005.jpg" alt="001"/>

# bottom-字体随机 inline-block
```css
 .core {
      display: inline-block;
      width: 50px;
      background-color: #C8AEFB;
      vertical-align: bottom;
  }
```
<img src="mds_sucai/Web/css_baseline006.jpg" alt="001"/>


# 自然-字体随机 inline
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Title</title>
</head>
<body>
<div class='ct'>
  <span class='core core1'>上海</span>
  <span class='core core2'>北京</span>
  <span class='core core3'>广州</span>
</div>
</body>
<style>
  .ct {
      width: 300px;
      height: 200px;
      background-color: lightblue;
      padding-top: 10px;
      box-sizing: border-box;
  }
  .core {
      width: 50px;
      background-color: #C8AEFB;
  }
  .core1 {
      /*padding: 10px 0;*/
      font-size: 14px;
      /*line-height: 50px;*/
  }
  .core2 {
      /*padding: 30px 0;*/
      font-size: 40px;
      /*line-height:150px;*/
  }
  .core3 {
      /*padding: 20px 0;*/
      font-size: 25px;
      /*line-height:100px;*/
  }
</style>
</html>
```
<img src="mds_sucai/Web/css_baseline007.jpg" alt="001"/>

# top-字体随机 inline
```css
.core {
      width: 50px;
      background-color: #C8AEFB;
      vertical-align: top;
  }
```
<img src="mds_sucai/Web/css_baseline008.jpg" alt="001"/>


# middle-字体随机 inline
```css
.core {
      width: 50px;
      background-color: #C8AEFB;
      vertical-align: middle;
  }
```
<img src="mds_sucai/Web/css_baseline009.jpg" alt="001"/>


# baseline-字体随机 inline
```css
.core {
      width: 50px;
      background-color: #C8AEFB;
      vertical-align: baseline;
  }
```
<img src="mds_sucai/Web/css_baseline010.jpg" alt="001"/>


# bottom-字体随机 inline
```css
.core {
      width: 50px;
      background-color: #C8AEFB;
      vertical-align: bottom;
  }
```
<img src="mds_sucai/Web/css_baseline011.jpg" alt="001"/>

