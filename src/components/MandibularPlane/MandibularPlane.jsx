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
            name: "mandibularSteep",
            label: "Steep",
            value: "Steep"
        },
        {
            name: "mandibularNormal",
            label: "Normal",
            value: "Normal"
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