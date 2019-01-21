import { AppActions } from './../types/actions.d'
import { ActionTypes } from './constant'
import { IReduxState } from '../types/reducers'
import { setItemToStorage } from '../helpers/storageHelper'

export const initialState: IReduxState = {
    data: [],
    listShowCurrency: ['USD', 'EUR'],
}

export const reducer = (state = initialState, action: AppActions) => {
    let listShowCurrency = []

    switch (action.type) {
        case ActionTypes.GET_DATA:
            const { data, listShowCurrency: listShowCurrencyFromStorage } = action.payload
            listShowCurrency = listShowCurrencyFromStorage || state.listShowCurrency
            return { ...state, data, listShowCurrency }
        case ActionTypes.ADD_CURRENCY:
            listShowCurrency = [...state.listShowCurrency, action.code]
            setItemToStorage('ListShowCurrency', listShowCurrency)
            return { ...state, listShowCurrency }
        case ActionTypes.REMOVE_CURRENCY:
            listShowCurrency = state.listShowCurrency.filter(charCode => charCode !== action.code)
            setItemToStorage('ListShowCurrency', listShowCurrency)
            return { ...state, listShowCurrency }
        default:
            return state
    }
}
