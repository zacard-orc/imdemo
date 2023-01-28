# %百分比+gap的溢出
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Title</title>
</head>
<body>
<div class='container'>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
</body>
<style>
  .container {
      display: grid;
      width: 300px;
      height: 200px;
      border: 1px solid grey;
      grid-template-columns: repeat(3,33%);
      grid-template-rows: repeat(2,50%);
      box-sizing: border-box;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
  }
  .container > div {
      background-color: #e9d5d5;
      box-sizing: border-box;
  }

</style>
</html>

```

<img src="mds_sucai/Web/css_grid01.jpg" alt="001" width="300px"/>

# px+gap的溢出
```css
 .container {
      display: grid;
      width: 300px;
      height: 200px;
      border: 1px solid grey;
      grid-template-columns: repeat(3,100px);
      grid-template-rows: repeat(2,100px);
      box-sizing: border-box;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
  }
```

# fr+gap的不溢出
```css
 .container {
      display: grid;
      width: 300px;
      height: 200px;
      border: 1px solid grey;
      grid-template-columns: repeat(3,1fr);
      grid-template-rows: repeat(2,1fr);
      box-sizing: border-box;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
  }
```
<img src="mds_sucai/Web/css_grid02.jpg" alt="001" width="300px"/>
