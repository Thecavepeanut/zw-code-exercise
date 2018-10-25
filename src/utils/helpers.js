// @flow strict-local

// Contants to use
import animations from '../utils/constants/animations';

// $FlowFixMe: TODO -> Temp allow for Object due to time constraintes.
export const getDocumentWidth = (document: Object) => {
  const documentWidth = document.body ? document.body.clientWidth : 0;
  return documentWidth;
};

export const getRandomAnimation = (currentAnimation: null | string) => {
  const randomPick = animations[Math.floor(Math.random() * animations.length)];
  if (randomPick === currentAnimation) {
    getRandomAnimation(currentAnimation);
  }
  return randomPick;
};

export default getDocumentWidth;
