# sourcemap特征
```js
conf.devtool = 'eval-source-map' // 内部的map，不留map链接，打印源码位置，webpack://可调试 【试用开发环境】
conf.devtool = 'source-map' // 外部的map，留了map链接，add map后打印源码位置，但webpack://无法调试
conf.devtool = 'cheap-source-map' // 外部的map，留了map链接，不能打印源码位置，但webpack://可以调试编译后的代码
conf.devtool = 'hidden-source-map'  // 外部的map，不留map链接，add map后打印源码位置，但webpack://无法调试
```

# jQuery自动全局引用
```js
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
       vue$: 'vue/dist/vue.esm.js',
       '@': resolve('src'), 
       jquery: resolve('node_modules/jquery/dist/jquery.min.js'),
    },
}

plugins.push(
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
    }),
)
```


# jQuery手动局部引用
```js
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
       vue$: 'vue/dist/vue.esm.js',
       '@': resolve('src'), 
       jquery: resolve('node_modules/jquery/dist/jquery.min.js'),
    },
}

import $ from 'jquery'
```
