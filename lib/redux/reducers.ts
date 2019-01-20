import { AppActions } from './../types/actions.d'
import { ActionTypes } from './constant'
import { IReduxState } from '../types/reducers'

export const initialState: IReduxState = {
    data: [],
}

export const reducer = (state = initialState, action: AppActions) => {
    let data = []

    switch (action.type) {
        case ActionTypes.GET_DATA:
            data = action.payload
            return { ...state, data }
        default:
            return state
    }
}
