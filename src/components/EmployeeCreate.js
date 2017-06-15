/**
 * Created by Luteh on 15/06/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {CardSection, Card, Input, Button} from './common';
class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="name"
                        placeholder="Employee name"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value}) }
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="0813-1333-3333"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button>
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

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);