// Create a new store instance.
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      codeLang: 'Web',
    }
  },
  mutations: {
    codeLang(state: ICode, code: string) {
      state.codeLang = code
    },
  },
})
