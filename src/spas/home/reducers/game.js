// @flow

import type { Action } from '../shared/types/actions';
import type { GameState } from '../shared/types/states';

// Helpers
import { getRandomAnimation } from '../shared/helpers';

export const defaultState: GameState = {
  animation: null,
  gameOver: {
    loser: null,
    message: null,
    winner: null,
  },
  intro: true,
  hasWinner: false,
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

      if (newScore.home === 10 || newScore.visitors === 10) {
        newState.hasWinner = newScore.home === 10 || newScore.visitors === 10;
        const isWinner = newScore.home === 10;

        if (isWinner) {
          newState.gameOver.message = 'Winner, winner, chicken dinner!';
          newState.gameOver.winner = newScore.home;
          newState.gameOver.loser = newScore.visitors;
        } else {
          newState.gameOver.message = 'Oh nooooo, you lose!';
          newState.gameOver.winner = newScore.visitors;
          newState.gameOver.loser = newScore.home;
        }
      }
      // Spread into state and return;
      return { ...newState, score: { ...newScore } };
    }
    default:
      return state;
  }
}
