import { combineReducers } from 'redux';
import quality from './quality';
import problem from './problem';
import message from './message';
import more from './more';

export default combineReducers({
	quality,
	problem,
	message,
	more
});
