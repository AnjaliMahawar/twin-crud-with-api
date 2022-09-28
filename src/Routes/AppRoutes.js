import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crud from '../Components/Crud'
import Login from '../Components/Login'
import Register from '../Components/Register'

import PrivateRoute from './PrivateRoute'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='register' element={<Register/>}/>
    <Route path="/" element={<Login />} />
      <Route element={ <PrivateRoute />}  > 
      <Route path='crud' element={<Crud/>}/>
     
      
      </Route>
    
    
    </Routes>

  </BrowserRouter>
  )
}
