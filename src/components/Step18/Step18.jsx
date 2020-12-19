import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import Cards from '../Cards/Cards';

function Step18() {
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
                    callback="maxillaPosition"
                    data={maxillaPosition}
                    options={options}
                    type="triple"
                />
            </div>
    );
}
export default Step18;