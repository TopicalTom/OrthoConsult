import React from 'react';
import { useEvaluation } from "../../contexts/EvaluationProvider";
import { ValidationProvider } from "../../contexts/ValidationProvider";

// Components
import Steps from "../../components/EvaluationSteps/EvaluationSteps";

const EvaluationForm = () => {
    const { submitCase } = useEvaluation();

    // Sends Case Details then redirects to Checkout
    const handleSubmit = (e) => {
        e.preventDefault();
        submitCase();
    }

    return (
        <form
            className="evaluation__form"
            onSubmit={e => handleSubmit(e)}>
            <ValidationProvider>
                <Steps />
            </ValidationProvider>
        </form>
    );
}
export default EvaluationForm;