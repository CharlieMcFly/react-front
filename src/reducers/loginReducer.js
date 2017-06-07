import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducter(state = initialState.token, action){
    switch(action.type){
        case types.LOGIN_SUCCESS:
            return Object.assign({}, action.token);
        default:
            return state;
    }
}