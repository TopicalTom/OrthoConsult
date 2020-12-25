import React from 'react';
import { useAuth } from "../../contexts/AuthProvider";
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";
import "./Hero.scss";

function Hero() {
    const { currentUser } = useAuth();

    return (
        <Element className="hero" name="hero">
            <h1 
                className="hero__heading">
                Orthodontic Case Evaluations
            </h1>
            <p 
                className="hero__mission">
                Providing streamlined and informative case evaluations to provide your clients with the best service. Never has orthodontic treatment been better.
            </p>
            <div className="hero_actions">
                <Link 
                    className="hero__cta hero__cta--primary" 
                    to={!currentUser 
                        ?   "/register" 
                        :   "/evaluation"
                    }>
                    {!currentUser 
                        ?   "Get started" 
                        :   "Start evaluation"
                    }
                    <svg 
                        className="hero__icon"
                        viewBox="0 0 24 24">
                        <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                    </svg>
                </Link>
                <Link 
                    className="hero__cta hero__cta--secondary" 
                    to={!currentUser 
                        ?   "/register" 
                        :   "/evaluation"
                    }>
                    Why us?
                    <svg 
                        className="hero__icon"
                        viewBox="0 0 24 24">
                        <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                    </svg>
                </Link>
            </div>
        </Element>
    );
};

export default Hero;