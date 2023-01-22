import './ToolBarTop.scss'

import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import logo from '@/assets/logo.png'
import useRouteParam from '@/hooks/useRouteParam'

export default defineComponent({
  name: 'ToolBarTop',
  setup() {
    const { topic, path } = useRouteParam()
    const kid = ref<string[]>(['K8s', 'Web', 'Go', 'Java', 'C/C++'])
    const store = useStore()
    const router = useRouter()

    return () => (
      // @ts-ignore
      <div className="toolbar-top" style={{ paddingLeft: path.value.includes('block-') ? '12px' : '0' }}>
        <div>{`${topic.value ?? ''}`}</div>
        <div>
          {kid.value.map((el, idx) => {
            return (
              <i
                key={`kid_${idx}`}
                onClick={() => {
                  store.commit('codeLang', el)
                  router.push({
                    path: `/lang-${el}`,
                  })
                }}
              >
                {el}
              </i>
            )
          })}

          {/*  <div>K8s</div>*/}
          {/*<div>Web</div>*/}
          {/*<div>Go</div>*/}
          {/*<div>Java</div>*/}
          {/*<div>C/C++</div>*/}
          {/*<select*/}
          {/*  onChange={(e: Event) => {*/}
          {/*    // @ts-ignore*/}
          {/*    store.commit('codeLang', e?.target?.value)*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <option>K8s</option>*/}
          {/*  <option>Web</option>*/}
          {/*  <option>Go</option>*/}
          {/*  <option>Java</option>*/}
          {/*  <option>C/C++</option>*/}
          {/*</select>*/}
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    )
  },
})
