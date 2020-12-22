import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Cards from '../Cards/Cards';

function EarLevel() {
    const { state } = useData();
    const { cranial } = state;
    const { left, right } = cranial.earLevel;
    const options = [
        {
            name: "earLeft",
            callback: "EAR_LEVEL_LEFT",
            data: left,
            category: "Patient Left",
            list: [
                {
                    name: "earLeftHigh",
                    label: "High",
                    value: "High"
                },
                {
                    name: "earLeftLow",
                    label: "Low",
                    value: "Low"
                },
                {
                    name: "earLeftNormal",
                    label: "Normal",
                    value: "Normal"
                }
            ]
        },
        {
            name: "earRight",
            callback: "EAR_LEVEL_RIGHT",
            data: right,
            category: "Patient Right",
            list: [
                {
                    name: "earRightHigh",
                    label: "High",
                    value: "High"
                },
                {
                    name: "earRightLow",
                    label: "Low",
                    value: "Low"
                },
                {
                    name: "earRightNormal",
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
export default EarLevel;

/*
        <div className="case__content case__content--default">
            <div className="case__column">
                <p>Patient Left</p>
                <Cards
                    name="earLeft"
                    callback="EAR_LEFT"
                    data={left}
                    options={earLeft}
                />
            </div>
            <div className="case__column">
                <p>Patient Right</p>
                <Cards
                    name="earRight"
                    callback="EAR_RIGHT"
                    data={right}
                    options={earRight}
                />
            </div>
        </div>

    const earLeft = [
        {
            name: "earLeftHigh",
            label: "High",
            value: "High"
        },
        {
            name: "earLeftLow",
            label: "Low",
            value: "Low"
        },
        {
            name: "earLeftNormal",
            label: "Normal",
            value: "Normal"
        }
    ]
    const earRight = [
        {
            name: "earRightHigh",
            label: "High",
            value: "High"
        },
        {
            name: "earRightLow",
            label: "Low",
            value: "Low"
        },
        {
            name: "earRightNormal",
            label: "Normal",
            value: "Normal"
        }
    ]
*/