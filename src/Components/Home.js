import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import BUTTON from 'react-bootstrap/BUTTON';
import {FaUserPlus,FaUserEdit,FaRegTrashAlt} from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';



function Home() {
  const history=useNavigate();
  const handleDelete=(id)=>{
    alert('deleted')
    let index=Employee.map(item=>item.id).indexOf(id);
    Employee.splice(index, 1);
    console.log(Employee);
    history('/')
  }

  const handleEdit=(id,uname,age,desg,salary)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("uname",uname)
    localStorage.setItem("age",age)
    localStorage.setItem("desg",desg)
    localStorage.setItem("salary",JSON.stringify(salary));
  }

  return (

    <div>
        <h1 className='text-primary text-center mt-5'>Employee management</h1>
        <p className='text-center'>
        Employee management is the effort to help employees 
        do their best work each day in order to achieve the
         larger goals of the organization. 
         There are many tasks and duties that 
         fall under employee management, but almost 
         all of them can fit into one of five categories:
          Selection. Monitoring.

        </p>
        <Link to={'/add'}>

        <BUTTON className='btn btn-success bd bd-3 ms-5'>Add <FaUserPlus/></BUTTON>
        
        </Link>
        
         <h3 className='mt-5 text-center'>List of Employees</h3>
         <Table className='mt-5' striped bordered hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {

        Employee && Employee.length> 0?
        Employee.map((item)=>(
            <tr>
                <td>{item.uname}</td>
                <td>{item.age}</td>
                <td>{item.desg}</td>
                <td>{item.salary}</td>
                <td>

                <Link to={'/edit'}>

                <BUTTON onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)} className='btn btn-secondary'><FaUserEdit/></BUTTON>

                </Link>
                <BUTTON onClick={()=>handleDelete(item.id)} className='btn btn-danger ms-4'><FaRegTrashAlt/></BUTTON></td>
            </tr>
        )):'error'
       }
      </tbody>
    </Table>
    </div>
  )
}

export default Home