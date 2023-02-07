# 使用JSON对象来抽象控制schema

子组件
```vue
<template>
  <div>
    <div v-for="(el, idx) in zbz">
      <input
        v-model="real[el.vmodel]"
        type="text"
        :placeholder="el.placeholder"
        @input="onIptChange(this, el.evtype, idx)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayCd',
  props: {
    zbz: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      real: {},
    }
  },
  create() {
    // console.log(this.zbz)
  },
  mounted() {
    this.real = this.zbz.reduce((prev, el) => {
      prev[el.vmodel] = ''
      return prev
    }, {})
  },
  methods: {
    onIptChange(e, v, idx) {
      console.log(e, v, idx)
      console.log(this.real)
    },
  },
}
</script>

<style scoped lang="scss"></style>
```

外部使用
```vue
<template>
  <div>
    <play-cd :zbz="usecd"></play-cd>
  </div>
</template>

<script>
import PlayCd from './PlayCd'
export default {
  name: 'PlayGround',
  components: {
    PlayCd,
  },
  data() {
    return {
      usecd: [
        {
          vmodel: 'tom',
          placeholder: 'tomz',
          evtype: 'ev_tom',
        },
        {
          vmodel: 'jerry',
          placeholder: 'jerryz',
          evtype: 'ev_jerry',
        },
        {
          vmodel: 'site',
          placeholder: 'sitez',
          evtype: 'ev_site',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
```

# 在template里使用filter

```vue
<li v-for="item in $options.filters.limitArray(items, 3)">
```

# 给scss传递变量
必须使用字符串，如果有其他处理，则需要在外面处理完
```vue
<template>
  <div>
    <play-cd :zbz="usecd"></play-cd>
    <div class="abc" 
         :style="{ '--bkzDD': bkz, '--ncolor': ncolor }">
      12323
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </div>
</template>

<script>
import PlayCd from './PlayCd'
export default {
  name: 'PlayGround',
  components: {
    PlayCd,
  },
  data() {
    return {
      bkz: '40px',
      ncolor: 'blue',
    }
  },
}
</script>

<style scoped lang="scss">
.abc {
  font-size: var(--bkzDD);
  color: red;

  @for $i from 1 through 4 {
    > div:nth-child(#{$i}) {
      $zz: var(--ncolor);
      color: $zz;
    }
  }
}
</style>

```

# 指令
## 基础
```js
import Vue from 'vue'
Vue.directive('zexp', {
  getBookList() {
    console.log('1')
  },
  submitOrder() {
    console.log('2')
  },
  bind: function (el, bind) {
    console.log(el)
    console.log(bind)
    // 只绑定一次
    // const { resize, createElement } = bind.def;
    // 聚焦元素
    // ['resizeTR', 'resizeBR', 'resizeTL', 'resizeBL'].forEach((name) => createElement(name, el, resize, bind))
  },
})
```

```vue
<div v-zexp="{ foo: 'bar' }">体验v-zexp</div>
```

## 对象展示
```text
bind: function (el, bind) {...}

参数解析
el: 浏览器的原生dom对象
bind: {
   value: object // { foo: 'bar' }
   rawName: string // v-zexp,
   name: string // zexp
   expression: string // { foo: 'bar' }
   def: {
     bind: function
     getBookList: function // 自定义
     submitOrder: function // 自定义
   }
}
```

# scss多尺寸适配
## vue 语法
```vue
 <div
    :style="{
      '--abc': z,
      '--abcV': 50,
    }"
  >
</div>
```

## scss 语法
```scss
@function fun($w) {
  @return calc(calc(#{$w} / var(--abcV)) * 1rem);
}

.z1 {
  color: #000;
  margin-top: calc(var(--abc) + 50px);
  //width: calc(calc(100 / var(--abcV)) * 1rem);
  width: fun(100);
  @media screen and (min-width: 370px) and (max-width: 800px) {
    width: fun(200);
  }
  @media screen and (min-width: 800px) {
    width: fun(400);
  }
  border: 1px dashed grey;
}
```

# createApi
```text
资料
https://v2.cn.vuejs.org/v2/guide/render-function.html
https://github.com/cube-ui/vue-create-api
https://stackoverflow.com/questions/51865152/vue-2-5-slots-slot-scope-encapsulate-a-library-component-into-a-custom-com

```

## 使用Slot传值

消费方
```vue
<template>
  <div class="hello">
    <button @click="showHello">vcapi</button>
  </div>
</template>

<script>
import Vue from 'vue'

import SonShow from './SonShow'

export default {
  name: 'HelloAdam',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SonShow,
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
    Vue.component('SonShow', SonShow)

    this.showHello()
    console.log(this)
    this.rd()
  },
  methods: {
    rd() {},
    showHello() {
      const instance = this.$createHelloApi(
        {
          $props: {
            content: 'Layer 1 - HelloApi',
          },
          $events: {
            click() {
              console.log('Hello component clicked.')
              instance.remove()
            },
          },
        },
        (h, ctx) => {
          console.log('aaa', ctx)
          return [
            // h('SonShow', {
            //   slot: 'other',
            //   props: {
            //     box: 38,
            //     circle: 'Tom·Cruz',
            //   },
            //   on: {
            //     ev_son(b) {
            //       console.log('from sonshow', b)
            //     },
            //   },
            // }),
            h(
              'p',
              {
                slot: 'other',
              },
              [
                h(
                  'p',
                  {
                    attrs: {
                      id: 'foo',
                    },
                  },
                  'bbb'
                ),
                h('p', {}, 'ccc'),
              ]
            ),
          ]
        }
      )
    },
  },
}
// https://v2.cn.vuejs.org/v2/guide/render-function.html
// https://github.com/cube-ui/vue-create-api
// https://stackoverflow.com/questions/51865152/vue-2-5-slots-slot-scope-encapsulate-a-library-component-into-a-custom-com
/* renderFn */
</script>

<style scoped></style>
```

挂载的容器
```vue
<template>
  <div @click="clickHandler">
    {{ content }}
    <slot name="other"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HelloApi',
  props: {
    content: {
      type: String,
      default: 'Hello'
    }
  },
  data(){
    return {
      age: 18,
      frname: 'Tom·Cruz'
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit('click', e)
    }
  }
}
</script>
```

放入挂载容器里的组件
```vue
<template>
  <div>
    <p>SonShow</p>
    <p>{{ box }}</p>
    <p>{{ circle }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'SonShow',
  props: {
    box: {
      type: Number,
      default: -1,
    },
    circle: {
      type: String,
      default: 'String'
    },
  },
  data(){
    return {
    }
  },
  mounted() {
    console.log(this)
    this.$emit('ev_son','zzzz')
  },
  methods: {

  }
}
</script>
```
