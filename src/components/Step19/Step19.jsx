import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import TextArea from '../TextArea/TextArea';

function Step19() {
    const { state } = useData();
    const { patient, parent } = state.concerns;

    return (
            <div className="case__content">
                <TextArea 
                    label="Patients' Concerns"
                    name="patientConcerns"
                    type="text"
                    placeholder=""
                    callback="patientConcerns"
                    value={patient}
                />
                <TextArea 
                    label="Parents' Concerns"
                    name="parentConcerns"
                    type="text"
                    placeholder=""
                    callback="parentConcerns"
                    value={parent}
                />
            </div>
    );
}
export default Step19;