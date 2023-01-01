// Create a new store instance.
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state: IState) {
      state.count++
    },
  },
})
