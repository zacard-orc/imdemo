import './GapTwo.scss'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GapTwo',
  setup(props, { slots }) {
    console.log(slots)
    return () => <div className="gaptwo">{slots.default ? slots.default() : 'aa'}</div>
  },
})
