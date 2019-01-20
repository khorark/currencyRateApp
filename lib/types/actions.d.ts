import { Action } from 'redux';
import { ActionTypes } from 'lib/redux/constant';

export interface IGetData extends Action {
	type: ActionTypes.GET_DATA;
	payload: ICurrency[];
}

export type AppActions = IGetData;
