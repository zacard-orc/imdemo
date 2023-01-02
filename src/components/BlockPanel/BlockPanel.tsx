import './BlockPanel.scss'

import { defineComponent, onMounted, ref, watch } from 'vue'

import useRouteParam from '@/hooks/useRouteParam'

export default defineComponent({
  name: 'BlockPanel',
  components: {},
  setup(props, ctx) {
    const countRef = ref(0)
    const vhtml = ref('')

    onMounted(() => {
      console.log(props)
      console.log(ctx)
    })

    const { branch, topic, query } = useRouteParam(() => (countRef.value += 1))

    watch(
      () => topic,
      async () => {
        console.log('topic')
        try {
          void 0
        } catch (e) {
          console.error(e)
        }
      },
      {
        deep: true,
        immediate: true,
      }
    )

    return () => (
      //  @ts-ignore
      <div className="block-panel">
        <div>1</div>
      </div>
    )
  },
})
