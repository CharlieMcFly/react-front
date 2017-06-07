import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function carReducter(state = initialState.cars, action){
    switch(action.type){
        case types.LOAD_CARS_SUCCESS:
            return action.cars;
        default:
            return state;
    }
}