import { memo } from 'react'

import './CurrencyFieldStyles.less'

interface ICurrencyField {
    idx: number
    name: string
    value: number
    prevValue: number
    onClickRemove: (code: string) => void
}

const CurrencyField = ({ idx, name, value, prevValue, onClickRemove }: ICurrencyField) => (
    <div className={'field_container'}>
        <div>{idx}</div>
        <div>{name}</div>
        <div>{value}</div>
        <div>{prevValue}</div>
        <div>{(value / prevValue).toFixed(3)}</div>
        <div className={'icon_remove'} title={'Удалить валюту'} onClick={onClickRemove.bind(null, name)} />
    </div>
)

export default memo(CurrencyField)
