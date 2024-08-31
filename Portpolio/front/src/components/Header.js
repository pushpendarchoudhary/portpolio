import React from 'react';
import {Link} from 'react-router-dom';
import "./header.css";
const Header =()=>{
    return (
        <header>
            <nav>
                <ul className="Header"> 
                <div><li><Link to="/">Home</Link></li></div>
                <div><li><Link to="/profile">Profile</Link></li></div>
                <div><li><Link to="/experience">Experience</Link></li></div>
                <div><li><Link to="/blog">Blog</Link></li></div>
                <div><li><Link to="/contacts">Contacts</Link></li></div>
                </ul>
            </nav>
        </header>
    );
}

export default Header;