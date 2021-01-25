import React, { useState, useEffect } from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useQuestion } from '../../contexts/QuestionProvider';
import { useValidation } from "../../contexts/ValidationProvider";

function EvaluationStepper() {
    const { dataState, loading } = useEvaluation();
    const { currentQuestion, previous, next, length } = useQuestion();
    const { validationState } = useValidation();
    const [ valid, setValid ] = useState(null);
    const [ price, setPrice ] = useState("");

    useEffect(() => {
        const validate = validationState[`step${currentQuestion}`]
        const status = Object.keys(validate).every((k) => validate[k])
        setValid(status)
    }, [validationState, currentQuestion]);

    useEffect(() => {
        const { caseType, cephalometric } = dataState;

        if (caseType === "New Case" && cephalometric === true) {
            setPrice("200")
        } else if ((caseType === "Ongoing Case" && cephalometric === true) || caseType === "New Case") {
            setPrice("150")
        } else {
            setPrice("100")
        }
    }, [dataState]);

    return (
        <div className="evaluation__stepper">
            <div className="evaluation__buttons">
                {currentQuestion !== 0 &&
                    <button 
                        className="evaluation__button evaluation__button--previous"
                        type="button" 
                        onClick={previous}>
                        Previous
                    </button>
                }
                {currentQuestion < (length - 1) &&
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
                }
            </div>
            {currentQuestion === (length - 1) &&
                <button 
                    className={`
                        evaluation__button 
                        evaluation__button--submit 
                        evaluation__button--${dataState && dataState.confirmation ? "active" : "inactive"}`}
                    disabled={!dataState.confirmation}
                    type="submit">
                    {loading ? "Loading" : `Submit Case ($${price})`}
                </button>
            }
        </div>
    );
}
export default EvaluationStepper;

/*
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

*/