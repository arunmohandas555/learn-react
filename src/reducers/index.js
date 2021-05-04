import counterReducer from './counter';
import isLoggedInReducer from './isLoggedIn';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
	counter   : counterReducer,
	isLoggedIn: isLoggedInReducer
});

export default allReducers;