/**
 *
 * Asynchronously loads the component for ProductCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
