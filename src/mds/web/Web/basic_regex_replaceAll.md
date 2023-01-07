# replaceAll
1, 必须是Node > 15到版本  
```typescript
const {html} = await import(file)

const pattern = /\[:\w+\]/gi

const h2 = html.replaceAll(pattern, function (match: string, index:number) {
    const emid = match.slice(2, -1)

    return `<span><img src="/emoji/${emid}.svg" class="emj" alt=${emid}/></span>`
})
```

```text
asf[ :smile] asdf [ :chat] zxb [ :axe] zzsdfs  
asf[:smile] asdf [:chat] zxb [:axe] zzsdfs
```


# $1,$2
```javascript
const a = 'jay sad home next sa33 can go say bao sa5sab back'
const pattern2 = /(sa\d+)(.*)(sa\d+)/gi
const c = a.replace(pattern2,'$3, $2, $1')
console.log(a)
console.log(c)
```

```text
jay sad home next sa33 can go say bao sa5sab back  
jay sad home next sa5,  can go say bao , sa33sab back
```

# 分组
```javascript
const reg5 = /<(title)>\w+<\/\1>/g;
console.log('<title>xxx</title>',reg5.test('<title>xxx</title>'));

const reg6 = /(\d{1,3})(.\1){3}/g;
console.log('223.5.5.5',reg6.test('223.5.5.5'));
```

```text
<title>xxx</title> true
223.5.5.5 true
```

# 零宽断言 往后方向
```javascript
// 某字符串 product 后面带有某个字符串

// 正向零宽，匹配为true，也就是后面带着xxx带情况下，该如何如何
const reg71 = /(product)(?=_path)/g; // true
console.log('reg71', reg71.test('product_path'));

const reg72 = /(product)(?=_path)/g; // true
console.log('reg72', reg72.test('product_2path'));

let a = 'bbb123abccc';
const aret = a.match(/\d+(?=ab)/);

console.log(aret);

// 正向零宽，不匹配为true

const reg73 = /(product)(?!_min.css)/g; // 也就是不能包含min.css
console.log('reg73a', reg73.test('product_path')); // true
console.log('reg73b', reg73.test('product_min.css')); // false
```

```text
reg71 product_path true
reg72 product_2path false

bbb123abccc a.match(/\d+(?=ab)/);
[ '123', index: 3, input: 'bbb123abccc', groups: undefined ]

reg73a true
reg73b false

```


# 零宽断言 往前方向
```javascript
// 某字符串 wangfei 前面带有某个字符串

// 负向零宽，匹配为true，也就是前面带着xxx带情况下，该如何如何

const reg81 = /(?<=name:)(wangfei)/g;
console.log('reg81', reg81.test('name:wangfei')); // true
// 连带向后(右)匹配，找到为正，能找出wangfei【 站在常量字符串角度=》这个字符串前面有，则T】

const reg82 = /(?<!na3me:)(wangfei)/g;
console.log('reg82', reg82.test('name:wangfei')); // true
console.log('reg82', reg82.test('na3me:wangfei')); // false
```

```text
reg81 name:wangfei true
reg82 name:wangfei true
reg82 name:wangfei false
```
