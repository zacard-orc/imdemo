import './NavLeft.scss'

import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import GapOne from '@/components/GapOne/GapOne'
import InputAtom from '@/components/InputAtom/InputAtom'
import { K_ENTRY } from '@/constant/z'

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
    const router = useRouter()
    const topics = reactive<IMenu[]>(K_ENTRY)
    const word = ref('')
    const cps = reactive(
      topics.reduce((prev, el) => {
        prev[el.name_meta] = true //true-放开，false-折叠
        return prev
      }, {})
    )

    onMounted(() => {
      console.log(props)
    })

    const enTopics = computed<string[]>(() => {
      return topics.reduce((prev: IMenu[], el) => {
        const sub = el.children
        const ret = sub.filter((el2) => {
          if (word.value === '') return true
          return (
            el2.name_zh.toLowerCase().includes(word.value) ||
            el2.name_meta.toLowerCase().includes(word.value)
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

    const onClickTopic = (v: IMenu) => {
      router.push({
        path: `/web/${v.name_meta}`,
        query: v,
      })
    }

    return () => (
      <div className="nav-left">
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
                      cps[el.name_meta] = !cps[el.name_meta]
                    }}
                  >
                    {' '}
                    {el.name_zh}
                  </div>
                  <div
                    className="body"
                    style={{
                      height: cps[el.name_meta] ? 'auto' : '0', //true-放开，false-折叠
                    }}
                  >
                    {sub.map((el2, idx2) => {
                      return (
                        <div
                          key={`tk2_${idx2}`}
                          className="topic-lv2"
                          onClick={() => {
                            onClickTopic(el2)
                          }}
                        >
                          {el2.name_zh}
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
