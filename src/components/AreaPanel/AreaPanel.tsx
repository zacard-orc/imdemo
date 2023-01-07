import './AreaPanel.scss'

import { defineComponent, onMounted, reactive, ref, watch } from 'vue'

import useRouteParam from '@/hooks/useRouteParam'

interface IToc {
  level: string
  content: string
  offsetTop?: number
}

export default defineComponent({
  name: 'AreaPanel',
  components: {},
  setup(props, ctx) {
    const countRef = ref(0)
    const vhtml = ref('')
    const rfmd = ref(null)
    const vtoc = reactive<IToc[]>([])
    const ct_lv1 = ref(1)

    onMounted(() => {
      console.log(props)
      console.log(ctx)
    })

    const { branch, topic, query, lang } = useRouteParam(() => (countRef.value += 1))

    watch(
      () => topic,
      async () => {
        console.log('topic')
        // @ts-ignore
        const { name_meta } = query.value
        const file = `../../mds/${lang.value}/${branch.value}/${name_meta}.md`
        try {
          const z = await import(file)
          const html = z.html
          vtoc.value = z.toc
          console.log(z.toc)

          const pattern = /\[:\w+\]/gi

          const h2 = html.replaceAll(pattern, function (match: string) {
            const emid = match.slice(2, -1)

            return `<span><img src="/emoji/${emid}.svg" class="emj" alt=${emid}/></span>`
          })

          vhtml.value = h2
          // @ts-ignore
          rfmd?.value?.scrollTo(0, 0)

          setTimeout(() => {
            // @ts-ignore
            const [md] = document.getElementsByClassName('markdown-body')
            if (!md) return
            const mdc = md.children
            let idx = 0
            for (const el of mdc) {
              if (el.tagName === 'H1') {
                vtoc.value[idx].offsetTop = el.offsetTop
                idx++
              }
            }
          }, 1000)
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

    const navScroll = (e: IToc) => {
      // console.log(e?.offsetTop)
      // @ts-ignore
      rfmd?.value.scrollTo({
        left: 0,
        // @ts-ignore
        top: e?.offsetTop - 55,
        behavior: 'smooth',
      })
      // rfmd?.value.scrollTo(0, e?.offsetTop - 60)
    }

    return () => (
      //  @ts-ignore
      <div
        className="area-panel"
        ref={rfmd}
        // onScroll={(e) => {
        //   console.log(e.target.scrollTop)
        // }}
      >
        <div className="toc-panel">
          {(vtoc.value as IToc[])?.map((el, idx) => {
            if (el.level === '2') {
              return (
                <div
                  onClick={() => {
                    navScroll(el)
                  }}
                  className="lv2"
                >
                  - {uncode(el.content)}
                </div>
              )
            }
            return (
              <div
                onClick={() => {
                  navScroll(el)
                }}
                className="lv1"
              >
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
