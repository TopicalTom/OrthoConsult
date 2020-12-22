import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Cards from '../Cards/Cards';

function DentalArches() {
    const { state } = useData();
    const { cranial } = state;
    const { left, right } = cranial.dentalArches;
    const options = [
        {
            name: "dentalArchesLeft",
            callback: "DENTAL_ARCHES_LEFT",
            data: left,
            category: "Patient Left",
            list: [
                {
                    name: "archesLeftHigh",
                    label: "High",
                    value: "High"
                },
                {
                    name: "archesLeftLow",
                    label: "Low",
                    value: "Low"
                },
                {
                    name: "archesLeftNormal",
                    label: "Normal",
                    value: "Normal"
                }
            ]
        },
        {
            name: "dentalArchesRight",
            callback: "DENTAL_ARCHES_RIGHT",
            data: right,
            category: "Patient Right",
            list: [
                {
                    name: "archesRightHigh",
                    label: "High",
                    value: "High"
                },
                {
                    name: "archesRightLow",
                    label: "Low",
                    value: "Low"
                },
                {
                    name: "archesRightNormal",
                    label: "Normal",
                    value: "Normal"
                }
            ]
        }
    ]

    return (
        <div className="case__content">
            {options && options.map((item) => {
                return (
                    <Cards
                        name={item.name}
                        callback={item.callback}
                        data={item.data}
                        options={item.list}
                        type="triple"
                        category={item.category}
                    />
                )})
            }
        </div>
    );
}
export default DentalArches;