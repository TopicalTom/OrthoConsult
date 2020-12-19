import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import Cards from '../Cards/Cards';

function Step17() {
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
                    callback="growthDirection"
                    data={growthDirection}
                    options={options}
                    type="triple"
                />
            </div>
    );
}
export default Step17;