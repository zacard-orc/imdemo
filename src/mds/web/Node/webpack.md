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

# cjs转umd
## TomMath.cjs.js
```javascript
class TomMath {
    constructor(proj) {
        this.proj = proj
    }

    add(a,b){
        const c = a+b
        console.log('add', a,b,c)
        return c
    }

    minus(a,b){
        const c = a-b
        console.log('minus', a,b,c)
        return c
    }
}

module.exports = TomMath
```

## webpack.conf.cjs2umd.js
```javascript
const path = require('path')


module.exports = {
    // https://webpack.js.org/configuration/output/#outputlibrarytype
    entry: {
        'TomMath.umd': './umdx/TomMath.cjs.js'
    },
    output: {
        path: path.resolve(__dirname, '../umdx/dist'),
        filename: `./[name].js`,
        globalObject: 'this',
        library: {
            name: 'TomMath',
            type: 'umd'
        },
        clean: true
    }
}
```

## 验证-umd@html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="dist/TomMath.umd.js"></script>
</head>
<body>

</body>
<script type="text/javascript">
    console.log(TomMath)
    const tm = new TomMath.default
    const tm = new TomMath.TomMath
    tm.add(10,20)
</script>
</html>
```

## 不支持-esm@html
```text
不支持
```

## 验证-cjs@nodejs
```javascript
const {TomMath} = require('./dist/TomMath.umd')

const tm = new TomMath('demo')
tm.add(10,20)
```

## 验证-esm@nodejs
```javascript
import {TomMath } from "./dist/TomMath.umd.js";

const tm = new TomMath('demo')
tm.add(10,20)
```

# esm转umd+esm+cjs
## TomMath.js
```javascript
class TomMath {
    constructor(proj) {
        this.proj = proj
    }

    add(a,b){
        const c = a+b
        console.log('add', a,b,c)
        return c
    }

    minus(a,b){
        const c = a-b
        console.log('minus', a,b,c)
        return c
    }
}

export {
    TomMath
}

export default TomMath

```

## webpack.conf.esm2all.js
```javascript
const path = require('path')


module.exports = {
    // https://webpack.js.org/configuration/output/#outputlibrarytype
    experiments: {
        outputModule: true,
    },
    entry: {
        'TomMath.cjs': {
            import: './esm2all/TomMath.js',
            library: {
                type: 'commonjs2',
            },
        },
        'TomMath.umd': {
            import: './esm2all/TomMath.js',
            library: {
                name: 'TomMath',
                type: 'global', // this,window
            },
        },
        'TomMath.esm': {
            import: './esm2all/TomMath.js',
            library: {
                type: 'module',
            },
        },
    },
    output: {
        path: path.resolve(__dirname, '../esm2all/dist'),
        filename: `./[name].js`,
        globalObject: 'this',
        clean: true
    }
}
```


## 验证esm@html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
<script type="module" >
    import { TomMath } from './dist/TomMath.esm.js'
    const tm = new TomMath('demo')
    tm.add(10,20)
</script>
</html>
```
