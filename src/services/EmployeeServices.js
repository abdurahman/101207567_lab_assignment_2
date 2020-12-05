import axios from "axios";

const EMPLOYEE_API_URL = "http://localhost:9090/api/v1/employees";

class EmployeeServices {
  getEmployee() {
    return axios.get(EMPLOYEE_API_URL);
  }

  addEmployee(employees) {
    return axios.post(EMPLOYEE_API_URL, employees);
  }

  getEmployeeViaID(id) {
    return axios.get(EMPLOYEE_API_URL + '/' + id);
  }

  updateEmployee(employees, id){
      return axios.put(EMPLOYEE_API_URL + '/' + id, employees);
  }

  deleteEmployee(id){
      return axios.delete(EMPLOYEE_API_URL + '/' + id);
  }
}

export default new EmployeeServices();
