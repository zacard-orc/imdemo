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
    const topics = reactive(K_ENTRY)
    const word = ref('')

    onMounted(() => {
      console.log(props)
    })

    const enTopics = computed<string[]>(() => {
      return topics.filter((el) => {
        if (word.value === '') return true
        return el.includes(word.value)
      })
    })
    const mgSearch = (v: string) => {
      console.log('outer fn =>', v)
      word.value = v
    }

    const mgSearch2 = (v: string) => {
      console.log('outer emit =>', v)
    }

    const onClickTopic = (v: string) => {
      router.push({
        path: `/diff/${v}`,
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
              return (
                <div
                  key={`topickey_${idx}`}
                  className="topic"
                  onClick={() => {
                    onClickTopic(el)
                  }}
                >
                  {el}
                </div>
              )
            })
          )}
        </div>
      </div>
    )
  },
})
