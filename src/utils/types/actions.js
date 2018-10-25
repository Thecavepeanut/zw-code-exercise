// @flow

import type { State } from './states';

// System state
export type InitApplication = { type: 'INIT_APPLICATION' };
export type SetDeviceType = { type: 'SET_DEVICE_TYPE', screenSize: number };

// Game State
export type GameState = { type: 'TOGGLE_INTRO', toggleIntro: boolean };

export type Action =
| GameState
| InitApplication
| SetDeviceType;

export type GetState = () => State;
// eslint-disable-next-line no-use-before-define
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void | Promise<void>;
export type Dispatchables = Action | ThunkAction | Promise<Action> | Array<Action> | Array<Promise<Action>>;
export type Dispatch = (action: Dispatchables) => void;
