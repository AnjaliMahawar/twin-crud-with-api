import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'



export default function Crud() {
  //state
 const[userData,setUserData]=useState({
 
  name:"",
  email:"",
   dob:"",
   position:"",
   technologies_known:"",
   technologie_type:"" 
 })
 const [show, setShow] = useState(false)
const[data1,setData1]=useState({
  data2:[]
})
const[id1,setID1]=useState()
var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyYWY0MzM5MWM1ZGM4YjlkZWVlNmYiLCJpYXQiOjE2NjQyNjYwODV9.JMkYZVXb_XDXk4-9s-2ksowfOkdGqewIHiYtnzkrZK8'
 const { name,email,dob,position,technologie_type,technologies_known } = userData;
  //function 
  let changeData = (e) => {
    const value = e.target.value;
    setUserData({
        ...userData,
        [e.target.name]: value
    })
    
}
useEffect(()=>{
 getData()
 
},
[])

const getData=()=>{
  
  console.log("ok")
  
  var object = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Host': 'api.producthunt.com'
        
    }
}

//Read
fetch('http://192.168.1.9:8020/api/employees/', object).then(response => response.json())
    .then((data) =>{
      console.log(data)
      setData1({
        data2:data
      })
    })
  }
  //create
  const addData=(e)=>{
    e.preventDefault()
    console.log('ok')
  //   console.log(userData.name)
  // console.log(userData.email)
  // console.log(userData.dob)
  // console.log(userData.position)
  // console.log(userData.technologies_known)
  // console.log(userData.technologie_type)
  var dataObj = {

    name: userData.name,
    email: userData.email,
    dob: userData.dob,
    position:userData.position,
    technologies_known: userData.technologies_known,
    technologie_type: userData.technologie_type
}

var cobj = {
    method: 'POST',
    headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`

    },
    body: JSON.stringify(dataObj)

}
console.log("submitted")
fetch('http://192.168.1.9:8020/api/employees/', cobj

).then(response => response.json())
    .then((data) => {
        console.log("inside",data)
      //  setUserData(data)
        const dataArr = [];
        dataArr.push(data)

        console.log(dataArr)
        

 
    } ).catch((err)=>{
      console.log(err)
    })
}
 
//edit
const edit=(currentValue)=>{
  setShow(true)
  // console.log("edit")
  // console.log(currentValue.name)
  console.log(currentValue._id)
  // console.log(currentValue)
 //let id=currentValue._id
 let name1=currentValue.name;
 let email1=currentValue.email;
 let dob1=currentValue.dob;
 let position1=currentValue.position;
 let technologies_known1=currentValue.technologies_known
 let technologie_type1=currentValue.technologie_type;
 setID1(currentValue._id)
 setUserData({
  name:name1,
  email:email1,
   dob:dob1,
   position:position1,
   technologies_known:technologies_known1,
   technologie_type:technologie_type1
   
 }
//,console.log("=========================================id",id1)
)




  
}
//console.log("=======================================id2",id1)
let handalEdit=(e)=>{
  e.preventDefault()
  //var id=4
  console.log("handle edit",id1)
  var dataObj2 = {

    name: userData.name,
    email: userData.email,
    dob: userData.dob,
    position:userData.position,
    technologies_known:userData.technologies_known,
    technologie_type:userData.technologie_type
  }
  fetch(`http://192.168.1.9:8020/api/employees/${id1}`,{
  

    method: "PATCH",
   headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`

   },
   body: JSON.stringify(dataObj2)
   }).then(response => response.json()).then((data)=>{
     console.log(data)
     
    
   })

}

//delete
const delete_Data=(currentValue)=>{
 console.log("delete")
 console.log(currentValue._id)
 let id=currentValue._id
 fetch(`http://192.168.1.9:8020/api/employees/${id}`,
 {
  method:"DELETE",
  headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

  },
 }
 )
.then(response => response.json()).then(()=>window.location.reload())       // ()=>location.reload()
} 



  //return
  return (
   
    <div>
     
      <Form>
      <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" name='name' onChange={changeData} value={userData.name} placeholder="Enter your name" />
        </Form.Group>
      <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' onChange={changeData} value={userData.email} placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDob">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="text" onChange={changeData} name='dob' value={userData.dob} placeholder="enter your DOB" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control type="text" onChange={changeData} name="position" value={userData.position} placeholder="enter your Position" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTechnologies">
          <Form.Label>technologies_known</Form.Label>
          <Form.Control type="text" onChange={changeData} name='technologies_known' value={userData.technologies_known} placeholder="enter technologies " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTechnologiesType">
          <Form.Label>technologie_type</Form.Label>
          <Form.Control type="text" onChange={changeData} name='technologie_type' value={userData.technologie_type} placeholder="enter technologie type" />
        </Form.Group>
      { !show? <Button variant="primary" onClick={addData} type="submit">
          Submit
        </Button>:
         <Button variant="primary" onClick={(e)=>{handalEdit(e)}} type="submit">
         update
       </Button>
}

      
      </Form>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th> Name</th>
          <th>Email</th>
          <th>position</th>
          <th>technologies_known</th>
          <th>technologie_type</th>
        </tr>
      </thead>
      <tbody>
     
                {
                  data1.data2.map(function(currentValue, index, arr){
                    // console.log("in",arr);
                    // console.log(arr[index].name);
                    return(
                              <tr key={index}>
                            <td >{arr[index]._id}</td>
                             <td>{arr[index].name}</td>
                            <td>{arr[index].email}</td>
                             <td>{arr[index].position}</td>
                             <td>{arr[index].technologies_known}</td>
                             <td>{arr[index].technologie_type}</td>
                            <td>
                            <Button variant="success" id='edit' onClick={()=>{edit(currentValue,index)}}>Edit</Button>{' '}
                            <Button variant="danger" onClick={()=>{delete_Data(currentValue)}}>Delete</Button>{' '}
                            </td>
                            
                            
                           </tr>

                    )

                  })
                }
      </tbody>
    </Table>
   

    </div>
  )
}
