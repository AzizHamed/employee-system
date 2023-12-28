import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const EditEmployee = () => {
  const {id} = useParams();
  const [employee, setEmployee] = useState({id : id, firstName : "", lastName:"", email :""
  })

  useEffect(() => {
    const fetchData = async()=>{
      try{
        const response = await EmployeeService.getEmployeeById(employee.id);
        console.log(response.data)
        setEmployee(response.data);
      }catch(error){
        console.log(error);
      }
    }

    fetchData();
  }, [])
  

  const navigate = useNavigate();

  const handleChange = (e) =>{
    const value = e.target.value;
    setEmployee({...employee,[e.target.name] : value})
  }

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee.id,employee)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancel = (e) =>{
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
        <h1> Edit Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 ">
          <label className="block text-gray-600 text-sm font-normal">
            FirstName
          </label>

          <input 
          onChange={(e)=>handleChange(e)}
          name="firstName"
          value={employee.firstName}
          type="text" 
          className="h-10 w-96 border mt-2 px-2 py-2 "
          /> 
        </div>

        <div className="items-center justify-center h-14 w-full my-4 ">
          <label className="block text-gray-600 text-sm font-normal">
            LastName
          </label>

          <input 
          name="lastName"
          value={employee.lastName}
          onChange={(e)=>handleChange(e)}
          type="text" className="h-10 w-96 border mt-2 px-2 py-2 "/> 
        </div>

        <div className="items-center justify-center h-14 w-full my-4 ">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>

          <input
          name="email"
          value={employee.email}
          onChange={(e)=>handleChange(e)}
           type="email" className="h-10 w-96 border mt-2 px-2 py-2 "/> 
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4 ">
          <button 
          onClick={updateEmployee}
          className="ronded text-white font-semibold bg-green-400 hover:bg-green-800 py-2 px-6">Update</button>

          <button
          onClick={cancel}
           className="ronded text-white font-semibold bg-red-400 hover:bg-red-800 py-2 px-6 ">Cancel</button>
        </div>
      </div>
    </div>
  )
 
}

export default EditEmployee
