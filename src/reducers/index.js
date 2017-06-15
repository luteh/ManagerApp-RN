/**
 * Created by Luteh on 14/06/2017.
 */
import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import EmployeeFormReducer from'./EmployeeFormReducer'
import EmployeeReducer from './EmployeeReducer'

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
})