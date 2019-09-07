import React from 'react';
import './style.css';

const NavBar = () => {
    return(<>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="navLink" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="navLink" href="#">Articles</a>
                </li>
                
            </ul>
        </nav>
    </>)
}

export default NavBar;