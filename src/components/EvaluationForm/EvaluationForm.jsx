import React from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { ValidationProvider } from "../../contexts/ValidationProvider";

// Components
import Steps from "../../components/EvaluationSteps/EvaluationSteps";

function EvaluationForm() {
    const { submitCase } = useEvaluation();

    function onSubmit(e) {
        e.preventDefault();
        submitCase()
    }

    return (
        <form
            className="evaluation__form"
            onSubmit={(e) => onSubmit(e)}>
            <ValidationProvider>
                <Steps />
            </ValidationProvider>
        </form>
    );
}
export default EvaluationForm;

/*
import React, { useState, useEffect } from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useQuestion } from '../../contexts/QuestionProvider';
import { useValidation } from "../../contexts/ValidationProvider";

// Components
import EvaluationFields from "../../components/EvaluationFields/EvaluationFields";

function EvaluationForm() {
    const { submitCase, dataState, recordState } = useEvaluation();
    const { currentQuestion, previous, next, question, length } = useQuestion();
    const { validationState } = useValidation();
    const [ valid, setValid ] = useState(null);

    function onSubmit(e) {
        e.preventDefault();
        submitCase()
    }

    const steps = [
        {
            step: "Type",
            number: "1",
            range: currentQuestion === 0,
            threshold: currentQuestion >= 0,
            completion: currentQuestion >= 1,
            value: dataState.caseType
        },
        {
            step: "Patient",
            questions: "Questions 2 - 9",
            number: "2",
            range: currentQuestion >= 1 && currentQuestion <= 8,
            threshold: currentQuestion >= 1,
            completion: currentQuestion >= 9,
            value: dataState.patient
        },
        {
            step: "Evaluation",
            questions: "Questions 10 - 28",
            number: "3",
            range: currentQuestion >= 9 && currentQuestion <= (length - 3),
            threshold: currentQuestion >= 9,
            completion: currentQuestion >= (length - 2),
            value: "Complete"
        },
        {
            step: "Upload Records",
            number: "4",
            range: currentQuestion === (length - 2),
            threshold: currentQuestion >= (length - 2),
            completion: currentQuestion >= (length - 1),
            value: `${recordState && recordState.records.length} provided`
        },
        {
            step: "Review & Pay",
            number: "5",
            range: currentQuestion === (length - 1),
            threshold: currentQuestion >= (length - 1),
            completion: currentQuestion >= length
        }
    ]


    useEffect(() => {
        const validate = validationState[`step${currentQuestion}`]
        const status = Object.keys(validate).every((k) => validate[k])
        console.log(validate)
        console.log(status)
        setValid(status)
    }, [validationState, currentQuestion]);

    return (
        <form
            className="evaluation__form"
            onSubmit={onSubmit}>
            {steps && steps.map(step => {
                return (
                    <section className={`evaluation__step evaluation__step--${step.threshold ? "current" : "upcoming"}`}>
                        <div className="evaluation__context">
                            {step.completion
                                ?   <>
                                        <svg 
                                            className="evaluation__progress evaluation__progress--completed"
                                            aria-hidden="true"
                                            viewBox="0 0 16 16">
                                            <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z" fill-rule="evenodd"/>
                                        </svg>
                                        <h3 
                                            className={`evaluation__requirement evaluation__requirement--completed`}>
                                            {step.step}: {step.value}
                                        </h3>
                                    </>
                                :   <>
                                        <div 
                                            className={`evaluation__progress evaluation__progress--${step.threshold ? "current" : "upcoming"}`}>
                                            {step.number}
                                        </div>
                                        <h3 
                                            className={`evaluation__requirement evaluation__requirement--${step.threshold ? "current" : "upcoming"}`}>
                                            {step.range
                                                ?   question.title
                                                :   step.step
                                            }
                                        </h3>
                                    </>
                            }
                        </div>
                        <div className="evaluation__content">
                            <div className={`evaluation__boundary evaluation__boundary--${step.number}`} />
                            <p className={`evaluation__range evaluation__range--${step.range || step.completion ? "inactive" : "active"}`}>
                                {step.questions}
                            </p>
                            <div className={`evaluation__question evaluation__question--${step.range ? "active" : "inactive"}`}>
                                <p 
                                    className="evaluation__instructions">
                                    {question.instructions && question.instructions}
                                </p>
                                <div className={`evaluation__fields evaluation__fields--${question.layout}`}>
                                    <EvaluationFields 
                                        type={question.type}
                                        layout={question.layout}
                                        options={question.options}
                                        name={question.name}
                                        callback={question.callback}
                                        check={question.check}
                                        data={question.data}
                                        path={question.path}
                                        group={question.group}
                                    />
                                </div>
                                <div className="evaluation__actions">
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
                                                    className={`evaluation__button evaluation__button--next evaluation__button--${valid ? "active" : "inactive"}`}
                                                    type="button"
                                                    disabled={!valid}
                                                    onClick={next}>
                                                    Next
                                                </button>
                                            </>
                                        :   <button 
                                                className={`evaluation__button evaluation__button--submit evaluation__button--${dataState && dataState.confirmation ? "active" : "inactive"}`}
                                                disabled={dataState && dataState.confirmation}
                                                type="submit">
                                                {`Submit & Pay ($150)`}
                                            </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </form>
    );
}
export default EvaluationForm;

*/

/*
import React from 'react';
import { useData } from "../../contexts/DataProvider";
import { useStep } from "../../contexts/StepProvider";
import { useValidation } from "../../contexts/ValidationProvider";

function EvaluationForm() {
    const { addCase, state } = useData();
    const { currentStep, previous, next, question, length, steps} = useStep();
    const { checkValidation, validation } = useValidation();

    function submitCase(e) {
        e.preventDefault();
        addCase()
    }

    return (
        <form
            className="evaluation__form"
            onSubmit={submitCase}>
            {steps && steps.map(step => {
                return (
                    <section className={`evaluation__step evaluation__step--${step.threshold ? "current" : "upcoming"}`}>
                        <div className="evaluation__context">
                            {step.completion
                                ?   <>
                                        <svg 
                                            className="evaluation__progress evaluation__progress--completed"
                                            aria-hidden="true"
                                            viewBox="0 0 16 16">
                                            <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z" fill-rule="evenodd"/>
                                        </svg>
                                        <h3 
                                            className={`evaluation__requirement evaluation__requirement--completed`}>
                                            {step.step}: {step.value}
                                        </h3>
                                    </>
                                :   <>
                                        <div 
                                            className={`evaluation__progress evaluation__progress--${step.threshold ? "current" : "upcoming"}`}>
                                            {step.number}
                                        </div>
                                        <h3 
                                            className={`evaluation__requirement evaluation__requirement--${step.threshold ? "current" : "upcoming"}`}>
                                            {step.range
                                                ?   question.title
                                                :   step.step
                                            }
                                        </h3>
                                    </>
                            }
                        </div>
                        <div className="evaluation__content">
                            <div className={`evaluation__boundary evaluation__boundary--${step.number}`} />
                            <p className={`evaluation__range evaluation__range--${step.range || step.completion ? "inactive" : "active"}`}>
                                {step.questions}
                            </p>
                            <div className={`evaluation__question evaluation__question--${step.range ? "active" : "inactive"}`}>
                                <p 
                                    className="evaluation__instructions">
                                    {question.instructions}
                                </p>
                                <div className={`evaluation__fields evaluation__fields--${question.layout}`}>
                                    {question.content}
                                </div>
                                <div className="evaluation__actions">
                                    {currentStep === 0
                                        ?   <></>
                                        :   <button 
                                                className="evaluation__button evaluation__button--previous"
                                                type="button" 
                                                onClick={previous}>
                                                Previous
                                            </button>
                                    }
                                    {currentStep < (length - 1)
                                        ?   <>
                                                <button 
                                                    className={`evaluation__button evaluation__button--next evaluation__button--${validation && validation[currentStep] && validation[currentStep].status === true ? "active" : "inactive"}`}
                                                    type="button"
                                                    //disabled={validation[currentStep].status === true
                                                        //?   false
                                                        //:   true
                                                    //}
                                                    onClick={next}>
                                                    Next
                                                </button>
                                                {validation && validation[currentStep] && validation[currentStep].status === true
                                                    ?   <></>
                                                    :   <span>field required</span> 
                                                }
                                            </>
                                        :   <button 
                                                className={`evaluation__button evaluation__button--submit evaluation__button--${state && state.confirmation ? "active" : "inactive"}`}
                                                disabled={state && state.confirmation}
                                                type="submit">
                                                Submit ($150)
                                            </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </form>
    );
}
export default EvaluationForm;

*/