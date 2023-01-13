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
