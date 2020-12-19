import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import Cards from '../Cards/Cards';

function Step14() {
    const { state } = useData();
    const { height } = state.facial;
    const options = [
        {
            id: "facialIdeal",
            label: "Ideal",
            details: "This is info about...",
            value: "Ideal"
        },
        {
            id: "facialLong",
            label: "Long",
            details: "This is info about...",
            value: "Long"
        },
        {
            id: "facialShort",
            label: "Short",
            details: "This is info about...",
            value: "Short"
        }
    ]

    return (
            <div className="case__content">
                <Cards
                    name="facialHeight"
                    callback="facialHeight"
                    data={height}
                    options={options}
                    type="triple"
                />
            </div>
    );
}
export default Step14;