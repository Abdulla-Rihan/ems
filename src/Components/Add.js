import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from'./Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {

  const[id,setId]=useState('');
  const[uname,setUname]=useState('');
  const[age,setAge]=useState('');
  const[desig,setDesg]=useState('');
  const[salary,setSalary]=useState(0);

  let history=useNavigate()
  
const handleAdd=(e)=>{

  e.preventDefault();  //avoid refreshing
  let ids = uuid()
  console.log(ids);
  let uniqueId=ids.slice(0,8)
  console.log(uniqueId);

  Employee.push({
    id:uniqueId,
    uname:uname,
    age:age,
    desg:desig,
    salary:salary
  })
  
  history('/')
}

  return (
    <>
    <h1 className='text-primary mt-3' style={{marginLeft:'580px'}}> Add employ management</h1>
    <p className='text-center'>You can edit your details in the below table.The User Profile Summary component displays the user’s contact username, age, salary, and designation. If nickname display is enabled for the site, other users’ nicknames are shown in place of the full name. The full name is shown when users view their own profiles.</p>
      <Row>
         <Col>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyA44JdhHChP6kGqx36BolQq4Hn7z2yGekw&usqp=CAU' alt='' style={{marginLeft:'150px'}}/>
        <h2 style={{marginLeft:'185px',marginTop:'6px'}}>My Profile</h2>
         </Col>
         <Col className='' style={{marginRight:'400px'}}>
         <Form className='border border-3 p-4'>
      <Form.Group className="" controlId="formName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" 
        onChange={(e)=>setUname(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="" controlId="formName">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" 
      onChange={(e)=>setAge(e.target.value)}
        />
        <Form.Group className="" controlId="formName">
        <Form.Label>Desig</Form.Label>
        <Form.Control type="text" 
        onChange={(e)=>setDesg(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="" controlId="formName">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number"
         onChange={(e)=>setSalary(e.target.value)}
         />
      </Form.Group>
      </Form.Group>
      <Form.Group className="mt-2" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" 
      onClick={(e)=>handleAdd(e)}
      >
        Add
      </Button>
    </Form>
         </Col>
      </Row>
    </>
  )
}

export default Add