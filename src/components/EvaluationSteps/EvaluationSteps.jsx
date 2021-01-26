import React from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { useQuestion } from '../../contexts/QuestionProvider';
import { useValidation } from '../../contexts/ValidationProvider';
import { useModal } from '../../contexts/ModalProvider';

// Components
import Context from "../../components/EvaluationContext/EvaluationContext";
import Fields from "../../components/EvaluationFields/EvaluationFields";
import Stepper from "../../components/EvaluationStepper/EvaluationStepper";

function EvaluationSteps() {
    const { dataState, recordState } = useEvaluation();
    const { currentQuestion, question, length } = useQuestion();
    const { validationState } = useValidation();

    const steps = [
        {
            step: "Type",
            number: "1",
            range: currentQuestion === 0,
            threshold: currentQuestion >= 0,
            completion: validationState.step0.caseType,
            value: dataState.caseType
        },
        {
            step: "Patient",
            questions: "Questions 2 - 10",
            number: "2",
            range: currentQuestion >= 1 && currentQuestion <= 9,
            threshold: currentQuestion >= 1,
            completion: validationState.step9.patientConcerns,
            value: dataState.patient
        },
        {
            step: "Evaluation",
            questions: "Questions 11 - 32",
            number: "3",
            range: currentQuestion >= 10 && currentQuestion <= (length - 3),
            threshold: currentQuestion >= 10,
            completion: validationState.step31.type && validationState.step31.objective,
            value: "Complete"
        },
        {
            step: "Upload Records",
            number: "4",
            range: currentQuestion === (length - 2),
            threshold: currentQuestion >= (length - 2),
            completion: validationState.step32.records,
            value: `${recordState && recordState.records.length} provided`
        },
        {
            step: "Confirm & Submit",
            number: "5",
            range: currentQuestion === (length - 1),
            threshold: currentQuestion >= (length - 1),
            completion: currentQuestion >= length
        }
    ]

    return (
        <>
            {steps && steps.map(step => {
                return (
                    <section className={`evaluation__step evaluation__step--${`step${step.number}`} evaluation__step--${step.threshold ? "current" : "upcoming"}`}>
                        <Context {...step} />
                        <div className="evaluation__content">
                            <div className={`evaluation__boundary evaluation__boundary--${step.number}`} />
                            {step.questions &&
                                <p className={`evaluation__range evaluation__range--${step.range || step.completion ? "inactive" : "active"}`}>
                                    {step.questions}
                                </p>
                            }
                            <div className={`evaluation__question evaluation__question--${step.range ? "active" : "inactive"}`}>
                                <p 
                                    className="evaluation__instructions">
                                    {question.instructions && question.instructions}
                                </p>
                                <Fields {...question} />
                                <Stepper />
                            </div>
                        </div>
                    </section>
                )
            })}
        </>
    );
}
export default EvaluationSteps;