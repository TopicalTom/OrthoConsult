import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Cards from '../Cards/Cards';

function ShoulderLevel() {
    const { state } = useData();
    const { cranial } = state;
    const { left, right } = cranial.shoulderLevel;
    const options = [
        {
            name: "shoulderLeft",
            callback: "SHOULDER_LEVEL_LEFT",
            data: left,
            category: "Patient Left",
            list: [
                {
                    name: "shoulderLeftHigh",
                    label: "High",
                    value: "High"
                },
                {
                    name: "shoulderLeftLow",
                    label: "Low",
                    value: "Low"
                },
                {
                    name: "shoulderLeftNormal",
                    label: "Normal",
                    value: "Normal"
                }
            ]
        },
        {
            name: "shoulderRight",
            callback: "SHOULDER_LEVEL_RIGHT",
            data: right,
            category: "Patient Right",
            list: [
                {
                    name: "shoulderRightHigh",
                    label: "High",
                    value: "High"
                },
                {
                    name: "shoulderRightLow",
                    label: "Low",
                    value: "Low"
                },
                {
                    name: "shoulderRightNormal",
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
export default ShoulderLevel;

/*
    const shoulderLeft = [
        {
            name: "shoulderLeftHigh",
            label: "High",
            value: "High"
        },
        {
            name: "shoulderLeftLow",
            label: "Low",
            value: "Low"
        },
        {
            name: "shoulderLeftNormal",
            label: "Normal",
            value: "Normal"
        }
    ]
    const shoulderRight = [
        {
            name: "shoulderRightHigh",
            label: "High",
            value: "High"
        },
        {
            name: "shoulderRightLow",
            label: "Low",
            value: "Low"
        },
        {
            name: "shoulderRightNormal",
            label: "Normal",
            value: "Normal"
        }
    ]
                <Cards
                    name="shoulderLeft"
                    callback="SHOULDER_LEFT"
                    data={left}
                    options={shoulderLeft}
                    type="triple"
                    category="Patient Left"
                />
                <Cards
                    name="shoulderRight"
                    callback="SHOULDER_RIGHT"
                    data={right}
                    options={shoulderRight}
                    type="triple"
                    category="Patient Right"
                />
*/