import React from 'react';
import "./Evaluation.scss";

// Contexts
import { DataProvider } from "../../contexts/DataProvider";
import { StepProvider } from '../../contexts/StepProvider';
import { ValidationProvider } from '../../contexts/ValidationProvider';

// Icons
import cancel from "../../assets/icons/cancel.svg";

// Components
import Form from '../../components/CaseForm/CaseForm';
import Records from '../../components/CaseRecords/CaseRecords';

function Evaluation() {
    //const { currentUser } = useAuth();
    
    return (
        <main className="case">
            <div
                className="case__close">
                <img 
                    className="case__cancel"
                    src={cancel}
                />
                <p 
                    className="case__escape">
                    Esc
                </p>
            </div>
            <DataProvider> 
                <StepProvider>
                    <ValidationProvider>
                        <Form />
                        <Records />
                    </ValidationProvider>
                </StepProvider>
            </DataProvider>
        </main>
    );
};

export default Evaluation;