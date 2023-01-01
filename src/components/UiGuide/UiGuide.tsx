import './UiGuide.scss'

import { defineComponent, reactive } from 'vue'

import LabelColor from '@/components/LabelColor/LabelColor'

export default defineComponent({
  name: 'UiGuide',
  components: {
    LabelColor,
  },
  setup() {
    const crlist = reactive<string[][]>([
      ['#E7A4B2', '#FEDBB5', '#F1D7C5', '#EFE6E1'],
      ['#B0BFBF', '#E8E6CE', '#7B9CA5', '#F9DABB'],
      ['#E1A9AE', '#F8EBE9', '#F9BD8D', '#FDEEE5'],
      ['#9FAFB5', '#E7EBEA', '#E9E9E9', '#c5b9ee'],
    ])

    return () => (
      <div className="ui-guide">
        {crlist.map((el) => {
          return (
            <div className="row">
              {el.map((el2) => {
                return <label-color gdcolor={el2} />
              })}
            </div>
          )
        })}
      </div>
    )
  },
})
