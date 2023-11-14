/**
 *
 * Asynchronously loads the component for ProductTypes
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
