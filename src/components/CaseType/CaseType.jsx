import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Cards from '../Cards/Cards';

function CaseType() {
    const { state } = useData();
    const { caseType } = state;
    const options = [
        {
            id: "newCase",
            label: "New Case",
            value: "New Case"
        },
        {
            id: "ongoingCase",
            label: "Ongoing Case",
            value: "Ongoing Case"
        },
    ]

    return (
        <div className="case__content">
            <Cards
                name="caseType"
                callback="CASE_TYPE"
                data={caseType}
                options={options}
                type="duo"
            />
        </div>
    );
}
export default CaseType;