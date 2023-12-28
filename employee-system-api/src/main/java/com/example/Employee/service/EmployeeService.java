package com.example.Employee.service;


import com.example.Employee.entity.Employee;
import com.example.Employee.model.EmployeeModel;
import com.example.Employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class EmployeeService implements EmployeeServiceInterface {

    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public Employee save(EmployeeModel employeeModel) {
        Employee employee = Employee.builder().firstName(employeeModel.getFirstName())
                .lastName(employeeModel.getLastName())
                .email(employeeModel.getEmail()).build();

        return employeeRepository.save(employee);
    }

    @Override
    public List<EmployeeModel> findAll() {
        List<Employee> employees = employeeRepository.findAll();

        List<EmployeeModel> employeeModels = employees.stream().map(emp -> new EmployeeModel(
                emp.getId(),
                emp.getFirstName(),
                emp.getLastName(),
                emp.getEmail()
        )).collect(Collectors.toList());

        return employeeModels;

    }

    @Override
    public boolean delete(Long id) {
        Employee employee = employeeRepository.findById(id).get();
        if(employee ==null)
            throw new NoSuchElementException("employee not found");
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public EmployeeModel findById(Long id) {
        Employee employee =  employeeRepository.findById(id).get();
        if(employee ==null)
            throw new NoSuchElementException("employee not found");
        EmployeeModel employeeModel = new EmployeeModel();
        BeanUtils.copyProperties(employee,employeeModel);
        return employeeModel;
    }

    @Override
    public boolean updateEmployee(Long id, EmployeeModel employeeModel) {
        Employee employee = employeeRepository.findById(id).get();
        employee.setFirstName(employeeModel.getFirstName());
        employee.setLastName(employeeModel.getLastName());
        employee.setEmail(employeeModel.getEmail());
        employeeRepository.save(employee);
        return true;
    }
}
