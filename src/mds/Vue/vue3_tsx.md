# data

```tsx
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'DataV3tsx',
  setup() {
    const d1_number = ref(999)
    const d2_string = ref('Hello')
    const d3_array = reactive<string[]>(['ab', 'cd', 'ef'])
    const m = new Map<string, number>()
    m.set('a', 1)
    m.set('b', 2)
    // const d4_map = reactive(m)

    return () => (
      <>
        <div>number {d1_number.value}</div>
        <div>string {d2_string.value}</div>
        <div>array {d3_array}</div>
        <div>array[0] {d3_array[0]}</div>
        {/*<div>map {JOSN.stringify(d4_map)}</div>*/}
        {/*<div>map.a {JOSN.stringify(d4_map.get('a'))}</div>*/}
      </>
    )
  },
})

```

# computed
```tsx
import { computed, defineComponent, onMounted, reactive, ref } from 'vue'

export default defineComponent({
  name: 'ComputedV3tsx',
  setup() {
    const speed = ref(20)
    const speed_up = computed(() => speed.value + 20)
    const slow = ref(-999)

    const symbol = reactive(['ch', 'jp', 'kr'])
    const simp = computed(() => symbol.map((el) => el.toUpperCase()).join(','))

    const pv = computed({
      get: () => {
        return speed.value * 3
      },
      set: () => {
        slow.value = 111
      },
    })
    onMounted(() => {
      pv.value = 0
    })

    return () => (
      <>
        <div>
          speed_up {speed.value} =&gt; {speed_up.value}
        </div>
        <div>SYM {simp.value}</div>
        <div>PV {pv.value}</div>
        <div>SLOW {slow.value}</div>
      </>
    )
  },
})
```

# emits
child
```tsx
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'EmitsChildV3tsx',
  props: {},
  emits: ['tsxEv'],
  setup(_, ctx) {
    const shopz = ref(200)

    return () => (
      <>
        <button
          onClick={() => {
            shopz.value++
            ctx.emit('tsxEv', shopz.value)
          }}
        >
          +1
        </button>
        <p>{shopz.value}</p>
      </>
    )
  },
})
```
parent
```tsx
import { defineComponent, ref } from 'vue'

import EmitsChildV3tsx from './emits_child_v3tsx'
export default defineComponent({
  name: 'EmitsV3tsx',
  components: {
    EmitsChildV3tsx,
  },
  setup() {
    const msg = ref(0)
    const onTsxEv = (e: number) => {
      console.log(e)
      msg.value = e
    }
    return () => (
      <>
        <emits-child-v3tsx onTsxEv={onTsxEv} />
        <div>{msg.value}</div>
      </>
    )
  },
})
```

# props
child
```tsx
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PropsChildV3tsx',
  props: {
    title: {
      type: String,
      default: 'Hello',
      required: true,
    },
  },
  setup(props) {
    const shopz = ref(200)

    return () => (
      <>
        <button onClick={() => shopz.value++}>+1</button>
        <p>
          {props.title} x {shopz.value}
        </p>
      </>
    )
  },
})
```
parent
```tsx
import { defineComponent } from 'vue'

import PropsChildV3tsx from './props_child_v3tsx'
export default defineComponent({
  name: 'PropsV3tsx',
  components: {
    PropsChildV3tsx,
  },
  setup() {
    return () => (
      <>
        <props-child-v3tsx title="abc" />
      </>
    )
  },
})
```

# provide/inject
child 
```tsx
import { defineComponent, inject, Ref, ref } from 'vue'

export default defineComponent({
  name: 'PvijChildV3tsx',
  props: {
    title: {
      type: String,
      default: 'Hello',
      required: true,
    },
  },
  setup(props, _) {
    const shopz = ref(200)

    const cat = inject<Ref<string>>('cat')
    const uCat = inject<(v: string) => void>('uCat')

    return () => (
      <>
        <button
          onClick={() => {
            uCat && uCat('black')
          }}
        >
          +1
        </button>
        <div>
          {props.title} x {shopz.value}
        </div>
        <div>cat = {cat?.value}</div>
      </>
    )
  },
})
```

parent
```tsx
import { defineComponent, provide, ref } from 'vue'

import PvijChildV3tsx from './pvij_child_v3tsx'
export default defineComponent({
  name: 'PvijV3tsx',
  components: {
    PvijChildV3tsx,
  },
  setup() {
    const z = ref('zz')
    const uCat = (v: string) => {
      z.value = v
    }
    provide('cat', z)
    provide('uCat', uCat)

    return () => (
      <>
        <pvij-child-v3tsx title="abc" />
        <div>main: {z.value}</div>
      </>
    )
  },
})
```

# ref component
child
```tsx
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'RefcomChildV3tsx',
  setup(_, { expose }) {
    const tph = ref(99)
    const brand = reactive(['a', 'b', 'c'])

    const swim = (v: string) => {
      return `mat v => ${v.toUpperCase()}`
    }
    expose({
      tph,
      brand,
      swim,
    })
    return () => (
      <>
        <div>child tsx up</div>
      </>
    )
  },
})
```

parent
```tsx
import { defineComponent, onMounted, ref } from 'vue'

import RefcomChildV3tsx from './refcom_child_v3tsx'
export default defineComponent({
  name: 'RefcomV3tsx',
  components: {
    RefcomChildV3tsx,
  },
  setup() {
    const rfchd = ref(null)
    const msg = ref('')
    onMounted(() => {
      //@ts-ignore
      console.log(rfchd?.value?.tph)
      //@ts-ignore
      console.log(rfchd?.value?.brand)
      //@ts-ignore
      msg.value = rfchd?.value?.swim('POP')
    })
    return () => (
      <>
        <refcom-child-v3tsx ref={rfchd} />
        <div>child swim call ret: {msg.value}</div>
      </>
    )
  },
})
```

# watch
```tsx
import { defineComponent, reactive, ref, watch } from 'vue'

export default defineComponent({
  name: 'WatchV3tsx',
  setup() {
    const ipt = ref('')
    const exipt = ref('')
    const arript = reactive<string[]>(['11', '22'])
    const mapipt = reactive([{ messi: 1 }, { cr: 2 }])
    const mapref = ref('')

    watch(ipt, async (n, _) => {
      exipt.value = n.split('').reverse().join('')
      mapipt[0].messi = Math.random()
    })

    watch(mapipt, async (n, _) => {
      mapref.value = (n[0].messi || '0').toString()
    })

    return () => (
      <>
        <input
          onInput={(v) => {
            // @ts-ignore
            ipt.value = v?.target.value
          }}
          type="text"
        />
        <div>ipt11 {ipt.value}</div>
        <div>exipt {exipt.value}</div>
        <div>arript {arript}</div>
        <div>mapref {mapref.value}</div>
      </>
    )
  },
})
```

# v-on
```tsx
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'VOnV3tsx',
  setup() {
    const bookz = ref(200)

    const querybook = () => {
      bookz.value++
    }

    return () => (
      <>
        <div>
          <button onClick={querybook}>+1</button>
        </div>
        <div>
          <button
            onClick={() => {
              bookz.value--
            }}
          >
            -1
          </button>
        </div>
        <div>{bookz.value}</div>
      </>
    )
  },
})

```

# v-model
```tsx
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'VModelV3tsx',
  setup() {
    const shopz = ref(200)

    return () => (
      <>
        <input
          //@ts-ignore
          vModel={shopz.value}
          placeholder="edit me"
          type="text"
        />
        <input v-model={shopz.value} placeholder="edit me" type="text" />
        <p>=&gt; {shopz.value}</p>
      </>
    )
  },
})
```

# slots
child
```tsx
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SlotsChildV3tsx',
  setup(_, { slots }) {
    return () => (
      <>
        <div>[1] {slots.default ? slots.default() : '骑车'}</div>
        <div>[2] {slots.bar?.()}</div>
        <div>[3] {slots.city?.('上海', '广州', '北京')}</div>
      </>
    )
  },
})
```
parent
```tsx
import { defineComponent } from 'vue'

import SlotsChildV3tsx from './slots_child_v3tsx'
export default defineComponent({
  name: 'SlotsV3tsx',
  components: {
    SlotsChildV3tsx,
  },
  setup() {
    const slots = {
      default: () => <span>这个会渲染到Default中</span>,
      bar: () => <span>这个会渲染到Bar中</span>,
      city: (c1: string, c2: string, c3: string) => (
        <span>
          这个会渲染到Bar中并具名返调:{c1}
          {c2}
          {c3}
        </span>
      ),
    }

    return () => (
      <>
        <slots-child-v3tsx v-slots={slots} />
      </>
    )
  },
})
```

# async component
加载异步组件
```tsx
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  name: 'AsyncomV3tsx',
  components: {
    SampleDemoTsx: defineAsyncComponent(() => import('./simple_tsx')),
  },
  setup() {
    return () => (
      <>
        <sample-demo-tsx title="vue 3tsx 加载异步组件" />
      </>
    )
  },
})
```

# dynamic component
切换动态组件
```tsx
import { defineComponent, h, ref, resolveComponent } from 'vue'

import SimplexMa from './simple_ma.vue'
import SimplexMb from './simple_mb.vue'
import SimplexMc from './simple_mc.vue'

export default defineComponent({
  name: 'DymcomV3tsx',
  components: {
    SimplexMa,
    SimplexMb,
    SimplexMc,
  },
  setup() {
    const focusCom = ref('')
    const switchCom = () => {
      const r = Math.random()

      if (r < 0.33) {
        focusCom.value = 'SimplexMa'
      } else if (r >= 0.33 && r < 0.66) {
        focusCom.value = 'SimplexMb'
      } else {
        focusCom.value = 'SimplexMc'
      }
    }

    return () => (
      <>
        <div>
          <button onClick={switchCom}>switch</button>
        </div>
        {h(resolveComponent(focusCom.value))}
      </>
    )
  },
})

```

# this
```tsx
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'ThisV3Tsx',

  setup() {
    console.log(getCurrentInstance())

    return () => (
      <>
        <div>this v3 tsx</div>
      </>
    )
  },
})
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
```tsx
import { defineComponent, getCurrentInstance, inject, ref } from 'vue'

export default defineComponent({
  name: 'PluginV3tsx',
  setup() {
    const city = inject('CITY')
    const msg = ref('...')

    // @ts-ignore
    const { appContext } = getCurrentInstance()
    msg.value = appContext.config.globalProperties.$showme()

    return () => (
      <>
        <div>city = {city}</div>
        <div>msg from data = {msg.value}</div>
        <div>msg from sugar = {appContext.config.globalProperties.$showme()}</div>
      </>
    )
  },
})
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
```tsx
import { defineComponent } from 'vue'
// @ts-ignore
import { useMouse } from "./mixhook_z";

export default defineComponent({
    name: 'MixHookV3tsx',
    setup() {
        const { x, y } = useMouse()

        return () => (
            <>
                mounse pos tsx {`${x.value},${y.value}`}
            </>
        )
    }
})
```
