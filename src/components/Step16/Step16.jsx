import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Cards from '../Cards/Cards';

function Step16() {
    const { state } = useData();
    const { mandibularPlane } = state.cranial;
    const options = [
        {
            name: "mandibularNormal",
            label: "Normal",
            value: "Normal"
        },
        {
            name: "mandibularSteep",
            label: "Steep",
            value: "Steep"
        }
    ]

    return (
            <div className="case__container">
                <Cards
                    name="mandibularPlane"
                    callback="mandibularPlane"
                    data={mandibularPlane}
                    options={options}
                />
            </div>
    );
}
export default Step16;