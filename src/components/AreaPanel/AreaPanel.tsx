import './AreaPanel.scss'

import {
  // defineAsyncComponent,
  defineComponent,
  h,
  onMounted,
  reactive,
  ref,
  resolveComponent,
  watch,
} from 'vue'

import { K_CATA } from '@/constant/z'
import useRouteParam from '@/hooks/useRouteParam'
import this_v2_png from '@/mds/this_v2.png'
import this_v3sfc from '@/mds/this_v3sfc.png'
import this_v3tsx from '@/mds/this_v3tsx.png'

export default defineComponent({
  name: 'AreaPanel',
  components: {
    // WatchV3tsx: defineAsyncComponent(() => import('@/block/watch_v3tsx')),
    // DataV3tsx: defineAsyncComponent(() => import('@/block/data_v3tsx')),
    // DataV3tsx: defineAsyncComponent(() => import('@/components/Sample/Sample')),
    // ComputedV3tsx: defineAsyncComponent(() => import('@/block/computed_v3tsx')),
    // ComputedV3tsx: defineAsyncComponent(() => import('@/components/AboutUs/AboutUs')),
  },
  setup(props, ctx) {
    const countRef = ref(0)
    const cata = reactive(K_CATA)
    const dym = ref(new Map<string, any>())
    const sel = ref('')

    onMounted(() => {
      console.log(props)
      console.log(ctx)
    })

    const { topic } = useRouteParam(() => (countRef.value += 1))

    watch(
      () => topic,
      async ({ value: _t }) => {
        sel.value = _t
        for (const el of cata) {
          const f = `${_t}_${el}`
          const file = `../../mds/${f}.md`
          try {
            const { html } = await import(file)
            dym.value.set(f, html)
          } catch (e) {
            console.error(e)
          }
        }
      },
      {
        deep: true,
        immediate: true,
      }
    )

    const headUp = (v: string) => {
      return v.charAt(0).toUpperCase() + v.slice(1)
    }

    return () => (
      <div className="area-panel">
        <div className="v2-farm">
          <h3>Vue2</h3>
          {sel.value !== 'this' ? (
            <>
              <div className="codeblock">{h(resolveComponent(`${sel.value}_v2`))}</div>
              <div v-html={dym.value.get(`${sel.value}_v2`)} />
            </>
          ) : (
            <img src={this_v2_png} style={{ width: '100%' }} />
          )}
        </div>
        <div className="v3-sfc-farm">
          <h3>Vue3 Sfc</h3>
          {sel.value !== 'this' ? (
            <>
              <div className="codeblock">{h(resolveComponent(`${sel.value}_v3sfc`))}</div>
              <div v-html={dym.value.get(`${sel.value}_v3sfc`)} />
            </>
          ) : (
            <img src={this_v3sfc} style={{ width: '100%' }} />
          )}
        </div>
        <div className="v3-tsx-farm">
          <h3>Vue3 Tsx</h3>
          {/*<div className="codeblock">*/}
          {/*  {sel.value === 'computed' && <computed_v3tsx />}*/}
          {/*  {sel.value === 'data' && <data-v3tsx />}*/}
          {/*  {sel.value === 'watch' && <watch-v3tsx />}*/}
          {/*</div>*/}
          {/*<div className="codeblock">*/}
          {/*  <watch-v3tsx />*/}
          {/*</div>*/}
          {sel.value !== 'this' ? (
            <>
              <div className="codeblock">{h(resolveComponent(`${headUp(sel.value)}V3tsx`))}</div>

              <div v-html={dym.value.get(`${sel.value}_v3tsx`)} />
            </>
          ) : (
            <img src={this_v3sfc} style={{ width: '100%' }} />
          )}
        </div>
      </div>
    )
  },
})
