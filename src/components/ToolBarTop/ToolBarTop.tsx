import './ToolBarTop.scss'

import { defineComponent } from 'vue'

import useRouteParam from '@/hooks/useRouteParam'

export default defineComponent({
  name: 'ToolBarTop',
  setup() {
    const { topic } = useRouteParam()

    return () => (
      <div className="toolbar-top">
        <div>{`${topic.value ?? ''}`}</div>
      </div>
    )
  },
})
