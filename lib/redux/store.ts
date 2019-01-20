import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducer, initialState } from './reducers';
import { IReduxState } from '../types/reducers';

export const makeStore = (state = initialState): Store<IReduxState> => createStore(reducer, state, composeWithDevTools(applyMiddleware(thunk)));
