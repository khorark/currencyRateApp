import { Dispatch } from "redux";
import fetch from 'isomorphic-unfetch';

import { ActionTypes } from './constant';


export const getData = () => async (dispatch: Dispatch) => {
    try {
        const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const json = await res.json();

        if (!json.hasOwnProperty('Valute')) throw new Error('Property "Valute" does not exist in data!');

        dispatch({
            payload: Object.values(json.Valute),
            type: ActionTypes.GET_DATA,
        })
    } catch {
        console.error('Error get fetch data!')
    }
   
}