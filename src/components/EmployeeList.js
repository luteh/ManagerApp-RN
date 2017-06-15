/**
 * Created by Luteh on 15/06/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import {View, Text} from 'react-native';

class EmployeeList extends Component {
    componentWillMount(){
        this.props.employeesFetch();
    }

    render() {
        return (
            <View>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
            </View>
        )
    }
}

export default connect(null, {employeesFetch})(EmployeeList);