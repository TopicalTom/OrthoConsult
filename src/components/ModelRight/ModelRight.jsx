import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Cards from '../Cards/Cards';

function ModelRight() {
    const { state } = useData();
    const { right } = state.model;
    const options = [
        {
            name: "rightClassI",
            label: "Class I",
            value: "Class I"
        },
        {
            name: "rightHalfTooth",
            label: "Class II: Half Tooth",
            value: "Class II: Half Tooth"
        },
        {
            name: "rightFullTooth",
            label: "Class II: Full Tooth",
            value: "Class II: Full Tooth"
        },
        {
            name: "rightClassIII",
            label: "Class III",
            value: "Class III"
        },
    ]

    return (
        <div className="case__content">
            <Cards
                name="modelRight"
                callback="MODEL_RIGHT"
                data={right}
                options={options}
                type="quad"
            />
         </div>
    );
}
export default ModelRight;