import React from 'react';
import { useAuth } from "../../contexts/AuthProvider";
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";
import "./Contact.scss";

function Contact() {
    const { currentUser } = useAuth();

    return (
        <Element className="contact" name="contact">
            <div className="contact__section">
                <p 
                    className="contact__concept">
                    Become a client
                </p>
                <h2 
                    className="contact__header contact__section--details">
                    Ready to start?
                </h2>
                <p
                    className="contact__details">
                    We have a proven track record of taking orthodontic challenges and turning them into success stories. Sign up and see how we can make a difference.
                </p>
                <Link 
                    className="contact__link contact__link--primary"
                    to="/register">
                    Get Started
                    <svg 
                        className="contact__icon"
                        viewBox="0 0 24 24">
                        <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                    </svg>
                </Link>
            </div>
        </Element>
    );
};

export default Contact;