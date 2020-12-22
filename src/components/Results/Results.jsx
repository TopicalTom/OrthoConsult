import React from 'react';
import { useAuth } from "../../contexts/AuthProvider";
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";
import "./Results.scss";

function Results() {
    const { currentUser } = useAuth();

    return (
        <Element className="results" name="results">
            <h2 
                className="results__header">
                Visible results
            </h2>
            <p
                className="results__details">
                We have a proven track record of taking orthodontic challenges and turning them into success stories:
            </p>
            <div className="results__progress">
                <div className="results__preview">
                    Before
                </div>
                <div className="results__preview">
                    After
                </div>
            </div>
        </Element>
    );
};

export default Results;