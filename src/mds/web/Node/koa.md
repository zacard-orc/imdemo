# 最小mvp
## 1.0
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

## 2.0
```javascript
const path = require('path')

const Koa = require('koa')
const ejs = require('koa-ejs')
const Router = require('koa-router')
const serve = require("koa-static");
const multer = require('@koa/multer');
const bodyParser = require("koa-bodyparser");
const cors = require("koa-cors");

const port = 6688
const app = new Koa()
const upload = multer();
const router = new Router();

app.listen(port)

ejs(app, {
    root: path.resolve(__dirname, './views'),
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: false
})


router
    .get('/index.html', async (ctx, next) => {
        await ctx.render('index', {
            title: 'hello world'
        })
    })
    .post('/hello', async (ctx, next) => {
        console.log(ctx.request.body)
        ctx.body = ctx.request.body
    })
    .post(
        '/svc_upload',
        upload.fields([
            {
                name: 'avatar',
                maxCount: 1
            },
            {
                name: 'boop',
                maxCount: 2
            }
        ]),
        ctx => {
            console.log('ctx.request.files', ctx.request.files);
            console.log('ctx.files', ctx.files);
            console.log('ctx.request.body', ctx.request.body);
            ctx.body = 'done';
        }
    );


app
    .use(serve(__dirname + '/public'))
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(cors({
            origin: '*'
        })
    );

console.log(`Started：http://localhost:${port}/`)
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

# Multer上传
```shell
pnpm install @koa/multer multer
```

```js
const multer = require('@koa/multer');
const upload = multer();


app.use(bodyParser());
router.post(
    '/svc_upload',
    upload.fields([
        {
            name: 'avatar',
            maxCount: 1
        },
        {
            name: 'boop',
            maxCount: 2
        }
    ]),
    ctx => {
        console.log('ctx.request.files', ctx.request.files);
        console.log('ctx.files', ctx.files);
        console.log('ctx.request.body', ctx.request.body);
        ctx.body = 'done';
    }
);
```

# ejs网页
```text
$ tree -L 2 -I node_modules  
.
├── README.md
├── entry.js
├── package-lock.json
├── package.json
└── views
    └── index.ejs
```


```javascript
const path = require('path')
const Koa = require('koa')
const ejs = require('koa-ejs')
const Router = require('koa-router')
const port = 6688

const app = new Koa()

app.listen(port)

ejs(app, {
    root: path.resolve(__dirname, './views'),
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: false
})

app.use(async ctx => {
    await ctx.render('index', {
        title: 'hello wordl!'
    })
})

console.log(`Started：http://localhost:${port}/`)
```

```ejs
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>图片压缩服务</title>
</head>
<body>
<%=title %>
</body>
</html>
```
