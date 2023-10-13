/**
 *
 * Asynchronously loads the component for MyAccount
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
