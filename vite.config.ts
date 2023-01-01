import vue from '@vitejs/plugin-vue'
// https://github.com/vuejs/babel-plugin-jsx
// https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx#readme
import vueJsx from '@vitejs/plugin-vue-jsx'
import hljs from 'highlight.js'
// @ts-ignore
import MarkdownIt from 'markdown-it'
// @ts-ignore
import path from 'path'
import { defineConfig } from 'vite'
// import Markdown from 'vite-plugin-md'
import Markdown, { Mode } from 'vite-plugin-markdown'
import vuezz from 'vue-highlight.js/lib/languages/vue'

const mit = MarkdownIt({
  // highlight: (str, lang) => {
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       const v = hljs.highlight(str, {
  //         language: lang,
  //       }).value
  //       console.log(v)
  //       return v
  //     } catch (__) {}
  //   }
  //
  //   return ''
  // },

  highlight: function (str, lang) {
    hljs.registerLanguage('vue', vuezz)
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
        }</code></pre>`
      } catch (__) {}
    }

    return `<pre class="hljs"><code>${mit.utils.escapeHtml(str)}</code></pre>`
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    Markdown({
      mode: [Mode.VUE, Mode.HTML],
      markdown: (body) => body,
      markdownIt: mit,
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
