/**
 * Created by Luteh on 15/06/2017.
 */
import {EMPLOYEE_UPDATE} from './types';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};