// @flow

import type { State } from './states';

export type InitApplication = { type: 'INIT_APPLICATION' }

export type Action =
| InitApplication;

export type GetState = () => State;
// eslint-disable-next-line no-use-before-define
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void | Promise<void>;
export type Dispatchables = Action | ThunkAction | Promise<Action> | Array<Action> | Array<Promise<Action>>;
export type Dispatch = (action: Dispatchables) => void;
