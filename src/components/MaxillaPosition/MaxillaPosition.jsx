import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Cards from '../Cards/Cards';

function MaxillaPosition() {
    const { state } = useData();
    const { maxillaPosition } = state.cranial;
    const options = [
        {
            name: "maxillaNormal",
            label: "Normal",
            value: "Normal"
        },
        {
            name: "maxillaPosterior",
            label: "Posterior",
            value: "Posterior"
        },
        {
            name: "maxillaAnterior",
            label: "Anterior",
            value: "Anterior"
        }
    ]

    return (
        <div className="case__content">
            <Cards
                name="maxillaPosition"
                callback="MAXILLA_POSITION"
                data={maxillaPosition}
                options={options}
                type="triple"
            />
        </div>
    );
}
export default MaxillaPosition;