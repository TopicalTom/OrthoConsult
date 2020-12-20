import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Cards from '../Cards/Cards';

function MandibularPlane() {
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
                callback="MANDIBULAR_PLANE"
                data={mandibularPlane}
                options={options}
                type="duo"
            />
        </div>
    );
}
export default MandibularPlane;