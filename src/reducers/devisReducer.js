import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function devisReducter(state = initialState.devis, action){
    switch(action.type){
        case types.SEND_DEVIS_SUCCESS:
            return [...state, Object.assign({}, action.devis)];
        default:
            return state;
    }
}