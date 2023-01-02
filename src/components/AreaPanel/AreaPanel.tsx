import './AreaPanel.scss'

import { defineComponent, onMounted, reactive, ref, watch } from 'vue'

import { K_CATA } from '@/constant/z'
import useRouteParam from '@/hooks/useRouteParam'

export default defineComponent({
  name: 'AreaPanel',
  components: {},
  setup(props, ctx) {
    const countRef = ref(0)
    const cata = reactive(K_CATA)
    const dym = ref(new Map<string, any>())
    const sel = ref('')

    onMounted(() => {
      console.log(props)
      console.log(ctx)
    })

    const { topic, query } = useRouteParam(() => (countRef.value += 1))

    watch(
      () => topic,
      async (n, o) => {
        console.log(query.value)
        // sel.value = _t
        // for (const el of cata) {
        //   const f = `${_t}_${el}`
        //   const file = `../../mds/${f}.md`
        //   try {
        //     const { html } = await import(file)
        //     dym.value.set(f, html)
        //   } catch (e) {
        //     console.error(e)
        //   }
        // }
      },
      {
        deep: true,
        immediate: true,
      }
    )

    const headUp = (v: string) => {
      return v.charAt(0).toUpperCase() + v.slice(1)
    }

    return () => <div className="area-panel">123</div>
  },
})
