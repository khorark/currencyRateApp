import { memo } from 'react'

import './CurrencyFieldStyles.less'

interface ICurrencyField {
    id: string
    idx: number
    name: string
    value: number
    prevValue: number
}

const CurrencyField = ({ id, idx, name, value, prevValue }: ICurrencyField) => (
    <div key={id} className={'field_container'}>
        <div>{idx}</div>
        <div>{name}</div>
        <div>{value}</div>
        <div>{prevValue}</div>
        <div>{(value / prevValue).toFixed(3)}</div>
        <div />
    </div>
)

export default memo(CurrencyField)
