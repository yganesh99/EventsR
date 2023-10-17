/**
 *
 * Asynchronously loads the component for MyOrder
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
