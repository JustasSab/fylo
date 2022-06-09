import React from "react";
import logo from '../../logo.svg';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-brand" id="brand">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="">
                    <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </div>

                <div className="footer-list-container">
                <div className="footer-list">
                    <ul className="">
                        <li className="mb-2"><a href="#">+1-543-123-4567</a></li>
                        <li className="mb-2"><a href="#">example@gmail.com</a></li>
                    </ul>
                </div>

                <div className="footer-list">
                    <ul className="">
                        <li className="mb-2"><a href="#">About Us</a></li>
                        <li className="mb-2"><a href="#">Jobs</a></li>
                        <li className="mb-2"><a href="#">Press</a></li>
                        <li className="mb-2"><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div class="footer-list">
                    <ul className="">
                        <li className="mb-2"><a href="#">Contact Us</a></li>
                        <li className="mb-2"><a href="#">Terms</a></li>
                        <li className="mb-2"><a href="#">Privacy</a></li>
                    </ul>
                </div>

                <div className="">
                <ul className="">
                    <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-instagram"></i></a></li>
                </ul>
                </div>
                </div>



                
            </div>
        </div>
    );
};

export default Footer;