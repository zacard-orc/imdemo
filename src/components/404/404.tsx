import './404.scss'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageNo404',
  setup() {
    return () => <div className="pageno-404">404</div>
  },
})
