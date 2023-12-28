package com.example.Employee.controller;


import com.example.Employee.entity.Employee;
import com.example.Employee.model.EmployeeModel;
import com.example.Employee.service.EmployeeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeServiceInterface employeeServiceInterface;

    @PostMapping("/employee")
    public Employee saveEmployee(@RequestBody EmployeeModel employeeModel){
        return employeeServiceInterface.save(employeeModel);
    }

    @GetMapping("/employee")
    public List<EmployeeModel> findAll(){
        return employeeServiceInterface.findAll();
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
        boolean delete = employeeServiceInterface.delete(id);
        Map<String,Boolean> map = new HashMap<>();
        map.put("deleted",delete);
        return ResponseEntity.ok(map);
    }


    @GetMapping("employee/{id}")
    public EmployeeModel getEmployeeById(@PathVariable Long id){
        return employeeServiceInterface.findById(id);
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<Map<String,Boolean>> updateEmployee(@PathVariable Long id, @RequestBody EmployeeModel employeeModel){
       boolean update = employeeServiceInterface.updateEmployee(id,employeeModel);
        Map<String,Boolean> map = new HashMap<>();
        map.put("updated",update);
        return ResponseEntity.ok(map);
    }
}
