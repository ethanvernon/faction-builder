import { combineReducers } from 'redux';
import { nameReducer,
	handleReducer,
	identityReducer,
	pConReducer,
	nConReducer,
	gearReducer,
	goalReducer,
	readyReducer,
	willingReducer,
	ableReducer,
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
	Pcon: pConReducer,
	nCon: nConReducer,
	gear: gearReducer,
	goal: goalReducer,
	ready: readyReducer,
	willing: willingReducer,
	able: ableReducer,
	motivation: motivationReducer,
	saveCharacter: putCharacterReducer
});
