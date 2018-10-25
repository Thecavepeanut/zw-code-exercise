// @flow strict-local

export type GameState = {
  intro: boolean,
};

export type SystemState = {
  isMobile: boolean,
  mobileType: string,
  pageWidth: number,
}

export type State = {
  system: SystemState,
};
