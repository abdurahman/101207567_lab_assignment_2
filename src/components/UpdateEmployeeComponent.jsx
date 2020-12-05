import React, { Component } from "react";
import EmployeeServices from "../services/EmployeeServices";

export default class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmailId = this.changeEmailId.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  cancel() {
    this.props.history.push("/employees");
  }

  updateEmployee = (e) => {
    e.preventDefault();

    let newEmployee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };

    EmployeeServices.updateEmployee(newEmployee, this.state.id).then((response) => {
      this.props.history.push("/employees");
    });
  };

  componentDidMount() {
    EmployeeServices.getEmployeeViaID(this.state.id).then((response) => {
      let employees = response.data;
      this.setState({
        firstName: employees.firstName,
        lastName: employees.lastName,
        emailId: employees.emailId,
      });
    });
  }

  changeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailId = (event) => {
    this.setState({ emailId: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h1 className="text-center">Update Employee Form</h1>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    className="form-control"
                    placeholder="Enter First Name Here..."
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.changeFirstName}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    className="form-control"
                    placeholder="Enter Last Name Here..."
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.changeLastName}
                  />
                </div>
                <div className="form-group">
                  <label>Email Id (Address):</label>
                  <input
                    className="form-control"
                    placeholder="Enter Email Address (ID) Here..."
                    name="emailId"
                    value={this.state.emailId}
                    onChange={this.changeEmailId}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={this.updateEmployee}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
