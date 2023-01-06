import './AreaPanel.scss'

import { defineComponent, onMounted, reactive, ref, watch } from 'vue'

import useRouteParam from '@/hooks/useRouteParam'

interface IToc {
  level: string
  content: string
}

export default defineComponent({
  name: 'AreaPanel',
  components: {},
  setup(props, ctx) {
    const countRef = ref(0)
    const vhtml = ref('')
    const vtoc = reactive<IToc[]>([])

    onMounted(() => {
      console.log(props)
      console.log(ctx)
    })

    const { branch, topic, query } = useRouteParam(() => (countRef.value += 1))

    watch(
      () => topic,
      async () => {
        console.log('topic')
        // @ts-ignore
        const { name_meta } = query.value
        const file = `../../mds/${branch.value}/${name_meta}.md`
        try {
          const z = await import(file)
          const html = z.html
          vtoc.value = z.toc

          const pattern = /\[:\w+\]/gi

          const h2 = html.replaceAll(pattern, function (match: string) {
            const emid = match.slice(2, -1)

            return `<span><img src="/emoji/${emid}.svg" class="emj" alt=${emid}/></span>`
          })

          vhtml.value = h2
        } catch (e) {
          console.error(e)
        }
      },
      {
        deep: true,
        immediate: true,
      }
    )

    const uncode = (str = '') => {
      return str.replace(/&#(x)?([^&]{1,5});?/g, function (_, b, c) {
        return String.fromCharCode(parseInt(c, b ? 16 : 10))
      })
    }

    return () => (
      //  @ts-ignore
      <div className="area-panel">
        <div className="toc-panel">
          {(vtoc.value as IToc[])?.map((el, idx) => {
            return (
              <div>
                {idx + 1}, {uncode(el.content)}
              </div>
            )
          })}
        </div>
        <div v-html={vhtml.value} class="markdown-body" />
      </div>
    )
  },
})
