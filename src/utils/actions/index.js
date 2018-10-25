// @flow strict-local

// Types
import type {
  InitApplication,
  SetDeviceType,
} from '../types/actions';

// Initialte the pplication. Lets the browser know the redux state is available
// System actions
export const initApplication = (): InitApplication => ({ type: 'INIT_APPLICATION' });
export const setDeviceType = (screenSize: number): SetDeviceType => ({
  type: 'SET_DEVICE_TYPE',
  screenSize,
});

export default initApplication;
