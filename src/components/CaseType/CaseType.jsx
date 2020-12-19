import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

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