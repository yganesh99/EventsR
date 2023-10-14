/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import appReducer from './containers/App/reducer';
import registerReducer from './containers/Register/reducer';
import loginReducer from './containers/Login/reducer';
import myProfileReducer from './containers/MyProfile/reducer';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
    appReducer,
    registerReducer,
    loginReducer,
    myProfileReducer,
  });

  return rootReducer;
}
