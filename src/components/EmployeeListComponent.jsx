import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';

export default class EmployeeListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
             employees: []
        }

        this.addEmployees = this.addEmployees.bind(this);
        this.updateEmployees = this.updateEmployees.bind(this);
        this.deleteEmployees = this.deleteEmployees.bind(this);
    }

    addEmployees() {
        this.props.history.push('/add-employees');
    }

    updateEmployees(id){
        this.props.history.push(`/update-employees/${id}`);
    }

    deleteEmployees(id){
        EmployeeServices.deleteEmployee(id).then((response) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        })
    }

    viewEmployees(id){
        this.props.history.push(`/view-employees/${id}`);
    }

    componentDidMount() {
        EmployeeServices.getEmployee().then((response) => {
            this.setState({employees: response.data});
        })
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployees}>Add New Employee</button>
                </div>
                &nbsp;
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button onClick={() => this.updateEmployees(employee.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: '10px'}} onClick={() => this.deleteEmployees(employee.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: '10px'}} onClick={() => this.viewEmployees(employee.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
