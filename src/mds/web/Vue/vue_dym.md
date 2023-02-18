# umd - render函数
```text
使用了umd esm type=module来渲染
```

```html
<body>
<div id='app'></div>
<script type='module'>
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';

  new Vue({
    data: {
      message: 'Hello Vue!',
    },
    render(h) {
      return h(
        'div',   // 标签名称
        this.message, // 子节点数组
      );
    },
  }).$mount('#app');
</script>
</body>
```

# umd - render函数异步
```text
使用了umd esm type=module来渲染
```

```html
<body>
<div id="app">
</div>
<script type="module"> import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'
function asyncComponent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'asyncComponent',
                render(h) {
                    return h('div', 'asyncComponent')
                }
            })
        }, 2000)
    })
}

new Vue({
    data: {
    },
    render(h) {
        return h(
                'div', // 标签名称
                [h(asyncComponent)]
        )
    }
}).$mount('#app') </script>
</body>

```

# sfc1 - 组合开启runtime compile
```text
https://cli.vuejs.org/config/#runtimecompiler
https://github.com/vuejs/vue-cli/issues/2754
```

## vue.config.js
```js
module.exports = { runtimeCompiler: true, }
```

## [sfc] App.vue
```vue
<template>
  <div id="app">
    These links are rendered dynamically:
    <br />
    <!-- Global Components -->
    <DynamicTemplate
      template="<router-link to='/user/1'>Show user 1 page</router-link>"
    />
    <br />
    <!-- Dynamic props -->
    <DynamicTemplate
      template="<router-link :to='userlink'>Show user 2 page</router-link>"
      :userlink="userlink"
    />
    <br />
    <!-- Passing components -->
    <DynamicTemplate
      template="<em-component msg='hi, I´m a custom component' />"
      :components="components"
    />
    <br />
    <!-- Also works with lazy loaded components -->
    <DynamicTemplate
      template="<bold-component>I'm lazily loaded custom component!</bold-component>"
      :components="lazyComponents"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import DynamicTemplate from "./components/DynamicTemplate";
import EmComponent from "./components/EmComponent";

export default {
  name: "App",
  components: {
    DynamicTemplate,
  },
  data() {
    return {
      userlink: "/user/2",
      components: { EmComponent },
      lazyComponents: {
        BoldComponent: () => import("./components/BoldComponent"),
      },
    };
  },
};
</script>
```

## [render] DynamicTemplate.vue
```vue
<script>
export default {
  name: "DynamicTemplate",
  props: {
    template: String,
    components: Object,
  },
  render(h) {
    let nonFunctionAttrs = {};
    let functionAttrs = {};

    for (const prop in this.$attrs) {
      if (typeof this.$attrs[prop] === "function") {
        functionAttrs[prop] = this.$attrs[prop];
      } else {
        nonFunctionAttrs[prop] = this.$attrs[prop];
      }
    }

    const dynamic = {
      name: "dynamic-inner-template",
      template: this.template,
      components: this.components,
      data: () => nonFunctionAttrs,
      methods: functionAttrs,
    };

    return h(dynamic);
  },
};
</script>
```

## BoldComponent.vue
```vue
<template>
  <strong><slot /></strong>
</template>
```

## EmComponent.vue
```vue
<template>
  <em>{{ msg }}</em>
</template>

<script>
export default {
  props: ["msg"],
};
</script>
```

# sfc2 - 组合开启runtime compile
## [sfc] App.vue
```vue
<template>
  <div id="app">
    These links are rendered dynamically:
    <br />
    <!-- Global Components -->
    <EmComponent msg="zzzz"/>
  </div>
</template>

<script>
import EmComponent from "./components/EmComponent";

export default {
  name: "App",
  components: {
    EmComponent
  },
  data() {
    return {
    };
  },
};
</script>
```

## [render] EmComponent.vue
```vue
<script>
export default {
  props: ["msg"],
 data(){
  return {
     message: 'Hello Vue!',
  }
  },
  render(h) {
    return h(
      'div',   // 标签名称
      this.msg+'/'+this.message, // 子节点数组
    );
  },
};
</script>
```
