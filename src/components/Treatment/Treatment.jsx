import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import TextArea from '../TextArea/TextArea';
import Selection from '../Selection/Selection';

function Treatment() {
    const { state } = useData();
    const { details, type } = state.objective;
    const list = [
        {
            name: "functionalFixed",
            label: "Functional/Fixed",
            value: "Functional / Fixed"
        },
        {
            name: "fixed",
            label: "Fixed",
            value: "Fixed"
        }
    ];

    return (
        <div className="case__content">
            <TextArea
                label="Your Objectives"
                name="objective"
                type="text"
                placeholder=""
                callback="TREATMENT_OBJECTIVE"
                value={details}
            />
            <Selection 
                label="Treatment Type"
                name="treatment"
                type="radio"
                callback="TREATMENT_TYPE"
                list={list}
                data={type}
            />
        </div>
    );
}
export default Treatment;