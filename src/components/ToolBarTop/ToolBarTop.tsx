import './ToolBarTop.scss'

import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import logo from '@/assets/logo.png'
import useRouteParam from '@/hooks/useRouteParam'

export default defineComponent({
  name: 'ToolBarTop',
  setup() {
    const { topic, path } = useRouteParam()
    const store = useStore()

    return () => (
      // @ts-ignore
      <div className="toolbar-top" style={{ paddingLeft: path.value.includes('block-') ? '12px' : '0' }}>
        <div>{`${topic.value ?? ''}`}</div>
        <div>
          <select
            onChange={(e: Event) => {
              // @ts-ignore
              store.commit('codeLang', e?.target?.value)
            }}
          >
            <option>K8s</option>
            <option>Web</option>
            <option>Go</option>
            <option>Java</option>
            <option>C/C++</option>
          </select>
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    )
  },
})
