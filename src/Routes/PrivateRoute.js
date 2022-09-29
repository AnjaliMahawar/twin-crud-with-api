import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link, Navigate, Outlet } from 'react-router-dom'
import Header from '../Components/Header';


export default function PrivateRoute() {
  
  var isLogedIn=localStorage.getItem("token")

//return isLogedIn?<Outlet/>:<Navigate to='/'/>
return (
  <>
  <Header/>
  {/*localStorage.getItem("token")?<Outlet/>:<Navigate to='/'/>*/}

  {
    isLogedIn?<Outlet/>:<Navigate to='/'/>
  }
</>
)
}
