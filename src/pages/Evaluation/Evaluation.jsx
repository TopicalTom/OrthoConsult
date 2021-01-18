import React from 'react';
import "./Evaluation.scss";

// Contexts
import { EvaluationProvider } from "../../contexts/EvaluationProvider";
import { QuestionProvider } from '../../contexts/QuestionProvider';

// Components
import Header from '../../components/EvaluationHeader/EvaluationHeader';
import Form from '../../components/EvaluationForm/EvaluationForm';
import Records from '../../components/EvaluationRecords/EvaluationRecords';

function Evaluation() {    
    return (
        <main className="evaluation">
            <EvaluationProvider> 
                <QuestionProvider>
                    <Header />
                    <Form />
                    <Records />
                </QuestionProvider>
            </EvaluationProvider>
        </main>
    );
};

export default Evaluation;