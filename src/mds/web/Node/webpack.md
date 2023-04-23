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


# 获取依赖树
```js
//OkDeps.js
class OkDeps {
    constructor() {

        // this.z =
    }


    beforeResolve(resolveData, callback) {

        /*
        {
  contextInfo: { issuer: '', issuerLayer: null, compiler: undefined },
  resolveOptions: {},
  context: '/Users/macbookpro/Documents/mylab/vue3_wp5',
  request: '/Users/macbookpro/Documents/mylab/vue3_wp5/src/car/main.js',
  dependencies: [
    EntryDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      weak: false,
      optional: false,
      _locSL: 0,
      _locSC: 0,
      _locEL: 0,
      _locEC: 0,
      _locI: undefined,
      _locN: 'car',
      _loc: [Object],
      request: '/Users/macbookpro/Documents/mylab/vue3_wp5/src/car/main.js',
      userRequest: '/Users/macbookpro/Documents/mylab/vue3_wp5/src/car/main.js',
      range: undefined
    }
  ],
         */
        const {  request,contextInfo, context } = resolveData;
        // console.log('bf -1 ', contextInfo && contextInfo.issuer)
        // console.log('bf -2 ', request)
        // console.log(resolveData)

        // console.log('[bf]', contextInfo && contextInfo.issuer, '=>',request,'@',context )
        // console.log('[bf]', contextInfo && contextInfo.issuer, '=>',request )

        callback()
    }




    afterResolve(result, callback) {
        const {  request,contextInfo, context } = result;
        // console.log('[af]', contextInfo && contextInfo.issuer, '=>',request ,'@',context )
        // console.log('[af]', contextInfo && contextInfo.issuer, '=>',request )

        callback()
    }

    handleFinishModules  (modules, callback) {
        // console.log('[FM]',modules)
        Array.from(modules).forEach(el=>{

            console.log('[FM]',el.userRequest)
            // if(el.userRequest==='vue' || el.userRequest==='vuex'){
            //     console.log('[FM]',el)
            // }
        })
        callback()
    }

    reg(compiler){
        console.log(Object.keys(compiler.options.entry))
        compiler.hooks.normalModuleFactory.tap(
            "OkDeps",
            nmf => {

                nmf.hooks.beforeResolve.tapAsync(
                    "OkDeps",
                    this.beforeResolve
                );

                nmf.hooks.afterResolve.tapAsync(
                    "OkDeps",
                    this.afterResolve
                );
            }
        );

        compiler.hooks.compilation.tap(
            "OkDeps",
            compilation => {

                compilation.hooks.finishModules.tapAsync(
                    "OkDeps",
                    this.handleFinishModules
                );
            }
        );
    }

    //插件入口
    apply(compiler) {
        this.reg(compiler);
    }
}
module.exports = OkDeps;
```


# 获取生命周期细节
```js

//PrintHooksPlugin.js
class PrintHooksPlugin {
  constructor() {}
  //打印编译器Hooks
  printCompilerHooks(compiler) {
    //打印编译对象
    compiler.hooks.thisCompilation.tap("PrintHooksPlugin", (compilation) => {
      this.printCompilationHooks(compilation);
    });

    //遍历compiler hooks
    Object.keys(compiler.hooks).forEach((hookName) => {
      compiler.hooks[hookName].tap("PrintHooksPlugin", (arg) => {
        // console.log(`${hookName}`, hookName, arg);
        console.log(new Date().toLocaleTimeString()+'.'+Date.now().toString().slice(-3),`compiler.hooks => ${hookName}`);
      });
    });
  }

  //打印编译（构建）Hooks
  printCompilationHooks(compilation) {
    let compilationHooks = compilation.hooks;

    //这里添加一个正则对象，判断Hook结尾的
    let reg = /Hook$/;
    Object.keys(compilationHooks).forEach((hookName) => {
      //获取hook函数名，判断以Hook结尾，并且不是log
      let name = compilationHooks[hookName].constructor.name;
      if (reg.test(name) && hookName !== "log") {
        compilationHooks[hookName].tap("PrintHooksPlugin", (arg, b) => {
          // console.log(`compilation ${hookName}`, arg);
          console.log(new Date().toLocaleTimeString()+'.'+Date.now().toString().slice(-3), `compilation.hooks => ${hookName}`);

          if(hookName==='statsPrinter'){
            // console.log(arg, b)
            arg.hooks.result._factory((a,b)=>{
                console.log(a,b)
            })
          }
        });
      }
    });
  }

  //插件入口
  apply(compiler) {
    console.log(compiler);
    console.log(compiler.hooks.thisCompilation);
    this.printCompilerHooks(compiler);
  }
}
module.exports = PrintHooksPlugin;

```


# 对产物进行压缩
```js
// 自定义 webpack plugin.
const { stat, writeFile } = require('fs/promises')
const path = require('path')

const Jz = require('jszip');
const { RawSource } = require("webpack-sources");
const sha256 = require('sha256-file');

// const prSha256 = new Promise(resolve => {
// })

class DonePlugin{
  constructor(params){
  }
  apply(compiler){
    // compiler.hooks.done.tap('DonePlugin', (stats)=>{
    compiler.hooks.afterDone.tap('DonePlugin', (stats)=>{
      // console.log(Date.now(), '当前webpack同步编译完成~~~');
      // const z1 = fs.existsSync(path.resolve(__dirname,'../../dist/logo.png'))
      // const z2 = fs.existsSync(path.resolve(__dirname,'../../dist/manifest.json'))

      // console.log(z1,z2)
      // todo gzip
      // todo 修改manifest
      // todo 签名
    });

    // https://stackoverflow.com/questions/72652370/webpack-4-to-5-custom-plugin-replacing-compilation-assets-mutation-with-compil
    compiler.hooks.emit.tapAsync('DonePlugin', (compilation, cb) => {
      console.log(Date.now(),compiler.options.name, '压缩资源');

      const zip = new Jz();
      // console.log(compilation.assets)
      for (let el in compilation.assets) {
          const source = compilation.assets[el].source();
          zip.file(el, source);
      }
      zip.generateAsync({type:"nodebuffer"})
          .then((content) => {
              compilation.assets[`HK_${compiler.options.name}.zip`] = new RawSource(content);
              cb();
          });
    })

    compiler.hooks.afterEmit.tapAsync('DonePlugin',   async (f, cb)=>{
      console.log(Date.now(),compiler.options.name, '生成manifest');
      const pf = compiler.options.output.path
      const meta = []
      let dfzip = null
      for(let el of Array.from(f.emittedAssets)){
        const fullp = path.resolve(pf,el)
        const z = await stat(fullp)
        const hs = sha256(fullp)
        const o = {
          name: el,
          size: z.size,
          bms: z.birthtimeMs, // utc
          bm: z.birthtime,
          hs
        }
        meta.push(o)
        if(/HK_\w+\.zip$/.test(el)){
          dfzip = o
        }
      }

      const fo = {
        list: meta,
        zip: dfzip,
        version: Date.now().toString()
      }

      console.log(dfzip)
      await writeFile(path.resolve(pf,'manifest.json'),JSON.stringify(fo,null,2))
      cb()

    });


  }
}

module.exports = DonePlugin;
```
