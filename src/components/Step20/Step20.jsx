import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../CaseForm/CaseForm.scss";

// Components
import TextArea from '../TextArea/TextArea';
import Selection from '../Selection/Selection';

function Step20() {
    const { state } = useData();
    const { details } = state.objective;
    const treatment = [
        {
            name: "male",
            label: "Functional/Fixed"
        },
        {
            name: "female",
            label: "Fixed"
        }
    ];

    return (
            <div className="case__container">
                <TextArea
                    label="Your Objectives"
                    name="objective"
                    type="text"
                    placeholder=""
                    callback="doctorObjective"
                    value={details}
                />
                <Selection 
                    label="Treatment Type"
                    name="treatment"
                    type="radio"
                    callback="treatmentType"
                    list={treatment}
                />
            </div>
    );
}
export default Step20;