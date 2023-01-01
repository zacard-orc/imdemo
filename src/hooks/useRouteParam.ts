import { nextTick, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default function useRouteParam(Action = () => {}) {
  const route = useRoute()
  const topic = ref('0')

  watch(
    () => route,
    async (z) => {
        topic.value = z.params.topic as string

      nextTick(() => {
        Action()
      })
    },
    {
      deep: true,
      immediate: true,
    }
  )

  return {
      topic,
  }
}
