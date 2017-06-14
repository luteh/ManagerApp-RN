/**
 * Created by Luteh on 14/06/2017.
 */
import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {emailChanged} from '../actions';

class LoginForm extends Component {
    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
};

export default connect(mapStateToProps, {emailChanged})(LoginForm);