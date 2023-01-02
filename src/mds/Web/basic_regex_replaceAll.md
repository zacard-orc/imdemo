### Sample - 1
```javascript
const {html} = await import(file)

const pattern = /\[:\w+\]/gi

const h2 = html.replaceAll(pattern, function (match: string) {
    const emid = match.slice(2, -1)

    return `<span><img src="/emoji/${emid}.svg" class="emj" alt=${emid}/></span>`
})
```
asf[ :smile] asdf [ :chat] zxb [ :axe] zzsdfs  
asf[:smile] asdf [:chat] zxb [:axe] zzsdfs
