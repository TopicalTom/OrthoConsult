import React from 'react';
import { useAuth } from "../../contexts/AuthProvider";
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";
import "./Results.scss";

// Images
import before from '../../assets/images/before.png';
import after from '../../assets/images/after.png';

function Results() {
    const { currentUser } = useAuth();

    return (
        <Element className="results" name="results">
            <div className="results__section">
                <p className="results__concept">Visible results</p>
                <h2 
                    className="results__header">
                    Turn any case into a success story
                </h2>
                <p
                    className="results__details">
                    We have a proven track record of taking orthodontic challenges and turning them into success stories. Sign up and see how we can make a difference.
                </p>
                <Link 
                    className="results__link results__link--primary"
                    to="/register">
                    Learn more
                    <svg 
                        className="results__icon"
                        viewBox="0 0 24 24">
                        <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                    </svg>
                </Link>
            </div>
            <div className="results__section results__section--preview">
                <div className="results__progress">
                    <div className="results__preview">
                        <span 
                            className="results__tag">
                            Before
                        </span>
                        <img 
                            className="results__image"
                            src={before}
                        />
                    </div>
                    <div className="results__preview">
                        <span 
                            className="results__tag">
                            After
                        </span>
                        <img 
                            className="results__image"
                            src={after}
                        />
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Results;