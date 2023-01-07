# useCallback+参数+jsx

```jsx
// region BODY
// endregion
const SubFarmBody = useCallback((o: TSingleAttr) => {
    return <div className="ct-subfarm-body">
        {typePannel === 'REFUND_HIS' &&
        <ZbodyRefundHis id={o.contract_id} onAction={onFormEvent} ref_enablekeys={o.refund_no}/>
        }
        {typePannel === 'REFUND_PLAN' &&
        <ZbodyRefundPlan id={o.contract_id} onAction={onFormEvent} ref_enablekeys={o.refund_no}/>
        }
        {typePannel === 'VOICE_INFO' &&
        <ZbodyVoiceInfo ref_name={o.cus_name} onAction={onFormEvent}/>
        }
    </div>
}, [attr, typePannel])
```

# useCallback+参数+Object

```jsx
/**
 * @description 展示汇总
 * @param e list
 * @st showType展示类型
 */
const rdAggv = useCallback((e: any, st: string) => {
    
    const ft = e.reduce((prev: Record<string, number[]>, el: any) => {
        // 顶级科目
        if (st === 'top') {
            if (prev[el.fee_top_name]) {
                const pz = prev[el.fee_top_name]
                const npz1 = pz[0] + el.amt_accm
                const npz2 = pz[1] + el.amt_limit
                prev[el.fee_top_name] = [npz1, npz2]
            } else {
                prev[el.fee_top_name] = [el.amt_accm, el.amt_limit]
            }
        }
        // 父级科目
        if (st === 'pn') {
            if (prev[el.fee_parent_name]) {
                const pz = prev[el.fee_parent_name]
                const npz1 = pz[0] + el.amt_accm
                const npz2 = pz[1] + el.amt_limit
                prev[el.fee_parent_name] = [npz1, npz2]
            } else {
                prev[el.fee_parent_name] = [el.amt_accm, el.amt_limit]
            }
        }
        return prev
    }, {})
})
```

# useCallback+参数+不返回
```jsx
 const onSelMenu = useCallback((e: any) => {
    // console.log('click menu', e, routes)
    const hit = routes.filter(el => el.itemKey === e.itemKey)
    if (hit.length === 0) {
      return
    }
    
    history.push(hit[0].path)
    
  }, [])
```
