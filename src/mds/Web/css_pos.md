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

# 使用transform translateY 位置被保留
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

# 叠加使用tranform和pos relative 位置被保留
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
