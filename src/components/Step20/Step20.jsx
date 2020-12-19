import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import TextArea from '../TextArea/TextArea';
import Selection from '../Selection/Selection';

function Step20() {
    const { state } = useData();
    const { details, type } = state.objective;
    const treatment = [
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
                    callback="doctorObjective"
                    value={details}
                />
                <Selection 
                    label="Treatment Type"
                    name="treatment"
                    type="radio"
                    callback="treatmentType"
                    list={treatment}
                    data={type}
                />
            </div>
    );
}
export default Step20;