/**
 *
 * Asynchronously loads the component for MyOrders
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
