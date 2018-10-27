// @flow strict-local

// Types
import type {
  AddPoint,
  ClosePanel,
  InitApplication,
  SetDeviceType,
  SetRandomAnimation,
  StartGameOver,
  ToggleIntro,
} from '../types/actions';

// Initialte the pplication. Lets the browser know the redux state is available
// System actions
export const initApplication = (): InitApplication => ({ type: 'INIT_APPLICATION' });
export const setDeviceType = (screenSize: number): SetDeviceType => ({
  type: 'SET_DEVICE_TYPE',
  screenSize,
});

// Game actions
export const addPoint = (team: string): AddPoint => ({ type: 'ADD_POINT', team });
export const closePanel = (): ClosePanel => ({ type: 'CLOSE_GAME_OVER' });
export const setRandomAnimation = (): SetRandomAnimation => ({ type: 'GET_RANDOM_ANIMATION' });
export const startOver = (): StartGameOver => ({ type: 'START_GAME_OVER' });
export const toggleIntro = (toggle?: boolean): ToggleIntro => ({ type: 'TOGGLE_INTRO', toggle });


export default initApplication;
