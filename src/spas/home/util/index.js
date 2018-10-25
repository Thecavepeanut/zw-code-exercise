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
