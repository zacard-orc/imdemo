// Create a new store instance.
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      /**
       * 1，要改select
       * 2，要改topic init值
       * 3，要改codeLang默认值
       */
      codeLang: 'K8s',
    }
  },
  mutations: {
    codeLang(state: ICode, code: string) {
      state.codeLang = code
    },
  },
})
