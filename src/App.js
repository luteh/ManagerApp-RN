/**
 * Created by Luteh on 14/06/2017.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBYyEV1eEjUrUHrfVn09ZgEwH2mxpWr0TE",
            authDomain: "manager-da28b.firebaseapp.com",
            databaseURL: "https://manager-da28b.firebaseio.com",
            projectId: "manager-da28b",
            storageBucket: "manager-da28b.appspot.com",
            messagingSenderId: "120676058859"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        )
    }
}

export default App;