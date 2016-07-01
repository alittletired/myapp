import *  as actionTypes from '../actions/types'
const initialState = {
    activeTab: 0,
    data: [],
    page: 1,
    isRefreshing:false
};
export default function problem(state = initialState, action) {
    const { error, meta = {}, type} = action;
    const {sequence = {}} = meta;
    if (sequence.type === 'start' || error) {
        return ...state;
    }
    if (action.type === actionTypes.GET_PROBLEM_LIST) {
        return {
				...state,
        }
    }

    if (action.type === actionTypes.GET_PROBLEM_LIST_MORE) {
        return {
				...state,
        }
    }

    return state;
}