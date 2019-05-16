import { combineReducers } from 'redux';
import { nameReducer,
	handleReducer,
	identityReducer,
	pConReducer,
	nConReducer,
	influenceReducer,
	motivationReducer,
	putCharacterReducer } from './reducers';

/**
 * Usually when exporting combineReducers you give a key for each reducer,
 * followed by the reducer associated with it.
 */
export const rootReducer = combineReducers({
	name: nameReducer,
	handle: handleReducer,
	identity: identityReducer,
	pCon: pConReducer,
	nCon: nConReducer,
	influence: influenceReducer,
	motivation: motivationReducer,
	saveCharacter: putCharacterReducer
});
