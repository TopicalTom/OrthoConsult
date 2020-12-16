import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Input from '../Input/Input';
import Selection from '../Selection/Selection';

function Step15() {
    const { state } = useData();
    const { earLevel, eyeLevel, shoulderLevel, dentalArches } = state.cranial;
    const posture = [
        {
            name: "Yes",
            label: "Yes"
        },
        {
            name: "No",
            label: "No"
        }
    ];

    return (
            <div className="case__container case__container--default">
                <div className="case__column">
                    <Input 
                        label="Dental Arches"
                        name="dentalArches"
                        type="text"
                        callback="dentalArches"
                        value={dentalArches}
                    />
                    <Input 
                        label="Ear Level"
                        name="earLevel"
                        type="text"
                        callback="earLevel"
                        value={earLevel}
                    />
                    <Input 
                        label="Eye Level"
                        name="eyeLevel"
                        type="text"
                        callback="eyeLevel"
                        value={eyeLevel}
                    />
                </div>
                <div className="case__column">
                    <Input 
                        label="Shoulder Level"
                        name="shoulderLevel"
                        type="text"
                        callback="shoulderLevel"
                        value={shoulderLevel}
                    />
                    <Selection 
                        label="Forward Head Posture"
                        name="headPosture"
                        type="radio"
                        callback="headPosture"
                        list={posture}
                    />
                </div>
            </div>
    );
}
export default Step15;