# ava + @vue/test-utils
## 参考
```text
https://e.coding.net/zacard_lin/h5_component/elm-wrap.git
```


## 初始化项目
```text
vue create hello-world
```

## 依赖
```text
-- dependencies
    "babel-plugin-component": "^1.1.1",
    "vue-router": "^3.1.5",
    "vue-template-compiler": "^2.7.14",
-- devDependencies
   "@babel/core": "^7.2.2",
    "@babel/plugin-transform-runtime": "^7.8.3",
    "@babel/preset-env": "^7.3.1",
    "@babel/register": "^7.0.0",
    "@babel/runtime": "7.8.4",
     "@vue/test-utils": "^1.0.0-beta.31",
    "autoprefixer": "^9.7.4",
    "ava": "^3.4.0",
    "babel-eslint": "^10.0.3",
    "babel-loader": "^8.0.6",
    "babel-plugin-istanbul": "^6.0.0",
    "chalk": "^3.0.0",
    "connect-history-api-fallback": "^1.6.0",
    "css-loader": "^5.1.1",
    "cssnano": "^4.1.10",
    "eslint": "^6.8.0",
    "eslint-config-standard": "^14.1.0",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-loader": "^3.0.3",
    "eslint-plugin-html": "^6.0.0",
    "eslint-plugin-import": "^2.20.1",
    "eslint-plugin-node": "^11.0.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.1",
    "eslint-plugin-vue": "^6.2.1",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.17.1",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "file-loader": "^6.2.0",
    "friendly-errors-webpack-plugin": "^1.7.0",
    "html-webpack-plugin": "^3.2.0",
    "http-proxy-middleware": "^1.0.0",
    "istanbul": "^0.4.5",
    "jsdom": "^16.2.0",
    "jsdom-global": "^3.0.2",
    "opn": "^6.0.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "ora": "^4.0.3",
    "require-extension-hooks": "^0.3.3",
    "require-extension-hooks-babel": "^1.0.0",
    "require-extension-hooks-vue": "^3.0.0",
    "rimraf": "^3.0.2",
    "semver": "^7.1.3",
    "shelljs": "^0.8.3",
    "style-loader": "2.0.0",
    "url-loader": "^4.1.1",
    "vue-eslint-parser": "^7.0.0",
    "vue-loader": "^15.9.0",
    "vue-style-loader": "^4.1.2"
```

## ava配置
```text
在package.json添加
"ava": {
    "require": [
      "./test/helpers/setup.js"
    ]
  }
}

在package.json添加
"scripts": {
    "unit": "ENV=test ava --verbose"
}


项目里配置
$ tree test
test
├── helpers
│   └── setup.js
└── specs
    └── BcmMessage.spec.js
```

## helper/setup.js
```js
// ./test/_setup.js

// https://github.com/vuejs/vue-test-utils/issues/936
// from @vue/cli-plugin-unit-mocha/setup.js
require('jsdom-global')()

// https://github.com/vuejs/vue-test-utils/issues/936
// better fix for "TypeError: Super expression must either be null or
// a function" than pinning an old version of prettier.
window.Date = Date

// Setup browser environment
const hooks = require('require-extension-hooks');
const Vue = require('vue');

// Setup Vue.js to remove production tip
Vue.config.productionTip = false;

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push();
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js'])
  .exclude(({ filename }) => filename.match(/\/node_modules\//))
  .plugin('babel')
  .push();
```

## 案例specs/xxxx.spec.js
```js
import { mount } from '@vue/test-utils'
// import { shallowMount } from '@vue/test-utils'
// eslint-disable-next-line import/no-unresolved
import test from 'ava'
import Message from '../../tepkg/BcmMessage.vue'

test('renders props.msg when passed', (t) => {
  const msg = 'new message'
  const wrapper = mount(Message, {
    propsData: { msg }
  })
  t.is(wrapper.text(), msg)
})

test('renders default message if not passed a prop', (t) => {
  const defaultMessage = 'default message'
  const wrapper = mount(Message, { propsData: { msg: '' } })
  t.is(wrapper.text(), defaultMessage)
})
```

## .eslint.rc
```json
{
  "env": {
    "mocha": true
  },
  "globals": {
    "expect": true,
    "sinon": true
  }
}
```
