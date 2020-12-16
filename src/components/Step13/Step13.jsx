import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Cards from '../Cards/Cards';

function Step13() {
    const { state } = useData();
    const { profile } = state.facial;
    const options = [
        {
            id: "facialClassI",
            label: "Class I",
            details: "This is info about...",
            value: "Class I"
        },
        {
            id: "facialClassII",
            label: "Class II",
            details: "This is info about...",
            value: "Class II"
        },
        {
            id: "facialClassIII",
            label: "Class III",
            details: "This is info about...",
            value: "Class III"
        }
    ]

    return (
            <div className="case__container">
                <Cards
                    name="facialProfile"
                    callback="facialProfile"
                    data={profile}
                    options={options}
                />
            </div>
    );
}
export default Step13;