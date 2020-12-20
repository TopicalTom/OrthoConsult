import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import ScrollView from '../ScrollView/ScrollView';
import Toggle from '../Toggle/Toggle';

function Review() {
    const { state } = useData();
    const { caseConfirmation } = state;

    return (
        <div className="case__content">
            <ScrollView />
            <Toggle 
                id="caseConfirmation"
                label="Confirm the information provided is correct"
                callback="CASE_CONFIRMATION"
                data={caseConfirmation}
            />
        </div>
    );
}
export default Review;