import React from "react";
import illustration from '../../assets/illustration-stay-productive.png';
import arrow from '../../assets/icon-arrow.svg';
import './whatFylo.css';

const WhatFylo = () => {
    return (
        <div className="whatFylo">
            <div className="whatFylo-content">
                <div className="whatFylo-image">
                    <img src={illustration} alt="illustration"/>
                </div>
                <div className="whatFylo-right">
                    <div className="whatFylo-title">
                        <h2>Stay productive, wherever you are</h2>
                    </div>
                    <div className="whatFylo-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis sollicitudin nibh. Vestibulum quis sollicitudin nibh.</p>
                        <p>Morbi ut velit nec ex dapibus elementum vel euismod nisl. Ut et ornare sem. Quisque id nisl nunc. Praesent et ex ante. Nunc at pretium.</p>
                    </div>
                    <div className="whatFylo-CTA">
                        <a href="#">See how Fylo works 
                            <span>
                                <img src={arrow} alt="illustration"/>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatFylo;