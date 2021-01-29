import React, { useEffect } from 'react';
import "./Evaluation.scss";

// Contexts
import { EvaluationProvider } from "../../contexts/EvaluationProvider";
import { QuestionProvider } from '../../contexts/QuestionProvider';

// Components
import Header from '../../components/EvaluationHeader/EvaluationHeader';
import Form from '../../components/EvaluationForm/EvaluationForm';
import Records from '../../components/EvaluationRecords/EvaluationRecords';

const Evaluation = () => { 
    
    /*
    // Prevents unintended leaving
    useEffect(() => {
        const doubleCheck = window.onbeforeunload = () => true

        return () => doubleCheck();
    }, []);
    */

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