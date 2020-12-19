import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import ScrollView from '../ScrollView/ScrollView';
import Toggle from '../Toggle/Toggle';

function Step22() {
    const { state } = useData();
    const { caseConfirmation } = state;

    return (
            <div className="case__content">
                <ScrollView />
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