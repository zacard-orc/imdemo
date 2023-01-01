import './TsPanel.scss'
import 'highlight.js/styles/github.css'

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

export default defineComponent({
  name: 'TsPanel',
  components: {},
  setup(props, ctx) {
    const dym = ref(new Map<string, any>())

    onMounted(async () => {
      const file = `../../mds/ts-util.md`
      try {
        const { html } = await import(file)
        dym.value.set('ts-topic-util', html)
      } catch (e) {
        console.log(e)
      }
    })

    // const a2: Expect<true> = true
    // console.log(a2)

    type IsAny<T> = 0 extends 1 & T ? true : false
    const a = 'aaa'
    const b: IsAny<typeof a> = false
    console.log(b)
    // console.log(a2)

    return () => (
      <div className="ts-panel">
        <div v-html={dym.value.get(`ts-topic-util`)} />
      </div>
    )
  },
})
