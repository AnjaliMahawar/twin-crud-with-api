import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import swal from 'sweetalert';

export default function Login() {
     
    //state

    const [userData, setUserData] = useState({
        name: "",    
        pass: ""
        });
        const { name, pass } = userData;
    //function
    let changeData = (e) => {
        const value = e.target.value;
        setUserData({
            ...userData,
            [e.target.name]: value
        })
        
    }
 const login=(e)=>{
    e.preventDefault()
    console.log("login")
    console.log(userData.name)
    console.log(userData.pass)


    axios.post('http://192.168.1.9:8020/api/user/login',{
            
        userName: userData.name,
        password: userData.pass,
    
       }).then((res)=>{
          console.log('well done')
          console.log(res)
          console.log("data",res.data.message)

          if(res.data.message=="Login Successfully")
          {
            swal(res.data.message);
          }
        
       }).catch((e)=>{
          console.log(e)
       })
  
 }

    //return
  return (
    <div>
        <h1>Login From</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name='name' onChange={changeData} value={userData.name} placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='pass' onChange={changeData} value={userData.pass} placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" onClick={login} type="submit">
        Submit
      </Button>
    </Form>

    </div>
  )
}
