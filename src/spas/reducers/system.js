// @flow

import type { Action } from '../../utils/types/actions';
import type { SystemState } from '../../utils/types/states';

import mediaQuery from '../../utils/constants/mobile-sizes';

export const defaultState: SystemState = {
  isMobile: false,
  mobileType: 'computer',
};

export default function (state: SystemState = defaultState, action: Action): SystemState {
  switch (action.type) {
    case 'INIT_APPLICATION': {
      return { ...state };
    }
    case 'SET_DEVICE_TYPE': {
      const { screenSize } = action;
      let isMobileType = state.mobileType;
      let checkMobile = state.isMobile;
      checkMobile = screenSize <= mediaQuery.tablet || screenSize <= mediaQuery.phone;
      if (screenSize <= mediaQuery.tablet) {
        isMobileType = 'tablet';
      }
      if (screenSize <= mediaQuery.phone) {
        isMobileType = 'phone';
      }
      return { ...state, isMobile: checkMobile, mobileType: isMobileType };
    }
    default:
      return state;
  }
}
