import React from "react";
import './subscription.css';

const Subscription = () => {
    return (
        <div className="subscription">
            <div className="subscription-content">
                <div className="subscription-title">
                    <h2>Get early access today</h2>
                </div>
                <div className="subscription-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar efficitur ipsum sed sodales. Maecenas diam sem, accumsan.</p>
                </div>
                <div className="subscription-bottom">
                    <div className="subscription-form">
                        <form>
                            <input type="text" placeholder="email@example.com" id="email" name="email"></input>
                        </form>
                    </div>
                    <div>
                        <a class="" href="/#">
                            <button className="subscription-button">
                                Get Started For Free
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;