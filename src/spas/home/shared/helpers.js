// @flow strict-local

// Contants to use
import animations from '../shared/constants/animations';

// $FlowFixMe: TODO -> Temp allow for Object due to time constraintes.
export const getDocumentWidth = (document: Object) => {
  const documentWidth = document.body ? document.body.clientWidth : 0;
  return documentWidth;
};

export const getRandomAnimation = (currentAnimation: null | string): string => {
  const filter = currentAnimation != null ? currentAnimation.replace('animate', '')[0] : 'T';
  const filtered = animations.filter(a => !a.includes(filter));
  const randomPick = filtered[Math.floor(Math.random() * filtered.length)];
  if (randomPick === currentAnimation) {
    getRandomAnimation(currentAnimation);
  }
  return randomPick;
};

// Pass the max in order to get random number between 0 and [max]
export const getRandomNumber = (max: number = Infinity) => Math.floor(Math.random() * max) + 1;
