// @flow

import { combineReducers } from 'redux';
import type { Reducer } from 'redux';

import system, { defaultState as systemState } from './system';

import type { State } from '../../utils/types/states';
import type { Action } from '../../utils/types/actions';

const reducer: Reducer<State, Action> = combineReducers({
  system,
});

export default reducer;

export const defaultState: State = {
  system: systemState,
};
