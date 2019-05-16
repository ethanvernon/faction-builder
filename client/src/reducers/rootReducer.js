import { combineReducers } from 'redux';
import { nameReducer,
	identityReducer,
	pConReducer,
	nConReducer,
	influenceReducer,
	motivationReducer,
	putFactionReducer } from './reducers';

/**
 * Usually when exporting combineReducers you give a key for each reducer,
 * followed by the reducer associated with it.
 */
export const rootReducer = combineReducers({
	name: nameReducer,
	identity: identityReducer,
	pCon: pConReducer,
	nCon: nConReducer,
	influence: influenceReducer,
	motivation: motivationReducer,
	saveFaction: putFactionReducer
});
