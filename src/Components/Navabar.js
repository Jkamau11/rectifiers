import React from "react";

import logo from '../Images/safaricom-logo2.webp'

import '../Styles/Navbar.css'

function Navbar(){
    return (
        <div className="App-header">
            <div className="App-child" >
            <img src={logo} alt="logo" />
            <span>Partners Progress Overview</span>
            </div>
            
        </div>
        
    )
}

export default Navbar