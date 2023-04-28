# 传统加载指定Dom
```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <title>vConsole</title>
    <script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
</head>
<body>
<div class='zz'>

</div>
<div id='vbb'></div>
</body>
<style>
    html,body {
        margin: 0;
        padding: 0;
    }
    .zz {
        background-color: lightblue;
        opacity: 0.8;
        height: 100vh;
    }
</style>
<script>
    document.documentElement.style.fontSize = '50px';
    const domVbb = document.getElementById('vbb')
    const vConsole = new window.VConsole();
    vConsole.setOption({
        target: domVbb
    })
</script>

</html>

```
