// @flow
// Stateless components should not contain any mapping. It should all be passed.
// Condintions should be kept to a minimum.
import React, { Fragment } from 'react';

import { Loader, LoadingContainer, Spinner } from '../styles/loader';

import '../styles/animations.css';

const Loading = () => (
  <Fragment>
    <Loader />
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  </Fragment>
);

export default Loading;
