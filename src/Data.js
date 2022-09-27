import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Data() {
    //state
 const[data1,setData1]=useState({
    data:[]
 })
     useEffect(()=>{
        
         console.log("okkk use")
         getPosts()
      
     },[])

    //funxtion
  
        const navigate=useNavigate()
        const navigateToPage=(url)=>{
           console.log("url",url)
           
           navigate(`${url}`)
        }

 const getPosts=()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((data)=>{
      //  console.log(data.data)
     
      setData1({
        data1:data
      })
    }).catch((err)=>{
        console.log(err)
    })
 }
console.log("data1 data",data1.data)


    //return
  return (
   <>
    <h1>hello from data page</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>UserName</th>
          <th>website</th>
        </tr>
      </thead>
      <tbody>
      {
                  data1.data.map(function(currentValue, index, arr){
                  //  console.log("in",arr[index].id);
                  //  console.log(arr[index].name);
                    return (
                        <tr key={index}>
                          <td onClick={() => navigateToPage(arr[index].id)}>{arr[index].id}</td>
                          <td>{arr[index].name}</td>
                          <td>{arr[index].username}</td>
                          <td>{arr[index].website}</td>


                          
                        </tr>
                    )//JSX
                  })
                }
      </tbody>
    </Table>
   
   </>
  )
}
