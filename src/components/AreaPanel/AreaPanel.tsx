import './AreaPanel.scss'

import { defineComponent, onMounted, ref, watch } from 'vue'

import useRouteParam from '@/hooks/useRouteParam'

export default defineComponent({
  name: 'AreaPanel',
  components: {},
  setup(props, ctx) {
    const countRef = ref(0)
    const vhtml = ref('')

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
          const { html } = await import(file)

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

    return () => (
      //  @ts-ignore
      <div className="area-panel">
        <div v-html={vhtml.value} class="markdown-body" />
      </div>
    )
  },
})
