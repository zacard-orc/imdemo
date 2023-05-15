# 异步加载图片
```js
const getImgUrl = (name: string, suffix = 'svg') => {
    console.log(import.meta)
    const v = new URL(`./imgs/${name}.${suffix}`, import.meta.url)
    console.log(v)

    return v.href
}

const getFileName = (el: string) => {
    return el.split('/').pop()
}

const getStatusImgDict = () => {
    //@ts-ignore
    const modules = import.meta.glob(`./imgs/*.svg`)

    Object.keys(modules).forEach((key: any) => {
        console.log(key)
        /*
    ./imgs/excel.svg App.vue:52:16
    ./imgs/pdf.svg App.vue:52:16
    ./imgs/txt.svg App.vue:52:16
    ./imgs/word.svg App.vue:52:16
     */
        const newKey = getFileName(key)
        // modules[newKey] = modules[key];
        modules[newKey] = getImgUrl(newKey || '')
        // delete modules[key]
    })
    return modules
}

getStatusImgDict()
```

<img src="mds_sucai/Web/vue_importmeta_01.jpg" alt="1" width="800px"/>

