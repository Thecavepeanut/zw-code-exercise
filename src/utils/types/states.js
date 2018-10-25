// @flow strict-local

export type GameScore = {
  home: number,
  visitors: number,
};

export type GameState = {
  animation: null | string,
  intro: boolean,
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
