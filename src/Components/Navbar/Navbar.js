import React from 'react';
import './Navbar.css';
import work from '../../Pictures/work.png';
import home from '../../Pictures/home.png';
import education from '../../Pictures/education.png';
import contact from '../../Pictures/contact.png';

const Navbar = () => {
    return (
        <div>
            <ul className="Nav">
                <li><a href='/'><img src={home}/>Home</a></li>
                <li><a href='/experience'><img src={work}/>Experience</a></li>
                <li><a href='/education'><img src={education}/>Education</a></li>
                <li><a href='/contact'><img src={contact}/>Contact</a></li>
                <p>Jon Prevost</p>
            </ul>
        </div>
    );
}

export default Navbar;
