import * as types from '../constants/ActionTypes';


const initialState = {
	hasNotRead: [],
	hasRead: [],
	unreadMessageCount: 0
};


export default function (state = initialState, action) {
	const { payload, error, meta = {} } = action;
	const { sequence = {} } = meta;
	if (sequence.type === 'start' || error) {
		return state;
	}

	switch (action.type) {
		case types.OPEN_PAGE:
			return state;
		default :
			return state;
	}
}
