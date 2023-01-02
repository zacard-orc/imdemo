import { nextTick, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default function useRouteParam(Action = () => {}) {
  const route = useRoute()
  const topic = ref('0')
  const branch = ref('0')
  const query = reactive({})

  watch(
    () => route,
    async (z) => {
      topic.value = z.params.topic as string
      branch.value = z.params.branch as string
      query.value = z.query

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
    branch,
    query,
  }
}
