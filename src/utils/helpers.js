// @flow strict-local

// $FlowFixMe: TODO -> Temp allow for Object due to time constraintes.
export const getDocumentWidth = (document: Object) => {
  const documentWidth = document.body ? document.body.clientWidth : 0;
  return documentWidth;
};

export default getDocumentWidth;
