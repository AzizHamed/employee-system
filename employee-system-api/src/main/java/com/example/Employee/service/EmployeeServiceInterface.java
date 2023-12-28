package com.example.Employee.service;

import com.example.Employee.entity.Employee;
import com.example.Employee.model.EmployeeModel;

import java.util.List;

public interface EmployeeServiceInterface {
    Employee save(EmployeeModel employeeModel);

    List<EmployeeModel> findAll();

    boolean delete(Long id);

    EmployeeModel findById(Long id);

    boolean updateEmployee(Long id, EmployeeModel employeeModel);
}
