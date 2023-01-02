import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'hello world',
    },
  },
  ja: {
    message: {
      hello: 'こんにちは、世界',
    },
  },
  'zh-CN': {
    message: {
      hello: '你好',
    },
  },
}

export const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'en',
  allowComposition: true, // you need to specify that!
  messages,
})
