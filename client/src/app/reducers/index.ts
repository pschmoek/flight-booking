import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromCode from './code';

export interface State {
  code: fromCode.State
}

const reducers = {
  code: fromCode.reducer
};

const combinedReducers: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return combinedReducers(state, action);
}

export const getCodeState = (state: State) => state.code;
export const getCodes = createSelector(getCodeState, fromCode.getCodes);
export const getCodesLoaded = createSelector(getCodeState, fromCode.getCodesLoaded);
export const getCodesLoading = createSelector(getCodeState, fromCode.getCodesLoading);
