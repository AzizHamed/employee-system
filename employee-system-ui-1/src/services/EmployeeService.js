import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  getEmployees(){
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  deleteEmployee(id){
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  getEmployeeById(id){
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  updateEmployee(id,employee){
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + id,employee);
  }
}

export default new EmployeeService();