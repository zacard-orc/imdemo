import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IncreMe',
  setup() {
    const count = ref(0)

    const increment = () => {
      count.value += 1
    }

    return () => (
      <div>
        <p data-testid="clicked" data-test="clicked">
          Times clicked: {count.value}
        </p>
        <button data-testid="increment" data-test="increment" onClick={increment}>
          increment
        </button>
      </div>
    )
  },
})
