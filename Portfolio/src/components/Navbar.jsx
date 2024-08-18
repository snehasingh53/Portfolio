import React from 'react';
import './Navbar.css';

const Navbar=()=>{
    return(
        <div className='navbar'>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About me</li>
                <li>Projects</li>
                <li>Contact</li>
        </ul>
        <button className="nav-connect">
            connect with me 
        </button>

        </div>
    )
}

export default Navbar