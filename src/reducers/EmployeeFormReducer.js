/**
 * Created by Luteh on 15/06/2017.
 */
import {EMPLOYEE_UPDATE} from '../actions/types';

const INITIAL_STATE = {
    name:'',
    phone:'',
    shift:''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        default:
            return state;
    }
}