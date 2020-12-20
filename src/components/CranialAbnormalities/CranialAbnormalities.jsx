import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import Input from '../Input/Input';
import Selection from '../Selection/Selection';

function CranialAbnormalities() {
    const { state } = useData();
    const { earLevel, eyeLevel, shoulderLevel, dentalArches, forwardPosture } = state.cranial;
    const posture = [
        {
            name: "Yes",
            label: "Yes",
            value: true
        },
        {
            name: "No",
            label: "No",
            value: false
        }
    ];

    return (
        <div className="case__content case__content--default">
            <div className="case__column">
                <Input 
                    label="Dental Arches"
                    name="dentalArches"
                    type="text"
                    callback="DENTAL_ARCHES"
                    value={dentalArches}
                />
                <Input 
                    label="Ear Level"
                    name="earLevel"
                    type="text"
                    callback="EAR_LEVEL"
                    value={earLevel}
                />
                <Input 
                    label="Eye Level"
                    name="eyeLevel"
                    type="text"
                    callback="EYE_LEVEL"
                    value={eyeLevel}
                />
            </div>
            <div className="case__column">
                <Input 
                    label="Shoulder Level"
                    name="shoulderLevel"
                    type="text"
                    callback="SHOULDER_LEVEL"
                    value={shoulderLevel}
                />
                <Selection 
                    label="Forward Head Posture"
                    name="forwardPosture"
                    type="radio"
                    callback="FORWARD_POSTURE"
                    list={posture}
                    data={forwardPosture}
                />
            </div>
        </div>
    );
}
export default CranialAbnormalities;