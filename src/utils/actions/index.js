// @flow strict-local

// Types
import type { InitApplication } from '../types/actions';

// Initialte the pplication. Lets the browser know the redux state is available
export const initApplication = (): InitApplication => ({ type: 'INIT_APPLICATION' });

export default initApplication;
