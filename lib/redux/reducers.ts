import { AppActions } from './../types/actions.d'
import { ActionTypes } from './constant'
import { IReduxState } from '../types/reducers'

export const initialState: IReduxState = {
    data: [],
    listShowCurrency: ['USD', 'EUR'],
}

export const reducer = (state = initialState, action: AppActions) => {
    let data = []
    let listShowCurrency = []

    switch (action.type) {
        case ActionTypes.GET_DATA:
            data = action.payload
            return { ...state, data }
        case ActionTypes.ADD_CURRENCY:
            listShowCurrency = [...state.listShowCurrency, action.code]
            return { ...state, listShowCurrency }
        case ActionTypes.REMOVE_CURRENCY:
            listShowCurrency = state.listShowCurrency.filter(charCode => charCode !== action.code)
            return { ...state, listShowCurrency }
        default:
            return state
    }
}
