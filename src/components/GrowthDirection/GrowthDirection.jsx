import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Cards from '../Cards/Cards';

function GrowthDirection() {
    const { state } = useData();
    const { growthDirection } = state.cranial;
    const options = [
        {
            name: "growthNormal",
            label: "Normal",
            value: "Normal"
        },
        {
            name: "growthDeep",
            label: "Deep",
            value: "Deep"
        },
        {
            name: "growthOpen",
            label: "Open",
            value: "Open"
        }
    ]

    return (
        <div className="case__content">
            <Cards
                name="growthDirection"
                callback="GROWTH_DIRECTION"
                data={growthDirection}
                options={options}
                type="triple"
            />
        </div>
    );
}
export default GrowthDirection;