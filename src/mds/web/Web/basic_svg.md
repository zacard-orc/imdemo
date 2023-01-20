# viewBox视角口

```svg
  <svg viewBox="30 10 200 300">
    <rect x="0" y="0" width="100%" height="100%" fill='#f3f3f3'/>
    <circle cx="50%" cy="50%" r="4" fill="#109391" />
  </svg>
```

```text
30 表示相对于svg左上角的横坐标。
10 表示相对于svg左上角的纵坐标。
200 表示截取的视区的宽度。
300 表示截取的视区的高度。
```

# polygon多边形
```svg
<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
             stroke="green" fill="transparent" stroke-width="5"/>
```

```text
顺时针方向 x1 y1 x2 y2 x3 y3......
或者说序号递增
如五角形，三角形，六边形
```

# polyline多线段
```svg
<polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
              stroke="orange" fill="transparent" stroke-width="5"/>
```

```text
顺时针方向 x1 y1 x2 y2 x3 y3......
或者说序号递增
如折线段
```

# ellipse椭圆
```svg
<ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>
```

```text
rx 横径
ry 纵径
```

# line线条
```svg
<line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5"/>
```

```text
x1 y1, x2 y2 两个端点
```

# circle圆环
```svg
<circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
```

# rect矩形
```svg
<rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
```

```text
rx ry 代表圆角端半径
```

# path超级路径
```svg
<path d="M20,230 Q40,205 60,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
```

```text
M Moveto 落笔x,y

L lineto 将当前位置练一根线到新位置 (x,y)
H horizontal lineto，在水平方向上移动到x并连线
V vertical lineto，在垂直方向上移动到y并连线

Q quadratic Bézier curve 二次贝塞尔曲线x1 y1, x y
S smooth curveto 三次贝塞尔曲线x2 y2, x y
C curveto 三次贝塞尔曲线x1 y1, x2 y2, x y 
T smooth quadratic Bézier curveto，简写的二次贝塞尔曲线x y

A Arc elliptical 弧形 rx ry x-axis-rotation large-arc-flag sweep-flag x y

Z closepath，闭合路径，从当前点画一条直线到路径的起点，不区分大小写
```

```text
A Arc elliptical 弧形 rx ry x-axis-rotation large-arc-flag sweep-flag x y

rx / ry：x/y 轴半径
x-axis-rotation：旋转情况，正数为顺时针
large-arc-flag：角度大小，以 180 度为分界线，

0 表示小角度弧，
1 表示大角度弧。

sweep-flag：弧线方向

0 表示逆时针
1 表示顺时针

x / y：弧形的终点
```


# text文字
```svg
<text x="100" y="100" dx="20 40 60 80 100" fill="black" style="font-size:40px;">text测试</text>
```

```text
dx 每个字符相对前一个字符的偏移距离
dy 每个字符相对前一个字符的偏移距离
```

# animate动画
```svg
<svg width="500px" height="100px">
    <rect x="0" y="0" width="100" height="100" fill="#feac5e">
            <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="0" y="50"  fill="black" style="font-size:40px;">
      text测试
      <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
    </text>
</svg>
```

```text
animate 需要嵌套在属性里面
```
