# 先挪top再Y-50%
```css
 html,body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
    }
    .ct {
        width: 200px;
        height: 200px;
        background: orange;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
```

# 使用table-cell
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Title</title>
</head>
<style>


    .ct {
        width: 300px;
        height: 200px;
        border: 1px solid orange;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }

    .core{
        background-color: #C8AEFB;
        color: #333333;
    }
    .core-1{
        width: 100%;
    }
    .core-2{
        width: 75%;
    }
    .core-3{
        width: 50%;
    }
    .core-4{
        width: 25%;
    }
    .inb{
        display: inline-block;
    }


</style>
<body>
<div style='display: table'>
  <div class='ct'>
    <!--  全部靠左对齐-->
    <div class='core core-1'>core-1</div>
    <div class='core core-2'>core-2</div>
    <div class='core core-3'>core-3</div>
    <div class='core core-4'>core-4</div>
  </div>
</div>

<div>
  <div class='ct'>
    <!--  全部居中BUG对齐-->
    <div class='core core-1'>core-1</div>
    <div class='core core-2 inb'>core-2</div>
    <div class='core core-3 inb'>core-3</div>
    <div>
      <div class='core core-4 inb'>core-4</div>
    </div>
  </div>
</div>

</body>
</html>
```

<iframe src="/public/p5demo/p5_0010.html"></iframe>

# 伪元素+inline-block
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Title</title>
</head>
<style>
    .ct {
        width: 300px;
        height: 200px;
        border: 1px solid orange;
        display: block;
        text-align: center;
    }

    /* 用css 实现虚拟dom映射真实dom */
    .ct:before {
        content: '333';
        display: inline-block;
        vertical-align: middle;
        border: 1px solid grey;
        height: 100%;
    }
    .ct:after{
        content: '444';
        border: 1px solid grey;
        display: inline-block;
        /*height: 50%;*/
    }

    .core {
        background-color:#C8AEFB;
        width: 50%;
        height: 50%;
        display: inline-block;
        vertical-align: middle;
    }
</style>
<body>
  <div class='ct'>
    <div class='core'>core</div>
  </div>
</body>
</html>
```
<iframe src="/public/p5demo/p5_0011.html"></iframe>

# grid+area
```html
<style>
    .ct {
        width: 300px;
        height: 200px;
        display: grid;
        grid-template-columns: repeat(3, 33.3%);
        grid-template-rows: repeat(3, 33.3%);
        grid-template-areas:
                'a b c'
                'd e f'
                'g h i';
        border: 1px dashed orange;
    }

    .core {
        background-color: #C8AEFB;
        color: #333333;
        grid-area: e;
    }

    .core-u {
        width: 100%;
    }

    .core-hit {

    }


</style>
<body>
<div class='ct'>
  <div class='core core-1'>core-1</div>
</div>
</body>
```

# inline-block组合
```html
<style>


    .ct {
        background-color: pink;
        width: 500px;
        height: 200px;
        text-align: center;
        overflow: hidden;
    }

    .ct .core{
        background-color: deepskyblue;
        display: inline-block;
        color: #ffffff;
        width: 100px;
        height: 100px;
        line-height: 100px;
        vertical-align: middle;
    }

    .ct .corebro{
        height: 100%;
        width: 2px;
        background: red;
        display: inline-block;
        vertical-align: middle;
    }
</style>
<body>
<div class='ct'>
  <div class='core'>core</div>
  <div class="corebro"></div>
</div>
</body>
```
<iframe src="/public/p5demo/p5_0012.html"></iframe>
