// @flow

import type { State } from './states';

// System state
export type InitApplication = { type: 'INIT_APPLICATION' };
export type SetDeviceType = { type: 'SET_DEVICE_TYPE', screenSize: number };

// Game State
export type AddPoint = { type: 'ADD_POINT', team: string };
export type ClosePanel = { type: 'CLOSE_GAME_OVER' };
export type SelectLevel = { type: 'SET_SELECTED_LEVEL', level: string }
export type SetRandomAnimation = { type: 'GET_RANDOM_ANIMATION' };
export type StartGameOver = { type: 'START_GAME_OVER', reset?: boolean };
export type ToggleIntro = { type: 'TOGGLE_INTRO', toggle?: boolean }

export type Action =
| AddPoint
| ClosePanel
| InitApplication
| SelectLevel
| SetDeviceType
| SetRandomAnimation
| StartGameOver
| ToggleIntro;

export type GetState = () => State;
// eslint-disable-next-line no-use-before-define
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void | Promise<void>;
export type Dispatchables = Action | ThunkAction | Promise<Action> | Array<Action> | Array<Promise<Action>>;
export type Dispatch = (action: Dispatchables) => void;
