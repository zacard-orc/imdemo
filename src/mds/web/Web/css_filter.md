# 灰度grayscale

```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>css 滤镜</title>
</head>
<body>
<div class='z'>
  <div class='b b1'>1</div>
  <div class='b b2'>2</div>
  <div class='b b3'>3</div>
</div>
</body>
<style>
    .z {
        width: 600px;
        height: 222px;

        display: grid;
        grid-template-columns: repeat(3,33%);
    }
    .b {
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: 40px;
        padding-left: 10px;
        box-sizing: border-box;
        text-shadow: 0 0 2px #ac53cd;

    }
    .b1 {
        background-position: 0% 50%;
        background-size: cover;
        background-image: url('./img_2.png');
        filter: grayscale(0);
    }
    .b2 {

        background-position: 33% 100%;
        background-size: cover;
        background-image: url('./img_2.png');
        filter: grayscale(0.5);

    }
    .b3 {

        background-position: 66% 50%;
        background-size: cover;
        background-image: url('./img_2.png');
        filter: grayscale(1);

    }
</style>
</html>
```
<img src="mds_sucai/Web/css_filter_gray1.jpg" alt="001"/>

# 模糊blur
```html
filter: blur(3px);
filter: blur(13px);
filter: blur(23px);
```
<img src="mds_sucai/Web/css_filter_blur1.jpg" alt="001"/>


# 亮度brightness
```html
filter: brightness(0.1);
filter: brightness(0.5);
filter: brightness(0.1);
```
<img src="mds_sucai/Web/css_filter_brigthness.jpg" alt="001"/>

# 对比度contrast
```html
filter: contrast(100%);
filter: contrast(200%);
filter: contrast(300%);
```
<img src="mds_sucai/Web/css_filter_contrast.jpg" alt="001"/>

# 渗透saturate
```html
filter: saturate(30%);
filter: saturate(60%);
filter: saturate(90%);
```
<img src="mds_sucai/Web/css_filter_saturate.jpg" alt="001"/>

# 乌贼sepia
```html
filter: sepia(30%);
filter: sepia(60%);
filter: sepia(90%);
```
<img src="mds_sucai/Web/css_filter_sepia.jpg" alt="001"/>


# hue旋转rotate
```html
filter: hue-rotate(0deg);
filter: hue-rotate(90deg);
filter: hue-rotate(180deg);
```
<img src="mds_sucai/Web/css_filter_huerotate.jpg" alt="001"/>

# 组合使用
```html
filter: hue-rotate(180deg) sepia(60%);
```

# 轮廓和阴影
```html
<!DOCTYPE html>
<html>
<head>
  <title>Title of the document</title>
  <style>
      img {
          width: 200px;
      }
      .box-shadow {
          float: left;
          box-shadow: 7px 7px 7px #666666;
      }
      .drop-shadow {
          float: right;
      }
      .drop-shadow img {
          filter: drop-shadow(4px 4px 4px #666666);
          -webkit-filter: drop-shadow(4px 4px 4px #666666);
      }


      .bs22 img{
          filter:
                  drop-shadow(1px 0 0 orangered)
                  drop-shadow(2px 0 0 orangered)
                  drop-shadow(2.5px 0 0 orangered)
                  drop-shadow(0 1px 0 orangered)
                  drop-shadow(0 2px 0 orangered)
                  drop-shadow(0 2.5px 0 orangered)
                  drop-shadow(-1px 0 0 orangered)
                  drop-shadow(-2px 0 0 orangered)
                  drop-shadow(-2.5px 0 0 orangered)
                  drop-shadow(0 -1px 0 orangered)
                  drop-shadow(0 -2px 0 orangered)
                  drop-shadow(0 -2.5px 0 orangered)
                  drop-shadow(4px 4px 4px #666666);

      }

  </style>
</head>
<body>
<div class="images">
  <div class="drop-shadow">
    <p>Drop-shadow
      <img src="https://images.vexels.com/media/users/3/157932/isolated/preview/951a617272553f49e75548e212ed947f-curved-check-mark-icon-by-vexels.png" />
    </p>
  </div>
  <div class="drop-shadow">
    <p>Drop-shadow
      <img src="./drw1.png" />
    </p>
  </div>

</div>
<p class='bs22'>
  <img src="./drw1.png" />
</p>
</body>
</html>

```
<img src="mds_sucai/Web/css_filter_outline.jpg" alt="00x"/>
