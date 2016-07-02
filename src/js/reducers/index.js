import { combineReducers } from 'redux';
import home from './home';
import user from './user';
import routes from './routes';

export default combineReducers({
    home, user, routes
});
