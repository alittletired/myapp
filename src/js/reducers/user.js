import *  as actionTypes from '../actions/types'
const initialState = {
  isLoggedIn: false,
  id: null,
  name: null,
};
export default function user(state = initialState, action) {
    const {payload, error, meta = {}, type} = action;
    const {sequence = {}} = meta;
    if (sequence.type === 'start' || error) {
        return state;
    }
    if (action.type === actionTypes.LOGGED_IN) {
       
        payload.isLoggedIn = true;
        return {
				...state,
				...payload
            
        }
    }

    if (action.type === actionTypes.LOGGED_OUT) {
        return initialState;
    }


    return state;
}