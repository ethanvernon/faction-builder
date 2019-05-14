import { 
  CHANGENAME, 
  CHANGECHARACTER, 
  PUT_CHARACTER_SUCCESS, 
  PUT_CHARACTER_FAILURE, 
  PUT_CHARACTER_STARTED, 
  CHANGEPASSKEY,/*
  GET_CHARACTER_STARTED,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_FAILURE*/ } from '../action-creators/actions';

var defaultState = "";

export const nameReducer = (state = {name: 'Please enter a name'}, action) => {
  switch (action.type) {
    case CHANGENAME:
      // don't mutate state here
      var newName = {name: action.name};
      return Object.assign({}, state, newName);
    default:
      return state;
  }
};

export const putCharacterReducer = (state = {loading: false, character: [{passkey:''}], error: null}, action) => {
  switch (action.type) {
    case PUT_CHARACTER_STARTED:
      return {
        ...state,
        loading: true
      };
    case PUT_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        character: [...state.character, action.payload]
      };
    case PUT_CHARACTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
/*
export const getCharacterReducer = (state = {loading: false, character: [{passkey:''}], error: null}, action) => {
  switch (action.type) {
    case GET_CHARACTER_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        character: [...state.character, action.payload]
      };
    case GET_CHARACTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
*/