import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Cards from '../Cards/Cards';

function HeadPosture() {
    const { state } = useData();
    const { headPosture } = state.cranial;
    const options = [
        {
            id: "forwardPosture",
            label: "Forward",
            value: "Forward"
        },
        {
            id: "normalPosture",
            label: "Normal",
            value: "Normal"
        },
    ]

    return (
        <div className="case__content">
            <Cards
                name="headPosture"
                callback="HEAD_POSTURE"
                data={headPosture}
                options={options}
                type="duo"
            />
        </div>
    );
}
export default HeadPosture;