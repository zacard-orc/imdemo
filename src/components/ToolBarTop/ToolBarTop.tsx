import './ToolBarTop.scss'

import { defineComponent } from 'vue'

import useRouteParam from '@/hooks/useRouteParam'

export default defineComponent({
  name: 'ToolBarTop',
  setup() {
    const { topic, path } = useRouteParam()

    return () => (
      <div
        className="toolbar-top"
        style={{ paddingLeft: path.value.includes('block-') ? '12px' : '0' }}
      >
        <div>{`${topic.value ?? ''}`}</div>
      </div>
    )
  },
})
