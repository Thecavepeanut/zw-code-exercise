export function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const messaging = {
  success: ['Nice job!', 'You gotta be cheating!', 'Get yourself to Vegas!'],
  fail: [
    'More beer for me.',
    'The house never loses',
    "I'm sure you're good at other things"
  ]
};

export const defaultGameState = {
  deck: ['one', 'two', 'three'],
  winningScore: 10,
  isRevealed: 0,
  isShuffling: false,
  disableReveal: false,
  score: {
    Player: 0,
    House: 0
  },
  alert: {
    msg:
      'Welcome to 3 Card Zipwhip! Track the coin to score, score 10 times to win! Click the icon below to begin.',
    type: 'info'
  },
  reset: false
};
