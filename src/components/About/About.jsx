import React from 'react';
import { useAuth } from "../../contexts/AuthProvider";
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";
import "./About.scss";

function About() {
    const { currentUser } = useAuth();

    return (
        <Element className="about" name="about">
            <section className="about__section about__section--details">
                <h1 
                    className="about__header">
                    About Me
                </h1>
                <p
                    className="about__details">
                    We have a proven track record of taking orthodontic challenges and turning them into success stories:
                </p>
                <Link
                    className="about__link"
                    to={!currentUser 
                        ?   "/register" 
                        :   "/dashboard"
                    }>
                    Get started
                </Link>
            </section>
            <section className="about__section about__section--preview">
                as
            </section>
        </Element>
    );
};

export default About;