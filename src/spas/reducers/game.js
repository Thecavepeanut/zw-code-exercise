// @flow

import type { Action } from '../../utils/types/actions';
import type { GameState } from '../../utils/types/states';

// Helpers
import { getRandomAnimation } from '../../utils/helpers';

export const defaultState: GameState = {
  animation: null,
  intro: true,
  isWinner: false,
  score: {
    home: 0,
    visitors: 0,
  },
};

// Always set new state to prevent mutation

export default function (state: GameState = defaultState, action: Action): GameState {
  switch (action.type) {
    case 'GET_RANDOM_ANIMATION': {
      const newState = { ...state };
      const newAnimation = getRandomAnimation(state.animation);
      return { ...newState, animation: newAnimation };
    }
    case 'TOGGLE_INTRO': {
      const { toggle } = action;
      // If toggle isn't passed, use the current state to change
      const setToggle = toggle || !state.intro;
      const newState = { ...state, intro: setToggle };
      return { ...newState };
    }
    case 'ADD_POINT': {
      const newState = { ...state };
      const { score } = newState;
      const { home, visitors } = score;
      // Set new score for later spread
      const newScore = score;
      switch (action.team) {
        case 'visitors':
          newScore.visitors = (visitors + 1);
          break;
        default:
          newScore.home = (home + 1);
          break;
      }
      // Spread into state and return;
      return { ...newState, score: { ...newScore } };
    }
    default:
      return state;
  }
}
