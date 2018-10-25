// @flow strict-local

// Types
import type {
  InitApplication,
  SetDeviceType,
  SetRandomAnimation,
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
export const addPoint = (team: string) => ({ type: 'ADD_POINT', team });
export const setRandomAnimation = (): SetRandomAnimation => ({ type: 'GET_RANDOM_ANIMATION' });
export const toggleIntro = (toggle?: boolean): ToggleIntro => ({ type: 'TOGGLE_INTRO', toggle });


export default initApplication;
