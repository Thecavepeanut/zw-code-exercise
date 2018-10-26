// @flow

import { combineReducers } from 'redux';
import type { Reducer } from 'redux';

import gameboard, { defaultState as gameState } from './game';
import system, { defaultState as systemState } from './system';

import type { State } from '../shared/types/states';
import type { Action } from '../shared/types/actions';

const reducer: Reducer<State, Action> = combineReducers({
  gameboard,
  system,
});

export default reducer;

export const defaultState: State = {
  gameboard: gameState,
  system: systemState,
};
