// @flow

import type { Action } from '../../utils/types/actions';
import type { GameState } from '../../utils/types/states';

export const defaultState: GameState = {
  intro: true,
};

export default function (state: GameState = defaultState, action: Action): GameState {
  switch (action.type) {
    case 'TOGGLE_INTRO': {
      const newState = { ...state, intro: action.toggleIntro };
      return { ...newState };
    }
    default:
      return state;
  }
}
