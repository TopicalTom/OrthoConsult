import React from 'react';
import { useAuth } from "../../contexts/AuthProvider";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";
import "./Hero.scss";

function Hero() {
    const { currentUser } = useAuth();

    return (
        <section className="hero">
            <div className="hero__container">
                <h1 
                    className="hero__heading">
                    Orthodontic Case Evaluations
                </h1>
                <p 
                    className="hero__mission">
                    Providing streamlined and informative case evaluations to provide your clients with the best service. Never has orthodontic treatment been better.
                </p>
                <div className="hero__actions">
                    <Link 
                        className="hero__button hero__button--primary" 
                        to={!currentUser 
                            ?   "/register" 
                            :   "/evaluation"
                        }>
                        Get started
                    </Link>
                    <ScrollLink 
                        className="hero__button hero__button--secondary" 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-170}
                        duration={500}
                        to="results">
                        Learn more
                    </ScrollLink>
                </div>
            </div>
        </section>
    );
};

export default Hero;