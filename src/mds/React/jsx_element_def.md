# 子组件定义
```tsx
interface IRdFloatPanel {
    show: boolean,
    children: JSX.Element;
    title: JSX.Element;
    onEvent: (t:string,raw: any,other: any)=>void
}

export const RdFloatPanel = ({ show, children, title, onEvent }: IRdFloatPanel) => {
  return <div className="fm-floatpanel"
    style={{
      right: show ? 0 : '-600px'
    }}>
    <div className="nav">
      <div className="ic-area"
        onClick={()=>{
          onEvent('EV_FLOATPANEL_CLOSE',null,null)
        }}
      >
        <img alt='close' src={close}/>
      </div>
      <div className="ic-area"
        onClick={()=>{
          onEvent('EV_FLOATPANEL_EDIT',null,null)
        }}
      >
        <img alt='edit' src={edit}/>
      </div>
      <div className="title">
        {title}
      </div>
    </div>
    <div className="body">
      {children}
    </div>
  </div>
}
```

# 外部使用子组件
```tsx
<RdFloatPanel
  show={showPanel}
  title={SubFarmTitle}
  onEvent={onAction}
>
  {
    //region JSX-右滑窗
    //endregion
    SubFarmBody(attr)
  }
</RdFloatPanel>

// region TITLE
// endregion
const SubFarmTitle = useMemo(() => {
  return <div className="ct-subfarm-title">
    <div>{attr.name}</div>
    <div>{attr.reim_selfno}</div>
  </div>
},[attr])

// region BODY
// endregion
const SubFarmBody = useCallback((o:TReimAttr) => {
  return <div className="ct-subfarm-body">
    {
      typePannel === 'BANKACCTRX' && <ZbodyBankAcctRx onAction={onFormEvent}/>
    }
    {/*{typePannel === 'REFUND_PLAN' &&*/}
    {/*<ZbodyRefundPlan id={o.contract_id} onAction={onFormEvent} ref_enablekeys={o.refund_no}/>*/}
    {/*}*/}
    {/*{typePannel === 'VOICE_INFO' &&*/}
    {/*<ZbodyVoiceInfo ref_name={o.cus_name} onAction={onFormEvent}/>*/}
    {/*}*/}
  </div>
},[attr, typePannel])
```

# 更精简版本
```tsx
import { ReactPropTypes } from "react"


interface IPkz{
    msg: string,
    children?: React.ReactNode
}

export const Pkz:React.FC<IPkz> = ({ children,msg })=>{
  return <div>
      mz: {msg}
    <p>
      {children}
    </p>
  </div>
}

export const Pkz2 = ({ children,msg }:IPkz)=>{
  return <div>
      mz: {msg}
    <p>
      {children}
    </p>
  </div>
}
```

# JSX.Element和React.ReactNode

https://javascript.plainenglish.io/how-to-use-react-fc-children-prop-in-react-18-with-typescript-6ab7b2c901ce
