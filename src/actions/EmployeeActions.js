/**
 * Created by Luteh on 15/06/2017.
 */
import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_DELETE_PROPS} from './types';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const employeeCreate = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employee`)
            .push({name, phone, shift})
            .then(() => {
                dispatch({type: EMPLOYEE_CREATE});
                Actions.employeeList({type: 'reset'});
            })
    }
};

export const employeesFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employee`)
            .on('value', snapshot => {
                dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
            })
    }
};

export const employeeSave = ({name, phone, shift, uid}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employee/${uid}`)
            .set({name, phone, shift})
            .then(() => {
                dispatch({type: EMPLOYEE_SAVE_SUCCESS});
                Actions.employeeList({type: 'reset'});
            });
    }
};

export const employeeDeleteProps = () => {
    return {
        type: EMPLOYEE_DELETE_PROPS
    }
};