// @flow strict-local

export type GameScore = {
  home: number,
  visitors: number,
};

export type GameOver = {
  loser: null | number,
  message: null | string,
  winner: null | number,
}

export type GameState = {
  animation: null | string,
  gameOver: GameOver,
  intro: boolean,
  hasWinner: boolean,
  score: GameScore,
};

export type SystemState = {
  isMobile: boolean,
  mobileType: string,
  pageWidth: number,
}

export type State = {
  gameboard: GameState,
  system: SystemState,
};
