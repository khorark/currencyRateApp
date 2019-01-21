import { Action } from 'redux'

import { ICurrency } from './reducers.d'
import { ActionTypes } from '../redux/constant'

export interface IGetData extends Action {
    type: ActionTypes.GET_DATA
    payload: {
        data: ICurrency[]
        listShowCurrency?: string[]
    }
}

export interface IAddCurrency extends Action {
    type: ActionTypes.ADD_CURRENCY
    code: string
}

export interface IRemoveCurrency extends Action {
    type: ActionTypes.REMOVE_CURRENCY
    code: string
}

export type AppActions = IGetData | IAddCurrency | IRemoveCurrency
