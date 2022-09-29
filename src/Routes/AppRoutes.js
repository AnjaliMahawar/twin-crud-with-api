import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Crud from '../Components/Crud'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Register from '../Components/Register'

import PrivateRoute from './PrivateRoute'



export default function AppRoutes() {
  //state
  const myStyle2= {
    color: "white",
    bordercolor: "white",
    backgroundColor: "black",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };




//return

  return (
    <BrowserRouter>
    <Routes>
    <Route path='register' element={<Register/>}/>
    <Route path="/" element={<Login />} />
      <Route element={ <PrivateRoute />}  > 
       
      <Route path='crud' element={<Crud/>}/>
     <Route path='home' element={<Home/>}/>
      
      </Route>
    
    
    </Routes>

  </BrowserRouter>
  )
}
