import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar-brand" id="brand">
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="navbar-links_container">
                <p><a href="#Feature=">Features</a></p>
                <p><a href="#Team">Team</a></p>
                <p><a href="#SignIn">Sign in</a></p>
            </div>


            <div className="hamburger-icon">
            {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar-mobile-menu_container-links">
                        <p><a href="#Features">Features</a></p>
                        <p><a href="#Team">Team</a></p>
                        <p><a href="#SignIn">Sign in</a></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;