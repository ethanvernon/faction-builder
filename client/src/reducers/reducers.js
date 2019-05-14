import { 
  CHANGENAME, 
  PUT_CHARACTER_SUCCESS, 
  PUT_CHARACTER_FAILURE, 
  PUT_CHARACTER_STARTED,
  CHANGEHANDLE,
  CHANGEIDENTITY,
  ADDPCONS,
  ADDNCONS,
  ADDGEAR,
  CHANGEGOAL,
  CHANGEREADY,
  CHANGEABLE,
  CHANGEWILLING,
  CHANGEMOTIVATION/*
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

export const handleReducer = (state = {handle: 'Please choose a handle'}, action) => {
  switch (action.type) {
    case CHANGEHANDLE:
      var newHandle = {handle: action.handle};
      return Object.assign({}, state, newHandle);
    default:
      return state;
  }
}

export const identityReducer = (state = {identity: 'Please choose an identity'}, action) => {
  switch (action.type) {
    case CHANGEIDENTITY:
      var newIdentity = {identity: action.identity};
      return Object.assign({}, state, newIdentity);
    default:
      return state;
  }
}

export const pConReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGEPCONS:
      return [...state, action.pCons];
    default:
      return state;
  }
}

export const nConReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGENCONS:
      return [...state, action.nCons];
    default:
      return state;
  }
}

export const gearReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGEGEAR:
      return [...state, action.gear];
    default:
      return state;
  }
}

export const changeGoal = (state = {goal: 'Please enter a goal'}, action) => {
  switch (action.type) {
    case CHANGEGOAL:
      var newGoal = {goal: action.goal};
      return Object.assign({}, state, newGoal);
    default:
      return state;
  }
}

export const changeReady = (state = {ready: 4}, action) => {
  switch (action.type) {
    case CHANGEREADY:
      var newReady = {ready: action.ready}
      return Object.assign({}, state, newReady);
    default:
      return state;
  }
}

export const changeWilling = (state = {willing: 4}, action) => {
  switch (action.type) {
    case CHANGEWILLING:
      var newWilling = {willing: action.willing};
      return Object.assign({}, state, newWilling);
    default:
      return state;
  }
}

export const changeAble = (state = {able: 4}, action) => {
  switch (action.type) {
    case CHANGEABLE:
      var newAble = {able: action.able};
      return Object.assign({}, state, newAble);
    default:
      return state;
  }
}

export const changeMotivation = (state = {motivation: 'Please choose a motivation'}, action) => {
  switch (action.type) {
    case CHANGEMOTIVATION:
      var newMotivation = {motivation: action.motivation};
      return Object.assign({}, state, newMotivation);
    default:
      return state;
  }
}

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