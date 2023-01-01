import './LabelColor.scss'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LabelColor',
  props: {
    gdcolor: {
      type: String,
      default: '#cfddd5',
    },
  },
  setup(props) {
    const onClick = async () => {
      console.log(props)
      try {
        await navigator.clipboard.writeText(props.gdcolor)
        console.log('ctrl+c => %s', props.gdcolor)
      } catch (err) {
        console.error('ctrl+c errpr: %s', err)
      }
    }

    return () => (
      <div className="label-color" onClick={onClick} style={{ backgroundColor: props.gdcolor }}>
        {props.gdcolor}
      </div>
    )
  },
})
