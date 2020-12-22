import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Cards from '../Cards/Cards';

function EyeLevel() {
    const { state } = useData();
    const { cranial } = state;
    const { left, right } = cranial.eyeLevel;
    const options = [
        {
            name: "eyeLeft",
            callback: "EYE_LEVEL_LEFT",
            data: left,
            category: "Patient Left",
            list: [
                {
                    name: "eyeLeftHigh",
                    label: "High",
                    value: "High"
                },
                {
                    name: "eyeLeftLow",
                    label: "Low",
                    value: "Low"
                },
                {
                    name: "eyeLeftNormal",
                    label: "Normal",
                    value: "Normal"
                }
            ]
        },
        {
            name: "eyeRight",
            callback: "EYE_LEVEL_RIGHT",
            data: right,
            category: "Patient Right",
            list: [
                {
                    name: "eyeRightHigh",
                    label: "High",
                    value: "High"
                },
                {
                    name: "eyeRightLow",
                    label: "Low",
                    value: "Low"
                },
                {
                    name: "eyeRightNormal",
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
export default EyeLevel;