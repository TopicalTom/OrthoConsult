import React from 'react';
import { useAuth } from "../../contexts/AuthProvider";
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";
import "./About.scss";

// Images
import before from '../../assets/images/before.png';
import person from '../../assets/images/Person.jpg';

function About() {
    const { currentUser } = useAuth();

    return (
        <Element className="about" name="about">
            <div className="about__section">
                <p 
                    className="about__concept">
                    Backed by experience
                </p>
                <h2 
                    className="about__header about__section--details">
                    Tap into over 40 years of experience in the field
                </h2>
                <p
                    className="about__details">
                    I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs. I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs
                </p>
                <p
                    className="about__details">
                    I have over 30 years of working in the orthodontic field and have helped over 1000 doctorrs.
                </p>
                <Link 
                    className="about__link about__link--primary"
                    to="/register">
                    Learn more
                    <svg 
                        className="about__icon"
                        viewBox="0 0 24 24">
                        <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                    </svg>
                </Link>
                <div className="about__preview">
                        <span 
                            className="about__tag">
                            Testimony 2
                        </span>
                        <img 
                            className="about__image"
                            src={person}
                        />
                    </div>
            </div>
            <div className="about__section about__section--preview">
                <div className="about__progress">
                    <div className="about__preview">
                        <span 
                            className="about__tag">
                            Testimony 1
                        </span>
                        <img 
                            className="about__image"
                            src={person}
                        />
                    </div>
                    <div className="about__preview">
                        <span 
                            className="about__tag">
                            Testimony 3
                        </span>
                        <img 
                            className="about__image"
                            src={person}
                        />
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default About;