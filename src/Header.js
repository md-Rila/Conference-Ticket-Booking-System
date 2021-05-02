import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
//import { BrowserRouter as Router } from "react-router-dom";
function Header() {
    return (
             <div className="header">
                <div className="org_title">
                    <Link to="/Home">Confi-Book</Link>
                </div>
                <div className="nav_icons">
                   <span> <Link to="/Registrations">Register</Link></span>
                    <span><Link to="/Login">Login</Link></span>
                </div>
            </div>
    )
}

export default Header
