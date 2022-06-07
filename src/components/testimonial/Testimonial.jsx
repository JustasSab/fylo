import React from "react";
import './testimonial.css';
import profile1 from '../../assets/profile-1.jpg';
import profile2 from '../../assets/profile-2.jpg';
import profile3 from '../../assets/profile-3.jpg';
import quotes from '../../assets/bg-quotes.png';

const Testimonial = () => {
    return (
        <div className="testimonial">

    
            {/* Card 1 */}
            <div className="testimonial-card">
            <div className="quotes">
                <img src={quotes} alt="quotes"/>
            </div>
                <div className="testimonial-card-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar efficitur ipsum sed sodales. Maecenas diam sem, accumsan. Donec pulvinar efficitur ipsum sed sodales. Maecenas diam sem, accumsan.</p>
                </div>
                <div className="testimonial-card-user">
                    <div className="testimonial-card-user-avatar">
                        <img src={profile1} alt="profile-1"/>
                    </div>
                    <div className="testimonial-card-name">
                        <h4>Satish Patel</h4>
                        <div className="testimonial-card-role">
                            <h5>Founder &amp; CEO, Huddle</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="testimonial-card">
                <div className="testimonial-card-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar efficitur ipsum sed sodales. Maecenas diam sem, accumsan. Donec pulvinar efficitur ipsum sed sodales. Maecenas diam sem, accumsan.</p>
                </div>
                <div className="testimonial-card-user">
                    <div className="testimonial-card-user-avatar">
                        <img src={profile2} alt="profile-2"/>
                    </div>
                    <div className="testimonial-card-name">
                        <h4>Bruce McKenize</h4>
                        <div className="testimonial-card-role">
                            <h5>Founder &amp; CEO, Huddle</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card 3 */}
            <div className="testimonial-card">
                <div className="testimonial-card-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar efficitur ipsum sed sodales. Maecenas diam sem, accumsan. Donec pulvinar efficitur ipsum sed sodales. Maecenas diam sem, accumsan.</p>
                </div>
                <div className="testimonial-card-user">
                    <div className="testimonial-card-user-avatar">
                        <img src={profile3} alt="profile-3"/>
                    </div>
                    <div className="testimonial-card-name">
                        <h4>iva Boyd</h4>
                        <div className="testimonial-card-role">
                            <h5>Founder &amp; CEO, Huddle</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;