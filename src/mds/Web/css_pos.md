# 没有任何pos

```html
<body>
<div class='abc'></div>
<div class='mark'>123</div>
</body>
<style>
  .abc {
      width: 300px;
      height: 200px;
      background-color: #aee5ae;
      /*position: relative;*/
      /*top: 20px;*/
      /*transform: translateY(15px);*/
      /*opacity: 0.5;*/
      /*float: left;*/
  }
  .mark {
      width: 30px;
      height: 30px;
      background-color: #dea4be;
  }
</style>
```

<iframe src="/public/p5demo/p5_0005.html"></iframe>

# 使用pos relative 位置被保留

```css
 .abc {
      width: 300px;
      height: 200px;
      background-color: #aee5ae;
      position: relative;
      top: 20px;
      /*transform: translateY(15px);*/
      opacity: 0.5;
      /*float: left;*/
  }

```

<iframe src="/public/p5demo/p5_0006.html"></iframe>

# 使用translateY位置被保留
```css
.abc {
      width: 300px;
      height: 200px;
      background-color: #aee5ae;
      /*position: relative;*/
      /*top: 20px;*/
      transform: translateY(15px);
      opacity: 0.5;
      /*float: left;*/
  }
```
<iframe src="/public/p5demo/p5_0006.html"></iframe>

# 叠加使用trans和pos位置被保留
```css
.abc {
      width: 300px;
      height: 200px;
      background-color: #aee5ae;
      position: relative;
      top: 10px;
      transform: translateY(10px);
      opacity: 0.5;
      /*float: left;*/
  }
```
<iframe src="/public/p5demo/p5_0006.html"></iframe>

# 加上float: left
加上float: left后 无论transform还是relative都出现了分离  
block 填充坑位
但是block里都text还是保持没动

```css
 .abc {
    width: 300px;
    height: 200px;
    background-color: #aee5ae;
    /*position: relative;*/
    /*top: 10px;*/
    transform: translateY(10px);
    opacity: 0.5;
    float: left;
}
.abc {
    width: 300px;
    height: 200px;
    background-color: #aee5ae;
    position: relative;
    top: 10px;
    /*transform: translateY(10px);*/
    opacity: 0.5;
    float: left;
}
```
<iframe src="/public/p5demo/p5_0007.html"></iframe>


# pos变成absoulte
位置被填充，无法占位了  
无论是否能设置float   
```css
.abc {
      width: 300px;
      height: 200px;
      background-color: #aee5ae;
      position: absolute;
      /*transform: translateY(10px);*/
      opacity: 0.5;
      /*float: left;*/
  }
```

<iframe src="/public/p5demo/p5_0008.html"></iframe>

# 层内block
```html
<body>
<div class='abc'>
  <div class='space'>
    <div class='space-content'>space-content</div>
  </div>
  <div class='normal'>normal</div>
</div>
</body>
<style>
  .abc {
      width: 300px;
      height: 200px;
      background-color: #aee5ae;
  }
  .normal {
      width: 150px;
      height: 50px;
      background-color: lightblue;
      text-align: right;
      font-size: 12px;
  }
  .space {
      position: relative;
      height: 0;
  }
  .space-content {
      position: absolute;
      /*z-index: 10;*/
      top: 10px;
      width: 100px;
      height: 25px;
      font-size: 12px;
      background-color: palevioletred;
  }
</style>
```

<iframe src="/public/p5demo/p5_0009.html"></iframe>
