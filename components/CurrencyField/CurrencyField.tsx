import { memo } from 'react'

import './CurrencyFieldStyles.less'

interface ICurrencyField {
    id: string
    idx: number
    name: string
    value: number
    prevValue: number
    onClickRemove: (code: string) => void
}

const CurrencyField = ({ id, idx, name, value, prevValue, onClickRemove }: ICurrencyField) => (
    <div key={id} className={'field_container'}>
        <div>{idx}</div>
        <div>{name}</div>
        <div>{value}</div>
        <div>{prevValue}</div>
        <div>{(value / prevValue).toFixed(3)}</div>
        <div className={'icon_remove'} title={'Удалить валюту'} onClick={onClickRemove.bind(null, name)} />
    </div>
)

export default memo(CurrencyField)
