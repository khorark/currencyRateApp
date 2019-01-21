import { Dispatch } from 'redux'
import fetch from 'isomorphic-unfetch'

import { ActionTypes } from './constant'
import { getItemFromStorage } from '../helpers/storageHelper'

export const getData = () => async (dispatch: Dispatch) => {
    try {
        const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        const json = await res.json()

        if (!json.hasOwnProperty('Valute')) throw new Error('Property "Valute" does not exist in data!')
        const listShowCurrency = getItemFromStorage('ListShowCurrency')

        dispatch({
            payload: { data: Object.values(json.Valute), listShowCurrency },
            type: ActionTypes.GET_DATA,
        })
    } catch (e) {
        console.error('Error get fetch data! /n', e)
    }
}

export const appendCurrency = ({ code }: { code: string }) => ({
    type: ActionTypes.ADD_CURRENCY,
    code,
})

export const removeCurrency = ({ code }: { code: string }) => ({
    type: ActionTypes.REMOVE_CURRENCY,
    code,
})
