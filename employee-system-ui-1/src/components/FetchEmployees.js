import React from 'react'
import { useState,useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';

const FetchEmployees = () => {

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null)

  const navigate = useNavigate();

  useEffect(() => {
    
    const FetchData = async() =>{
      setLoading(true);
      try{
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      }catch(error){
        console.log(error);
      }

      setLoading(false);
     
    };

    FetchData();
    
  }, [])

  const deleteEmployee = (e,id) =>{
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) =>{
      if(employees){
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !==id)
        });
      }
    });
    
  }
  
  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button className="bg-slate-600 px-6 py-2 rounded text-white font-semibold" onClick={()=>{
          navigate("/addEmployee")
        }}>AddEmployee</button>
      </div>

      <div className="border-b flex shadow">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>

              
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Last Name
              </th>

              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email
              </th>

              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (<tbody>
            {employees.map((employee) => (
               <Employee
               employee={employee}
               deleteEmployee={deleteEmployee}
               key={employee.id}></Employee>
            ))
            }
          </tbody>)}
        </table>
      </div>
    </div>
  
  )
}

export default FetchEmployees
