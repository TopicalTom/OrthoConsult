import React, { useState, useEffect } from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useQuestion } from '../../contexts/QuestionProvider';
import { useValidation } from "../../contexts/ValidationProvider";

function EvaluationStepper() {
    const { dataState } = useEvaluation();
    const { currentQuestion, previous, next, length } = useQuestion();
    const { validationState } = useValidation();
    const [ valid, setValid ] = useState(null);

    useEffect(() => {
        const validate = validationState[`step${currentQuestion}`]
        const status = Object.keys(validate).every((k) => validate[k])
        setValid(status)
    }, [validationState, currentQuestion]);

    return (
        <div className="evaluation__stepper">
            {currentQuestion === 0
                ?   <></>
                :   <button 
                        className="evaluation__button evaluation__button--previous"
                        type="button" 
                        onClick={previous}>
                        Previous
                    </button>
            }
            {currentQuestion < (length - 1)
                ?   <>
                        <button 
                            className={`
                                evaluation__button 
                                evaluation__button--next 
                                evaluation__button--${valid ? "active" : "inactive"}`}
                            type="button"
                            disabled={!valid}
                            onClick={next}>
                            Next
                        </button>
                    </>
                :   <button 
                        className={`
                            evaluation__button 
                            evaluation__button--submit 
                            evaluation__button--${dataState && dataState.confirmation ? "active" : "inactive"}`}
                        disabled={!dataState.confirmation}
                        type="submit">
                        Submit & Pay ($150)
                    </button>
            }
        </div>
    );
}
export default EvaluationStepper;