import React from 'react';
import { useAuth } from "../../contexts/AuthProvider";
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";
import "./Process.scss";

// Vectors
import iphone from '../../assets/vectors/iPhoneOverlay.svg';
import dashboard from '../../assets/images/dashboard.png';

function Process() {
    const { currentUser } = useAuth();

    return (
        <Element className="process" name="process">
            <div className="process__section">
                <p 
                    className="process__concept">
                    Modern service
                </p>
                <h2 
                    className="process__header process__section--details">
                    Say goodbye to paper and hello to digital
                </h2>
                <p
                    className="process__details">
                    We have a proven track record of taking orthodontic challenges and turning them into success stories. We have a proven track record of taking orthodontic challenges and turning them into success stories:
                </p>
                <Link 
                    className="process__link process__link--primary"
                    to="/register">
                    Learn more
                    <svg 
                        className="process__icon"
                        viewBox="0 0 24 24">
                        <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                    </svg>
                </Link>
            </div>
            <div className="process__section process__section--preview">
                <img 
                    className="process__laptop"
                    src={dashboard}
                />
            </div>
        </Element>
    );
};

export default Process;