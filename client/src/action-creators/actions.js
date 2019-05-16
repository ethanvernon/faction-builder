import axios from "axios";

export const CHANGENAME = 'CHANGENAME';
export const CHANGEIDENTITY = 'CHANGEIDENTITY';
export const ADDPCONS = 'ADDPCONS';
export const ADDNCONS = 'ADDNCONS';
export const CHANGEINFLUENCE = 'CHANGEINFLUENCE';
export const CHANGEMOTIVATION = 'CHANGEMOTIVATION';
export const PUT_FACTION_SUCCESS = 'PUT_FACTION_SUCCESS';
export const PUT_FACTION_FAILURE = 'PUT_FACTION_FAILURE';
export const PUT_FACTION_STARTED = 'PUT_FACTION_STARTED';
/*export const GET_FACTION_SUCCESS = 'GET_FACTION_SUCCESS';
export const GET_FACTION_FAILURE = 'GET_FACTION_FAILURE';
export const GET_FACTION_STARTED = 'GET_FACTION_STARTED';*/

export const changeName = (name) => {
	return {
		type: CHANGENAME,
		name: name
	}
}

export const changeIdentity = (identity) => {
	return {
		type: CHANGEIDENTITY,
		identity: identity
	}
}

export const addPCons = (pCons) => {
	return {
		type: ADDPCONS,
		pCons: pCons
	}
}

export const addNCons = (nCons) => {
	return {
		type: ADDNCONS,
		nCons: nCons
	}
}

export const changeInfluence = (influence) => {
	return {
		type: CHANGEINFLUENCE,
		influence: influence
	}
}

export const changeMotivation = (motivation) => {
	return {
		type: CHANGEMOTIVATION,
		motivation: motivation
	}
}

//tutorial from https://alligator.io/redux/redux-thunk/
export const putFaction = (faction) => {
	return dispatch => {

		//first dispatch an immediate synchronous action to the store to indicate that we’ve started saving 
		dispatch(putFactionStarted());

		return axios.post("/api/new-faction", {
				faction
		})
		.then(res => {
			dispatch(putFactionSucess(res.data));
			//dispatch(changePasskey(res.data.passkey));
		})
		.catch(err => {
			console.log('error caught');
			dispatch(putFactionFailure(err.response.data.message));
		});
	};
};

const putFactionStarted = () => ({
	type: PUT_FACTION_STARTED
});

const putFactionSucess = faction => ({
	type: PUT_FACTION_SUCCESS,
	payload: {
		...faction
	}
});

const putFactionFailure = error => ({
	type: PUT_FACTION_FAILURE,
	payload: {
		error
	}
});

/*
export const getFaction = (passkey) => {
	return dispatch => {

		//first dispatch an immediate synchronous action to the store to indicate that we’ve started loading 
		dispatch(getFactionStarted());

		//builds query from user input on home page
		var getQuery='/api/get-file/?passkey=' + passkey;

		axios.get(getQuery)
		.then(res => {
			dispatch(getFactionSucess(res.data));
			console.log(res.data[0].faction);
			dispatch(changeFaction(res.data[0].faction));
		})
		.catch(err => {
			dispatch(getFactionFailure(err.message));
		});
	};
};

const getFactionStarted = () => ({
	type: GET_FACTION_STARTED
});

const getFactionSucess = faction => ({
	type: GET_FACTION_SUCCESS,
	payload: {
		...faction
	}
});

const getFactionFailure = error => ({
	type: GET_FACTION_FAILURE,
	payload: {
		error
	}
});
*/