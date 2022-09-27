import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import swal from 'sweetalert';

export default function Register() {

    //state
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        pass: "",
        cpass:""
    });

    const { name, email, pass, cpass } = userData;

    //function
 let getData=(e)=>{
    e.preventDefault()
    console.log("ok")
    console.log(userData.name)
    console.log(userData.email)
    console.log(userData.pass)
    console.log(userData.cpass)
    // var user=userData.name;
    //  var email=userData.email;
    //  var 
    fetch('http://192.168.1.9:8020/api/user/register',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({
          userName: userData.name,
          password:userData.pass,
          email:userData.email,
          confirmPassword:userData.cpass
        })
      }).then(response => response.json())
      .then((d)=>{
        console.log(d)
        if(d.message== "Registered Sucessfully"){
            swal("Good job!", "user registered successfully", "success");
        }
       
      }).catch((e)=>{
        console.log(e)
      })
      
 
   

 }
 let changeData = (e) => {
    const value = e.target.value;
    setUserData({
        ...userData,
        [e.target.name]: value
    })
    
}

    //return
    return (
        <div>
            <h1>Registration form</h1>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name='name'onChange={changeData} value={userData.name} placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email'onChange={changeData} value={userData.email} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='pass' onChange={changeData} value={userData.pass} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPasswordC">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" name='cpass' onChange={changeData} value={userData.cpass}  placeholder="Please enter your password again" />
                </Form.Group>
                <Button variant="primary" onClick={getData} type="submit">
                    Submit
                </Button>
            </Form>


        </div>
    )
}
