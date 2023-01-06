/* eslint-disable prettier/prettier */
// import 'highlight.js/styles/base16/tomorrow-night.css'
import 'highlight.js/styles/github.css'
import './index.scss'

import { createApp, defineAsyncComponent } from 'vue'

import { i18n } from '@/i18n'
import { store } from '@/store/store_v3'

import App from './App.vue'
import router_v3 from './router/router_v3'

const app = createApp(App)

app.component(`WebBlockDemo`, defineAsyncComponent(() => import(`@/block/Web/BlockDemo.vue`)))
app.component(`WebP5Padpct`, defineAsyncComponent(() => import(`@/block/Web/P5Padpct.vue`)))
app.use(store).use(i18n).use(router_v3).mount('#app')
