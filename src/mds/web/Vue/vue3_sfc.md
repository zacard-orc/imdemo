# data
```vue
<template>
  <div>number {{ d1_number }}</div>
  <div>string {{ d2_string }}</div>
  <div>array {{ d3_array }}</div>
  <div>map {{ d4_map }}</div>
  <div>func {{ d5_func() }}</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const d1_number = ref(999)
const d2_string = ref('Hello')
const d3_array = reactive(['ab', 'cd', 'ef'])

const m = new Map()
m.set('a', 1)
m.set('b', 2)
const d4_map = reactive(m)
const d5_func = reactive(() => 'xyz')
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

# computed
```vue
<template>
  <div>speed_up {{ speed }} => {{ speed_up }}</div>
  <div>SYM {{ simp }}</div>
  <div>PV {{ pv }}</div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const speed = ref(20)
const speed_up = computed(() => speed.value + 20)

const symbol = reactive(['ch', 'jp', 'kr'])
const simp = computed(() => symbol.map((el) => el.toUpperCase()))

const pv = computed({
  get: () => {
    return speed.value * 3
  },
  set: () => {
    return -999
  },
})
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

# emits
child  
```vue
<template>
  <div>
    <button @click="querybook">+1</button>
    <div>{{ bookz }}</div>
    <div>bread emit check => {{ bretips }}</div>
    <div>submit emit check => {{ subtips }}</div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
const bookz = ref(100)
const bretips = ref('')

const emit = defineEmits({
  bread: null, // 没有校验

  // 校验 传值大小 事件
  zm: (pd) => {
    console.log(pd)
    if (pd > 105) {
      throw new Error('exceed')
    }
    return true
  },
})

const querybook = () => {
  bookz.value++
  const r1 = emit('zm', bookz.value)
  const r2 = emit('bread', bookz.value)
  console.log(r1, r2)
}
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```
parent
```vue
<template>
  <div>
    <emits_child_v3sfc @zb="rsSubmit" @bread="rsBread" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import emits_child_v3sfc from './emits_child_v3sfc'

const rsSubmit = (e) => {
  console.log(e)
  return 'rsa'
}

const rsBread = (e) => {
  console.log(e)
  return 'rsb'
}
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

# props
child
```vue
<template>
  <div>
    <emits_child_v3sfc @zb="rsSubmit" @bread="rsBread" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import emits_child_v3sfc from './emits_child_v3sfc'

const props = defineProps({
  title:String,
  age:Number
})

const rsSubmit = (e) => {
  console.log(e)
  return 'rsa'
}

const rsBread = (e) => {
  console.log(e)
  return 'rsb'
}
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

parent
```vue
<template>
  <div>
    <props_child_v3sfc title="ZZ22" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Props_child_v3sfc from './props_child_v3sfc'
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

# provide/inject
child
```vue
<template>
  <div>cat {{ cat }}</div>
  <div>xyz {{ xyz.value }}</div>
  <div @click="uCat('red')">反向更新AppData</div>
</template>

<script setup>
import { inject, onMounted, ref, watch } from 'vue'
const cat = inject('cat')
const uCat = inject('uCat')
const xyz = ref('xyz')

watch(xyz, async (n, o) => {
  console.log(n, o)
})

onMounted(() => {
  xyz.value = cat
})
</script>

<style />
```

parent
```vue
<template>
  <div>
    <pvij_child_v3sfc />
    <div>main {{ z }}</div>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'

import Pvij_child_v3sfc from './pvij_child_v3sfc'
const z = ref('zz')
const uCat = (v) => {
  z.value = v
}
provide('cat', z)
provide('uCat', uCat)
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

# ref component
child
```vue
<template>
  <div>
    <div>child sfc up</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

const swim = () => {
  return 'child sfc swiming...'
}

const cry = () => {
  return 'child sfc crying...'
}

defineExpose({
  a,
  b,
  swim,
})
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

parent
```vue
<template>
  <div>
    <refcom_child_v3sfc ref="rfchd" />
    <div>ref doing: {{ swim }}</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import Refcom_child_v3sfc from './refcom_child_v3sfc'
const rfchd = ref(null)
const swim = ref('...')

onMounted(() => {
  // console.log(rfchd.value.a)
  // console.log(rfchd.value.b)
  swim.value = rfchd.value.swim()
})
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

# watch
```vue
<template>
  <input v-model="ipt" type="text" />
  <div>ipt {{ ipt }}</div>
  <div>exipt {{ exipt }}</div>
  <div>arript {{ arript.value }}</div>
  <div>mapipt {{ mapipt }}</div>
  <div>obj + not deep {{ msgobj_notdeep }}</div>
  <div>func + not deep {{ msgfunc_notdeep || 'NONONO' }}</div>
  <div>obj + deep {{ msgobj_deep }}</div>
  <div>func + deep {{ msgfunc_deep }}</div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
const ipt = ref('')
const exipt = ref('')
const arript = reactive([])
const mapipt = reactive({
  a: 1,
  b: 2,
  dex: {
    messi: 7,
    cr: 8,
  },
})

const msgobj_notdeep = ref('')
const msgfunc_notdeep = ref('')
const msgobj_deep = ref('')
const msgfunc_deep = ref('')

const mapiptx = reactive([{ messi: 7 }, { messi: 8 }, { messi: 9 }])

watch(ipt, async (n, _) => {
  exipt.value = n.split('').reverse().join('')
  arript.value = n.split('')
  Object.assign(mapipt, {
    ...mapipt,
    dex: {
      messi: mapipt.dex.messi + 1,
    },
  })
  mapiptx[0].messi = Math.random()
})

watch(mapiptx, async (n, o) => {
  console.log('obj + not deep ', n[0], o[0])
  msgobj_notdeep.value = n[0].messi
})
watch(
  mapiptx,
  async (n, o) => {
    console.log('obj + deep ', n[0], o[0])
    msgobj_deep.value = n[0].messi
  },
  {
    deep: true,
  }
)
watch(
  () => mapiptx,
  async (n, o) => {
    console.log('func + deep ', n[0], o[0])
    msgfunc_deep.value = n[0].messi
  },
  {
    deep: true,
  }
)
watch(
  () => mapiptx,
  async (n, o) => {
    console.log('func +  no deep ', n[0], o[0])
    msgfunc_notdeep.value = n[0].messi
  }
)
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

# v-on
```vue
<template>
  <div>
    <button @click="querybook">+1</button>
  </div>
  <div>
    <button @click="() => bookz--">-1</button>
  </div>
  <div>{{ bookz }}</div>
</template>

<script setup>
import { ref } from 'vue'
const bookz = ref(100)

const querybook = () => {
  bookz.value++
}
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

# v-model
```vue
<template>
  <div>
    <input v-model="shopz" placeholder="edit me" type="text" />
    <p>=> {{ shopz }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const shopz = ref('abc')
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

# slots
child
```vue
<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <div>
      <slot name="body"></slot>
    </div>
    <div>
      <slot :userInfo="userInfo" name="vaz" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const userInfo = reactive({
  name: 'Tom',
  age: 12,
})
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

parent
```vue
<template>
  <div>
    <div>
      <slots_child_v3sfc>
        <template #body>
          <div>外部传入 BODYBODY</div>
        </template>
      </slots_child_v3sfc>
      <slots_child_v3sfc>
        <template #vaz="{ userInfo }">
          <div>外部渲染 u.name = {{ userInfo.name }}</div>
          <div>外部渲染 u.age = {{ userInfo.age }}</div>
          <simple-demo :title="userInfo.name" />
        </template>
      </slots_child_v3sfc>
    </div>
  </div>
</template>

<script setup>
import SimpleDemo from './simple'
import Slots_child_v3sfc from './slots_child_v3sfc'
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

# async component
```vue
<template>
  <div>
    <button @click="switchMe">switchMe</button>
    <div v-show="s">
      <simple-demo title="vue 3sfc 加载异步组件" />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'

import LoadingDemo from './loading'

// const SimpleDemo = defineAsyncComponent(() => import('./simple'))

const SimpleDemo = defineAsyncComponent({
  loader: () => import('./simple'),
  loadingComponent: LoadingDemo,
  delay: 2000,
  errorComponent: LoadingDemo,
  timeout: 3000,
})

const s = ref(true)

const switchMe = () => {
  s.value = !s.value
}
</script>
```

# dynamic component
```vue
<template>
  <div>
    <div>
      <button @click="switchCom">switch</button>
    </div>
    <component :is="focusCom" />
  </div>
</template>

<script setup>
import { reactive, ref, resolveComponent, shallowRef } from 'vue'

import SimpleMa from './simple_ma'
import SimpleMb from './simple_mb'
import SimpleMc from './simple_mc'
// const focusCom = shallowRef(SimpleMa)
const focusCom = ref('SimpleMa')
const zmap = reactive({
  SimpleMa,
  SimpleMb,
  SimpleMc,
})

const switchCom = () => {
  const r = Math.random()
  if (r < 0.33) {
    // focusCom.value = SimpleMa
    // focusCom.value = resolveComponent('SimpleMa')
    focusCom.value = zmap['SimpleMa']
  } else if (r >= 0.33 && r < 0.66) {
    // focusCom.value = SimpleMb
    // focusCom.value = resolveComponent('SimpleMb')
    focusCom.value = zmap['SimpleMb']
  } else {
    // focusCom.value = SimpleMc
    // focusCom.value = resolveComponent('SimpleMc')
    focusCom.value = zmap['SimpleMc']
  }
}
</script>

<style />
```

# this
```vue
<template>
  <div>this v3 sfc</div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
console.log(getCurrentInstance())
</script>

<style scoped lang="scss">
.a {
  color: red;
}
</style>
```

# vuex
```js
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      // access a mutation
      increment: () => store.commit('increment'),

      // access an action
      asyncIncrement: () => store.dispatch('asyncIncrement')
    }
  }
}
```

# vue-router
```js
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

export default {
  setup() {
    const route = useRoute()
    const userData = ref()

    // fetch the user information when params change
    watch(
      () => route.params.id,
      async newId => {
        userData.value = await fetchUser(newId)
      }
    )
  },
}
```

```js
import { useRouter, useRoute } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const route = useRoute()

        function pushWithQuery(query) {
            router.push({
                name: 'search',
                query: {
                    ...route.query,
                    ...query,
                },
            })
        }
    }
}

```

# plugin
plugin本身
```js
export const pgn = {
  install: (app) => {
    app.provide('CITY','SHANGHAI')

    // vue2
    // app.prototype.$showme = function (){
    //   console.log('im plugin vue2')
    // }

    // vue3
    app.config.globalProperties.$showme = function (){
      return 'im plugin vue3'
    }
  }
}
```

使用
```vue
<template>
  <div>
    <div>city = {{ city }}</div>
    <div>msg from data = {{ msg }}</div>
    <div>msg from sugar = {{ $showme() }}</div>
  </div>
</template>

<script setup>
import {inject, ref, getCurrentInstance} from "vue";

const city = inject('CITY')
const msg = ref('...')
const {appContext} = getCurrentInstance()
msg.value = appContext.config.globalProperties.$showme()

</script>

<style/>
```

# mixin/hooks
从mixin改为了hooks
```js
import { ref, onMounted, onUnmounted } from 'vue'

export const mixHello = {
  created: function () {
    this.hello()
  },
  methods: {
    hello() {
      return 'hello from mixin!'
    }
  }
}


export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}
```
使用
```vue
<template>
  <div>
    mounse pos sfc {{x}} {{y}}
  </div>
</template>

<script setup>
import { useMouse } from "./mixhook_z";

const { x, y } = useMouse()
</script>

<style />
```
