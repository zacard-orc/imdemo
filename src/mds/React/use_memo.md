# useMemo返回Jsx

```jsx
//region 按钮组
//endregion
const btnGroup = useMemo(()=>{
    return <div className="opsbtn-area">
        <Button theme="solid" type="primary" onClick={()=>{
            onOpenPanel('REFUND_PLAN')
        }} style={{ backgroundColor:'#6bbcd4' }}>
            选择计划回款
        </Button>
        <Button theme="solid" type="primary" onClick={()=>{
            onOpenPanel('VOICE_INFO')
        }} style={{ backgroundColor:'#6bbcd4' }}>
            选择发票信息
        </Button>
        <Button theme="solid" type="primary" onClick={onGoVoiceInfo} style={{ backgroundColor:'#6bbcd4' }}>
            新建发票信息
        </Button>
        <Button theme="solid" type="primary" onClick={onSavecus} style={{ backgroundColor:'#6bbcd4' }}>
            保存
        </Button>
        <Button theme="solid" type="warning" onClick={onCancelSavecus}>
            取消 & 返回
        </Button>
    </div>
},[attr])
```

# useMemo返回Object
```jsx
const opts = useMemo(() => {
    const option: ISelOption[] = [
      {
        value: '草稿',
        label: '草稿'
      },
      {
        value: '发布',
        label: '发布'
      },
    ]
    return option
  }, [])
```

# useMemo再Hooks
```jsx
export function useQuery() {
  const { search } = useLocation()

  return React.useMemo(() => new URLSearchParams(search), [search])
}
```

# useMemo返回Boolean
```jsx
const isAdmin = useMemo(()=> role ==='ADMIN',[role])
```
