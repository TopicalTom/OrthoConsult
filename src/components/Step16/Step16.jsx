import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

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
            <div className="case__content">
                <Cards
                    name="mandibularPlane"
                    callback="mandibularPlane"
                    data={mandibularPlane}
                    options={options}
                    type="duo"
                />
            </div>
    );
}
export default Step16;