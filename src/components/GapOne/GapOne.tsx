import './GapOne.scss'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GapOne',
  props: {
    bgColor: {
      type: String,
      default: 'transparent',
    },
  },
  setup(props) {
    return () => <div className="gapone" style={{ background: props.bgColor }} />
  },
})
