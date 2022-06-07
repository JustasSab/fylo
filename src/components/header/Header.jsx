import React from "react";
import illustration from '../../assets/illustration-intro.png';
import './header.css';

const Header = () => {
    return (
        <div className="header" id="header">
            <div className="header-content">
                <div className="header-image">
                    <img src={illustration} alt="illustration" width="600" height="400"/>
                </div>
                <div className="header-title">
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                </div>
                <div className="header-text">
                    <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                </div>
                <a class="header-CTA-button" href="/">
                    <button className="header-CTA">
                        Get Started
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Header;