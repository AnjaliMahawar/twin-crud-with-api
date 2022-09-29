import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const myStyle = {
        color: "white",
        backgroundColor: "white",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
      const myStyle2= {
        color: "white",
        bordercolor: "white",
        backgroundColor: "black",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
  return (
   <div style={myStyle}>
      <ul>
                
                  
                    <Link style={myStyle2} to="/">Home</Link>
                
                
                   
                    <Link style={myStyle2} to="/login">Login</Link>
                
                
                   
                    <Link style={myStyle2} to="/register">Register</Link>

                    <Link style={myStyle2} to="/crud">Data</Link>

                
                    
                
            </ul>
   </div>
  )
}
