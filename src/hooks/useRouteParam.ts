import { nextTick, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default function useRouteParam(
  Action = () => {
    void 0
  }
) {
  const route = useRoute()
  const topic = ref('0')
  const branch = ref('0')
  const path = ref('0')
  const query = reactive({})

  watch(
    () => route,
    async (z) => {
      topic.value = z.params.topic as string
      branch.value = z.params.branch as string
      //@ts-ignore
      query.value = z.query
      path.value = z.path

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
    path,
  }
}
