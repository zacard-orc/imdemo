# 字体引用
```css
    @font-face {
          font-family: SourceHanSansCNRegular;
          src:  url('./SourceHanSansCN-Regular.ttf') format('truetype')
      }

      @font-face {
          font-family: SourceHanSansCNBold;
          src:  url('./SourceHanSansCN-Bold.ttf') format('truetype')
      }

      @font-face {
          font-family: NotoSansTC-Bold;
          src:  url('./NotoSansTC-Bold.otf') format('opentype')
      }

      @font-face {
          font-family: NotoSansTC-Regular;
          src:  url('./NotoSansTC-Regular.otf') format('opentype')
      }
    
      p {
          font-size: 0.8rem;
      }
      p.bold {
          font-family: SourceHanSansCNBold;
      }
      p.boldnt {
          font-family: NotoSansTC-Bold;
      }
      p.regular {
          font-family: SourceHanSansCNRegular;
      }
      p.regularnt {
          font-family: NotoSansTC-Regular;
      }

```



# 字体解码
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Title</title>
  <script src="https://opentype.js.org/dist/opentype.js"></script>

</head>
<body>

</body>
<script>
  // const buffer = fetch('./NotoSansTC-Bold.otf').then(res => {
  const buffer = fetch('./SourceHanSansCN-Bold.ttf').then(res => {
    return res.arrayBuffer()
  }).then(bf=>{
    console.log(bf)
    const font = opentype.parse(bf)
    console.log(font)
  })

</script>
</html>
```
<img src="mds_sucai/Web/css_font_z1.jpg" alt="1" width="800px"/>

