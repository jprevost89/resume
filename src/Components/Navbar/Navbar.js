import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul className="Nav">
                <li><a href='/'>Home</a></li>
                <li><a href='/experience'>Experience</a></li>
                <li><a href='/education'>Education</a></li>
                <li><a href='/contact'>Contact</a></li>
                <p>Jon Prevost</p>
            </ul>
        </div>
    );
}

export default Navbar;
