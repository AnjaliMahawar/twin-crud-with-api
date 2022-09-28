import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link, Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    const myStyle2= {
        color: "white",
        bordercolor: "white",
        backgroundColor: "black",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
<Navbar>
<ul>
                
                  
                <Link style={myStyle2} to="/">Home</Link>
            
            
               
                <Link style={myStyle2} to="/login">Login</Link>
            
            
               
                <Link style={myStyle2} to="/register">Register</Link>

                <Link style={myStyle2} to="/crud">Data</Link>

            
                
            
        </ul>
</Navbar>
//return isLogedIn?<Outlet/>:<Navigate to='/'/>
return localStorage.getItem("token")?<Outlet/>:<Navigate to='/'/>
}
