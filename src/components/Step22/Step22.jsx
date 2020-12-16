import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Review from '../Review/Review';
import Toggle from '../Toggle/Toggle';

function Step22() {
    const { state } = useData();
    const { caseConfirmation } = state;

    return (
            <div className="case__container">
                <Review />
                <Toggle 
                    id="caseConfirmation"
                    label="Confirm the information provided is correct"
                    callback="caseConfirmation"
                    data={caseConfirmation}
                />
            </div>
    );
}
export default Step22;