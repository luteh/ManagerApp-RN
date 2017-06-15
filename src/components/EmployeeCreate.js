/**
 * Created by Luteh on 15/06/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
import {CardSection, Card, Input, Button} from './common';
import EmployeeFrom from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render() {
        return (
            <Card>
                <EmployeeFrom {...this.props}/>
                <CardSection>
                    <Button onPressed={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}


const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift}
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);