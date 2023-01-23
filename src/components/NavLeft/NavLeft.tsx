import './NavLeft.scss'

import { computed, defineComponent, onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import GapOne from '@/components/GapOne/GapOne'
import InputAtom from '@/components/InputAtom/InputAtom'
import { K_ENTRY_CPP, K_ENTRY_GO, K_ENTRY_JAVA, K_ENTRY_K8S, K_ENTRY_LANG, K_ENTRY_WEB } from '@/constant/z'
import useRouteParam from '@/hooks/useRouteParam'

export default defineComponent({
  name: 'NavLeft',
  components: {
    GapOne,
    InputAtom,
  },
  props: {
    uvv: {
      type: String,
      default: 'zzz',
    },
  },
  setup(props) {
    /* 路由 */
    const router = useRouter()

    /* 话题 */
    const topics = ref<IMenu[]>(K_ENTRY_K8S)
    const topicMap = reactive<Record<string, IMenu[]>>({
      WEB: K_ENTRY_WEB,
      JAVA: K_ENTRY_JAVA,
      K8S: K_ENTRY_K8S,
      GO: K_ENTRY_GO,
      'C/C++': K_ENTRY_CPP,
    })

    /* 搜索词 */
    const word = ref('')

    /* 折叠 */
    const cps = ref(
      topics.value.reduce((prev: Record<string, boolean>, el) => {
        prev[el.name_meta] = true //true-放开，false-折叠
        return prev
      }, {})
    )

    /* 选中的编程语言 */
    const store = useStore()
    watch(
      () => store.state.codeLang,
      async (n, _) => {
        topics.value = topicMap[n.toUpperCase()]
        cps.value = topicMap[n.toUpperCase()].reduce((prev: Record<string, boolean>, el) => {
          prev[el.name_meta] = true //true-放开，false-折叠
          return prev
        }, {})
      }
    )

    const i18nLocale = useI18n()

    onMounted(() => {
      console.log(i18nLocale.locale.value)
      const z = location.href.split('/')[4].split('-')[1]
      topics.value = topicMap[z.toUpperCase()]
      cps.value = topicMap[z.toUpperCase()].reduce((prev: Record<string, boolean>, el) => {
        prev[el.name_meta] = true //true-放开，false-折叠
        return prev
      }, {})

      store.commit('codeLang', z.toUpperCase())
    })

    const { path, lang } = useRouteParam()

    const enTopics = computed<IMenu[]>(() => {
      return topics.value.reduce((prev: IMenu[], el) => {
        const sub = el.children
        const ret = sub.filter((el2) => {
          if (word.value === '') return true
          return (
            // @ts-ignore
            el2[K_ENTRY_LANG[i18nLocale.locale.value]].toLowerCase().includes(word.value) ||
            el2.name_meta.toLowerCase().includes(word.value) ||
            el2?.desc?.toLowerCase().includes(word.value)
          )
        })
        if (ret.length > 0) {
          prev.push({
            ...el,
            children: ret,
          })
        }
        return prev
      }, [])
    })

    const mgSearch = (v: string) => {
      console.log('outer fn =>', v)
      word.value = v
    }

    const mgSearch2 = (v: string) => {
      console.log('outer emit =>', v)
    }

    const onClickTopic = (v: IMenu, parent: IMenu) => {
      const hitlang = store.state.codeLang.toLowerCase()
      // const z = location.href.split('/')[4].split('-')[1]
      // if (hitlang !== z) {
      //   hitlang = z
      // }
      //
      // console.log(hitlang, z)

      router.push({
        path: `/lang-${hitlang}/${parent.name_meta}/${v.name_meta}`,
        // @ts-ignore
        query: v,
      })
    }

    return () => (
      <div className="nav-left" style={{ display: path.value.includes('block-') ? 'none' : 'block' }}>
        <input-atom onSearch={mgSearch} onUpdateBx={mgSearch2} />
        <gap-one />
        <div className="result-list">
          {enTopics.value.length === 0 ? (
            <div className="empty">没有合适的搜索结果</div>
          ) : (
            enTopics.value.map((el, idx) => {
              const sub = el.children

              return (
                <div className="topic-lv1" key={`tk1_${idx}`}>
                  <div
                    className="head"
                    onClick={() => {
                      cps.value[el.name_meta] = !cps.value[el.name_meta]
                    }}
                  >
                    {el[K_ENTRY_LANG[i18nLocale.locale.value]] || el.name_en}
                  </div>
                  <div
                    className="body"
                    style={{
                      height: cps.value[el.name_meta] ? 'auto' : '0', //true-放开，false-折叠
                    }}
                  >
                    {sub.map((el2, idx2) => {
                      return (
                        <div
                          key={`tk2_${idx2}`}
                          className="topic-lv2"
                          onClick={() => {
                            onClickTopic(el2, el)
                          }}
                        >
                          {el2[K_ENTRY_LANG[i18nLocale.locale.value]] || el2.name_en}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    )
  },
})
