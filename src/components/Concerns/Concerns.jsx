import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import TextArea from '../TextArea/TextArea';

function Concerns() {
    const { state } = useData();
    const { oversight } = state.patientInfo;
    const { patient, parent } = state.concerns;

    return (
        <div className="case__content">
            <TextArea 
                label="Patient Concerns"
                name="patientConcerns"
                type="text"
                placeholder=""
                callback="PATIENT_CONCERNS"
                value={patient}
            />
            {oversight !== true
                ?   <></>
                :   <TextArea 
                        label="Parent Concerns"
                        name="parentConcerns"
                        type="text"
                        placeholder=""
                        callback="PARENT_CONCERNS"
                        value={parent}
                    />
            }
        </div>
    );
}
export default Concerns;