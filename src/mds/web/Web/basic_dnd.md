# 使用h5 draggable
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>dnd -1</title>
</head>
<body>
  <div class='zzz'
       id='zzz'
       draggable='true'
       ondragstart='onDragStart(event)'
       ondrag='onDrag(event)'
       ondragend='onDragEnd(event)'
  >12344
  </div>
  <div class='box' ondrop="handleDrop(event)" ondragover="onDragOver(event)">
  </div>
</body>
<style>
    .box {
        width: 400px;
        height: 400px;
        border: 1px solid grey;
        position: absolute;
        z-index: 1;
    }
    .zzz {
        border: 1px solid grey;
        width: 100px;
        height: 100px;
        background-color: lightblue;
        position: absolute;
        z-index: 2;
    }
</style>
<script>
  function onDragStart(evt) {
    console.log('on start', evt.x, evt.y)
    const ele = evt.target;

    setTimeout(function(){
      ele.style.visibility = "hidden";
    }, 0)
  }

  function onDrag(e) {
    // console.log("on drag", e.x, e.y);
  }

  function onDragEnd(e) {
    const ele = e.target;
    console.log("on drop", e.x, e.y);
    ele.style.visibility = "visible";
    ele.style.left = e.x-50+'px'
    ele.style.top = e.y-50+'px'

  }

  function onDragOver(e){
    e.preventDefault()
  }

  function handleDrop(e) {
    console.log("on drop",e.x,e.y);
    e.preventDefault();
  }
</script>
</html>
```

<iframe src="/public/p5demo/dnd/p5_dnd_0001.html"></iframe>

# 使用传统touchmove
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Title</title>
</head>
<body>
<div id='cc' class='container'>
  <div class='sq sq1' id='s1'>1</div>
  <div class='sq sq2' id='s2'>2</div>
  <div class='sq sq3' id='s3'>3</div>
</div>

</body>
<style>
    .container {
        width: 400px;
        height: 600px;
        border: 1px solid gray;
    }

    .sq {
        width: 100px;
        height: 100px;
        user-select: none;
        position: absolute;
        /*transition: top 0.1s ease-out, left 0.1s ease-out;*/
        /*transition: top 0.1s ease-in, left 0.1s ease-in;*/
        transition: top 0.05s ease-out, left 0.05s ease-out;
    }

    .sq1 {
        background-color: #3cc3c3;
    }

    .sq2 {
        background-color: #aa3cc3;
        top: 100px
    }

    .sq3 {
        background-color: #568131;
        top: 200px
    }
</style>
<script>
  /**
   * @description 节流适合阻尼
   * @description 不节流适合迅速定位
   * @type {HTMLElement}
   */
  const s1 = document.getElementById('s1');
  const s2 = document.getElementById('s2');
  const s3 = document.getElementById('s3');
  const cc = document.getElementById('cc');

  // 成对更好
  const thtTm = 100;
  const anmTm = 50;

  const hitObj = {
    isMoving: false,
    obj: null,
  };

  const getPoint = (ex) => {
    if(ex.touches){
      return {
        x:ex.touches[0].clientX,
        y:ex.touches[0].clientY,
      }
    }
    return {
      x: ex.clientX,
      y: ex.clientY,
    };
  };

  function debounce(fn, wait) {
    let timer = null;
    return function() {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(fn, wait);
    };
  }

  function throttle(fn, delay) {
// last为上一次触发回调的时间, timer是定时器
    let last = 0, timer = null;
// 将throttle处理结果当作函数返回
    return function() {
// 保留调用时的this上下文
      let context = this;
// 保留调用时传入的参数
      let args = arguments;
// 记录本次触发回调的时间
      let now = +new Date();
// 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
      if (now - last < delay) {
// 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
        clearTimeout(timer);
        timer = setTimeout(function() {
          last = now;
          fn.apply(context, args);
        }, delay);
      } else {
// 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
        last = now;
        fn.apply(context, args);
      }
    };
  }

  const hdMouseDownAll = (e) => {
    console.log('drag start', getPoint(e), e.path);
    if (e.path[0].getAttribute('id').includes('s')) {
      console.log('hit', e.path[0]);
      const target = e.path[0]
      hitObj.obj = target;
      hitObj.isMoving = true;
      hitObj.anmTm = anmTm/1000;
// target.style.transition = `top ${hitObj.anmTm}s ease-out, left ${hitObj.anmTm}s ease-out`
    }
  };

  const hdMouseMoveAll = function(e) {
    if (hitObj.obj && hitObj.isMoving) {
// console.log('drag moving',getPoint(e),e.path)
      hitObj.obj.style.left = getPoint(e).x-50+'px'
      hitObj.obj.style.top = getPoint(e).y-50+'px'
    }
  };


  const hdMouseUpAll = (e) => {
    console.log('drag end', getPoint(e), e.path);
    if (hitObj.obj) {
      hitObj.obj = null;
      hitObj.isMoving = false;
    }
  };

  const debMove = throttle(hdMouseMoveAll, thtTm);

  // cc.addEventListener('mousedown', hdMouseDownAll);
  // // cc.addEventListener('mousemove', debMove);
  // cc.addEventListener('mousemove', hdMouseMoveAll);
  // cc.addEventListener('mouseup', hdMouseUpAll);

  // cc.addEventListener('mousedown', (e)=>{
  // console.log(e)
  // });


  const h5MouseDownAll = (e) => {
    e.preventDefault()

    console.log('drag start', getPoint(e), e.touches);
    const tgt = e.touches[0].target
    if (tgt.getAttribute('id').includes('s')) {
      console.log('hit', tgt);
      hitObj.obj = tgt;
      hitObj.isMoving = true;
      hitObj.anmTm = anmTm/1000;
// target.style.transition = `top ${hitObj.anmTm}s ease-out, left ${hitObj.anmTm}s ease-out`
    }
  };

  const h5MouseMoveAll = function(e) {
    e.preventDefault()

    if (hitObj.obj && hitObj.isMoving) {
// console.log('drag moving',getPoint(e),e.path)
      hitObj.obj.style.left = getPoint(e).x-50+'px'
      hitObj.obj.style.top = getPoint(e).y-50+'px'
    }
  };


  const h5MouseUpAll = (e) => {
    e.preventDefault()

    console.log('drag end', getPoint(e), e.touches);
    if (hitObj.obj) {
      hitObj.obj = null;
      hitObj.isMoving = false;
    }
  };

  cc.addEventListener('touchstart', h5MouseDownAll, {passive: true})
  cc.addEventListener('touchmove',h5MouseMoveAll, {passive: true})
  cc.addEventListener('touchend', h5MouseUpAll, {passive: true})
</script>
</html>
```
<iframe src="/public/p5demo/dnd/p5_dnd_0002.html"></iframe>

# 传统mousemove+拖动+拉伸
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>js实现拖拽和拉伸</title>
</head>
<body>
<div id="test" class='demo'>
  我是测试的可拉伸，拖动的元素
</div>

</body>
<script>
  var clickBox = document.getElementById('test');
  /**
   *time/author：2019/5/9 "mouyao"
   *desc:当在当前元素上按下鼠标时，就触发拖动和拉伸操作
   */
  clickBox.onmousedown = function(e){
    e=e||event;  //兼容ie和其他浏览器的写法
    var mouseDownX = e.clientX;
    var mouseDownY = e.clientY;
    var clickBoxLeft = clickBox.offsetLeft;
    var clickBoxTop = clickBox.offsetTop;
    var clickBoxWeight = clickBox.offsetWidth;
    var clickBoxHeight = clickBox.offsetHeight;

    // 距离0，0的x,y,w,h
    console.log(clickBoxLeft, clickBoxTop,clickBoxWeight,clickBoxHeight)

    // 也是整个落点判断
    var direction = 0; // 这个是拉伸的起点 || 边
    if (mouseDownX<clickBoxLeft+30) {
      direction='left';
    } else if (mouseDownX >clickBoxLeft+clickBoxWeight - 30){
      direction='right';
    }
    console.log(direction)

    if (mouseDownY<clickBoxTop+30){
      direction = 'top';
    } else if (direction < clickBoxTop + clickBoxHeight - 30) {
      direction = 'bottom';
    }
    console.log(direction)


    if ((clickBoxLeft + clickBoxWeight-30)< mouseDownX&&mouseDownX< (clickBoxLeft + clickBoxWeight) && (clickBoxTop+clickBoxHeight-30)<mouseDownY&& mouseDownY<(clickBoxTop+clickBoxHeight)) {
      direction = 'rightBottomCorner';
    }else if((clickBoxLeft +30)< mouseDownX&&mouseDownX< (clickBoxLeft + clickBoxWeight-30) && (clickBoxTop+30)<mouseDownY&& mouseDownY<(clickBoxTop+clickBoxHeight-30)){     //如果是在中间位置，则实现拖动功能
      direction="drag";
    }

    console.log(direction)


    /**
     *time/author：2019/5/9 "mouyao"
     *desc:当鼠标开始滑动的时候，根据鼠标的移动方向去调整他的X，Y坐标和长宽
     */
    document.onmousemove = function(e) {
      e = e || event; //是要是使用原生js给我们提供的e回调参数，这存储了很多有用的信息
      var xx = e.clientX;
      var yy = e.clientY;
      if (direction==='left') {
        clickBox.style.width = clickBoxWeight + mouseDownX - xx + 'px'
        clickBox.style.left = xx + 'px';
      } else if (direction==='right') {
        clickBox.style.width = clickBoxWeight + xx - mouseDownX + 'px'
      }

      if (direction==='top'){
        clickBox.style.height = clickBoxHeight + mouseDownY - yy + 'px';
        clickBox.style.top = yy + 'px';
      } else if (direction==='bottom'){
        clickBox.style.height = clickBoxHeight + yy - mouseDownY + 'px';
      }
      if (direction==='rightBottomCorner'){
        clickBox.style.width = clickBoxWeight +xx-mouseDownX+'px'
        clickBox.style.left =clickBoxLeft+'px';
        clickBox.style.height = clickBoxHeight +yy-mouseDownY+'px';
        clickBox.style.top =clickBoxTop+'px';
      }else if(direction==="drag"){
        console.log(xx,mouseDownX,clickBoxLeft)
        // 鼠标移动的距离 就是 方块移动的距离
        // 所以方块的落点或者刷新点就是 等于 方块移动的距离 + 方块起始边距
        clickBox.style.left =xx-mouseDownX+clickBoxLeft+ 'px';
        clickBox.style.top =yy-mouseDownY+clickBoxTop+ 'px';
      }
      //return false; //这里为了避免抖动
    };
    document.onmouseup = function() {
      document.onmousemove = null;
      document.onmouseup = null;
    };
    if (e.preventDefault){
      e.preventDefault();
    }
  };
  /**
   *time/author：2019/5/9 "mouyao"
   *desc:在拉伸的过程中，实现居中状态长存,有时间将其做成一个插件公布出来，供大家使用
   */


</script>
<style>
    .demo {
        position:absolute;
        left:0;
        top:0;
        width:600px;
        height:600px;
        border:1px solid #adadad;
    }
</style>
</html>
```

# vue指令+拉伸
```text
思路：
1，绑定时创建容器的四角元素
2，四角元素绑定mousedown
3，mousedown时，监听document mousemove/mouseup
4，根据document mousemove的反馈，更新容器的w,h
5，根据document mouseup的反馈，清空监听函数

```
```javascript
import Vue from 'vue'
Vue.directive('stretch', {
  // 当被绑定的元素插入到 DOM 中时……
  // parentDom, createDom, name, bind
  // name = 'resizeTR', 'resizeBR', 'resizeTL', 'resizeBL'
  // bind = el raw bind
  resize (oParent, handle, type, bind) {
    handle.onmousedown = function (event) {
      const screenX = event.clientX - handle.offsetLeft  //点击点离屏幕左边的距离
      const screenY = event.clientY - handle.offsetTop //点击点离屏幕上边的距离
      const parentHeight = oParent.offsetHeight
      const parentWidth = oParent.offsetWidth
      const parentTop = oParent.offsetTop
      const parentLeft = oParent.offsetLeft

      const style = window.getComputedStyle(oParent)
      const getCssNumber = (type) => {
        return parseFloat(style[type])
      }

      if (getCssNumber('marginTop')) {
        oParent.style.top = style.marginTop
        oParent.style.marginTop = 0
      }

      if (getCssNumber('marginLeft')) {
        oParent.style.left = style.marginLeft
        oParent.style.marginLeft = 0
      }
      document.onmousemove = function (event) {

        const moveX = event.clientX - screenX //x轴移动的距离
        const moveY = event.clientY - screenY //Y轴移动的距离
        const maxWidth = document.documentElement.clientWidth - 100 //设置拉伸最大宽度
        let minW, minH
        console.log(bind)
        if (bind?.value?.minWidth) {
          minW = bind?.value?.minWidth  //设置拉伸最小宽度
        } else {
          minW = 320  //设置拉伸最小宽度
        }
        if (bind?.value?.minHeight) {
          minH = bind?.value?.minHeight //设置拉伸最小高度
        } else {
          minH = 80//设置拉伸最小高度
        }

        console.log(minW, minH)


        const leftPosition = moveX < 0 ? parentLeft - Math.abs(moveX) : parentLeft + Math.abs(moveX)  //left 的值
        const topPosition = moveY < 0 ? parentTop - Math.abs(moveY) : parentTop + Math.abs(moveY)
        switch (type) {
          case 'resizeTR': {
            if (moveX > maxWidth) {
              oParent.style.width = `${maxWidth}px`
            } else {
              oParent.style.width = `${moveX < minW ? minW
                : moveX}px`
            }
            const height = parentHeight + Math.abs(moveY) < minH ? minH : parentHeight + Math.abs(moveY)
            const minHeight = parentHeight - moveY < minH ? minH : parentHeight - moveY
            oParent.style.height = `${moveY < 0 ? height : minHeight}px`
            if (minHeight > minH) {
              console.log(parentTop, Math.abs(moveY))
              oParent.style.top = `${topPosition}px`
            }
            break;
          }

          case 'resizeBR': {
            if (moveX > maxWidth) {
              oParent.style.width = `${maxWidth}px`
            } else {
              oParent.style.width = `${moveX < minW ? minW
                : moveX}px`
            }
            oParent.style.height = `${moveY < minH ? minH : moveY}px`
            break;
          }

          case 'resizeTL': {
            console.log(moveX)
            if (moveX > maxWidth) {
              oParent.style.width = `${maxWidth}px`
            } else {

              oParent.style.width = `${parentWidth - moveX < minW ? minW
                : parentWidth - moveX}px`
              if (parentWidth - moveX >= minW) {
                oParent.style.left = `${leftPosition}px`
              }
            }
            const minHeight = parentHeight - moveY < minH ? minH : parentHeight - moveY
            oParent.style.height = `${minHeight}px`
            if (minHeight > minH) {
              oParent.style.top = `${topPosition}px`
            }
            break;
          }

          case 'resizeBL': {
            const minWidth = parentWidth - moveX < minW ? minW : parentWidth - moveX

            if (parentWidth >= minW && moveX < 0) {
              oParent.style.width = `${minWidth}px`
              if (minWidth > minW) {
                oParent.style.left = `${leftPosition}px`
              }

            }
            if (parentWidth >= minW && moveX > 0) {
              oParent.style.width = `${minWidth}px`
              if (minWidth > minW) {
                oParent.style.left = `${leftPosition}px`
              }
            }
            oParent.style.height = `${moveY < minH ? minH : moveY}px`
          }
        }

        return false
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
      }
      return false
    }
  },
  createElement (name, parentDom, resizeFunction, bind) {

    const createDom = document.createElement('div');
    createDom.classList.add(name);
    if (bind?.value?.className) {
      const { className } = bind.value;
      const insideDom = parentDom.getElementsByClassName(className)[0];
      insideDom.classList.add('kfang-scale-warp');
      insideDom.appendChild(createDom);
      resizeFunction(insideDom, createDom, name, bind)
    } else {
      parentDom.classList.add('kfang-scale-warp');
      parentDom.appendChild(createDom);
      resizeFunction(parentDom, createDom, name, bind)
    }


  },
  bind: function (el, bind) {
    // 只绑定一次
    const { resize, createElement } = bind.def;
    // 聚焦元素
    ['resizeTR', 'resizeBR', 'resizeTL', 'resizeBL'].forEach((name) => createElement(name, el, resize, bind))
  }
})
```

使用
```vue
<el-dialog
      title="外层 Dialog"
      :visible.sync="outerVisible"
      v-stretch="{ className: 'el-dialog', minWidth: 300, minHeight: 400 }"
    >
      <el-dialog
        width="30%"
        title="内层 Dialog"
        :visible.sync="innerVisible"
        append-to-body
      >
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true"
          >打开内层 Dialog</el-button
        >
      </div>
</el-dialog>
```
