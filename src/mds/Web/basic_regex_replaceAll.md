### Sample - 1
```typescript
const {html} = await import(file)

const pattern = /\[:\w+\]/gi

const h2 = html.replaceAll(pattern, function (match: string, index:number) {
    const emid = match.slice(2, -1)

    return `<span><img src="/emoji/${emid}.svg" class="emj" alt=${emid}/></span>`
})
```
asf[ :smile] asdf [ :chat] zxb [ :axe] zzsdfs  
asf[:smile] asdf [:chat] zxb [:axe] zzsdfs

### Sample - 2
```javascript
const a = 'jay sad home next sa33 can go say bao sa5sab back'
const pattern2 = /(sa\d+)(.*)(sa\d+)/gi
const c = a.replace(pattern2,'$3, $2, $1')
console.log(a)
console.log(c)
```
jay sad home next sa33 can go say bao sa5sab back  
jay sad home next sa5,  can go say bao , sa33sab back
