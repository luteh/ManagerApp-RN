/**
 * Created by Luteh on 14/06/2017.
 */
import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'

export default combineReducers({
    auth: AuthReducer
})