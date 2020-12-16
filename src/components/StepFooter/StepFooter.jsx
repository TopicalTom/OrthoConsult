import React from 'react';
import { useStep } from "../../contexts/StepProvider";

// Components
import ProgressBar from '../ProgressBar/ProgressBar';

function StepFooter() {
    const { currentStep, next } = useStep();

    return (
        <div className="case__nav">
            <div></div>
            <ProgressBar />
            {currentStep < 22
                ?   <button 
                        className="case__button case__button--next" 
                        type="button" 
                        onClick={next}>
                        Continue
                    </button> 
                :   <button 
                        className="case__button case__button--submit" 
                        type="submit">
                        Submit case
                    </button> 
            }
        </div>
    );
}
export default StepFooter;