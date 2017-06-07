import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import token from './loginReducer';
import cars from './carReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    token,
    cars
});

export default rootReducer;