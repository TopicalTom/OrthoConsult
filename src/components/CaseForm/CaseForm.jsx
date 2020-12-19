import React from 'react';
import { useData } from "../../contexts/DataProvider";
import { useStep } from "../../contexts/StepProvider";

// Components
import ProgressBar from '../ProgressBar/ProgressBar';

function CaseForm() {
    const { addCase } = useData();
    const { currentStep, previousTitle, previous, next, question } = useStep();

    function submitCase(e) {
        e.preventDefault();
        addCase()
    }

    return (
        <form
            className={`case__form case__form--${currentStep >= 21 ? "alt" : "default"}`}
            onSubmit={submitCase}>
            <div className="case__container">
                <div className="case__header">
                    {currentStep === 0
                        ?   <></>
                        :   <button 
                                className="case__button case__button--previous" 
                                type="button" 
                                onClick={previous}>
                                <svg 
                                    className="case__icon case__icon--previous"
                                    viewBox="0 0 24 24">
                                    <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                                </svg>
                                <p className="case__title case__title--previous">{previousTitle}</p>
                            </button> 
                    }
                    <h1 
                        className="case__title case__title--current">
                        {question.title}
                    </h1>
                    <p 
                        className="case__instructions">
                        {question.instructions}
                    </p>
                </div>
                {question.content}
                <div className="case__footer">
                    <div></div>
                    <ProgressBar />
                    {currentStep < 22
                        ?   <button 
                                className="case__button case__button--next" 
                                type="button"
                                disabled={true} 
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
            </div>
        </form>
    );
}
export default CaseForm;