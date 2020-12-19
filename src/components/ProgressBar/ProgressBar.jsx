import React, { useState, useEffect } from 'react';
import { useStep } from "../../contexts/StepProvider";
import "./ProgressBar.scss";

const ProgressBar = () => {
    const { currentStep } = useStep();
    const [ progress, setProgress ] = useState(null);

    useEffect(() => {
        const dynamicWidth = Math.round(((currentStep + 1) / 23) * 100);

        setProgress(dynamicWidth);
    }, [currentStep]);

    return (
        <div className={`progress progress--${currentStep < 22 ? "visible" : "hidden"}`}>
            <div className="progress__container">
                <span className="progress__bar" style={{width: `${progress}%`}}/>
            </div>
            <h4 className="progress__label">{progress}% Complete</h4>
        </div>
    );
};

export default ProgressBar;

/*

import React, { useState, useEffect } from 'react';
import { useStep } from "../../contexts/StepProvider";
import "./ProgressBar.scss";

const ProgressBar = () => {
    const { currentStep } = useStep();
    const [ progress, setProgress ] = useState(null);

    useEffect(() => {
        const dynamicWidth = ((currentStep + 1) / 22) * 100;

        setProgress(dynamicWidth);
    }, [currentStep]);

    return (
        <div className="progress">
            <div className="progress__container">
                <span className="progress__bar" style={{width: `${progress}%`}}/>
            </div>
            <h4 className="progress__label">Step {currentStep + 1} of 22</h4>
        </div>
    );
};

export default ProgressBar;

*/