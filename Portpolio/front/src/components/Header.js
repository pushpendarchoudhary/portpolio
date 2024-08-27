import React from 'react';
import {Link} from 'react-router-dom';
import "./header.css";
function Header (){
    return (
        <header>
            <nav>
                <ul class="Header"> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;