import { 
  CHANGENAME, 
  PUT_CHARACTER_SUCCESS, 
  PUT_CHARACTER_FAILURE, 
  PUT_CHARACTER_STARTED,
  CHANGEHANDLE,
  CHANGEIDENTITY,
  ADDPCONS,
  ADDNCONS,
  CHANGEINFLUENCE,
  CHANGEMOTIVATION/*
  GET_CHARACTER_STARTED,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_FAILURE*/ } from '../action-creators/actions';

var defaultState = "";

export const nameReducer = (state = {name: ''}, action) => {
  switch (action.type) {
    case CHANGENAME:
      // don't mutate state here
      var newName = {name: action.name};
      return Object.assign({}, state, newName);
    default:
      return state;
  }
};

export const handleReducer = (state = {handle: 'Please choose a handle'}, action) => {
  switch (action.type) {
    case CHANGEHANDLE:
      var newHandle = {handle: action.handle};
      return Object.assign({}, state, newHandle);
    default:
      return state;
  }
}

export const identityReducer = (state = {identity: 'activist'}, action) => {
  switch (action.type) {
    case CHANGEIDENTITY:
      var newIdentity = {identity: action.identity};
      return Object.assign({}, state, newIdentity);
    default:
      return state;
  }
}

export const pConReducer = (state = {pCon: 'angry'}, action) => {
  switch (action.type) {
    case ADDPCONS:
      var newPCon = {pCon: action.pCons};
      return Object.assign({}, state, newPCon);
    default:
      return state;
  }
}

export const nConReducer = (state = {nCon: 'burned out'}, action) => {
  switch (action.type) {
    case ADDNCONS:
      var newNCon = {nCon: action.nCons};
      return Object.assign({}, state, newNCon);
    default:
      return state;
  }
}

export const influenceReducer = (state = {influence: 1}, action) => {
  switch (action.type) {
    case CHANGEINFLUENCE:
      var newInfluence = {influence: action.influence}
      return Object.assign({}, state, newInfluence);
    default:
      return state;
  }
}

export const motivationReducer = (state = {motivation: 'Envy'}, action) => {
  switch (action.type) {
    case CHANGEMOTIVATION:
      var newMotivation = {motivation: action.motivation};
      return Object.assign({}, state, newMotivation);
    default:
      return state;
  }
}

export const putCharacterReducer = (state = {saving: false, character: [], error: null}, action) => {
  switch (action.type) {
    case PUT_CHARACTER_STARTED:
      return {
        ...state,
        saving: true
      };
    case PUT_CHARACTER_SUCCESS:
      return {
        ...state,
        saving: false,
        error: null,
        character: [...state.character, action.payload]
      };
    case PUT_CHARACTER_FAILURE:
      return {
        ...state,
        saving: false,
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