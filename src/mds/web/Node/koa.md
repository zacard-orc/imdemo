# 最小mvp
```shell
npm init
pnpm install koa koa-router@7  koa-bodyparser@3 koa-cors
mkidr server.js
```

```javascript
const Koa = require("koa");
const Router = require("koa-router");
const fs = require("fs");
const bodyParser = require("koa-bodyparser");
const cors = require("koa-cors");

const app = new Koa();
const router = new Router();


app.use(bodyParser());

router
    .get('/SD0001.ajax', async (ctx, next) => {
        console.log(ctx.request.query)
        ctx.body = {a: 1};
    })
    .post('/hello',async(ctx,next)=>{
        console.log(ctx.request.body)
        ctx.body = ctx.request.body
    })
app.use(cors({
        origin: '*'
    })
);
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);


console.log("server started at http:localhost:3000");

```

# Static
```shell
pnpm install koa-static
```
```js
const serve = require("koa-static");

const app = new Koa();
const router = new Router();


app.use(async (ctx, next) => {
    console.log('1=>', ctx.request.url, ctx.request.headers)
    if(!ctx.request.headers.cookie || !ctx.request.headers.cookie.includes('bcd')){
        throw new Error('not have cookie')
    }
    await next()
    console.log('1<=')
})
app.use(serve(__dirname + '/public'))

```
