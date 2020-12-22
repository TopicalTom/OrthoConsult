import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Card from '../Card/Card';

function Popping() {
    const { state } = useData();
    const { left, right, none } = state.joint.popping;
    const options = [
        {
            name: "poppingLeft",
            label: "Left",
            callback: "POPPING_LEFT",
            value: left
        },
        {
            name: "poppingRight",
            label: "Right",
            callback: "POPPING_RIGHT",
            value: right
        },
        {
            name: "poppingNone",
            label: "None",
            callback: "POPPING_NONE",
            value: none
        }
    ]

    return (
        <div className="case__content case__content--triple">
            {options && options.map((item) => {
                return (
                    <Card 
                        type="checkbox"
                        id={item.name}
                        name={item.name}
                        label={item.label}
                        details={item.details}
                        callback={item.callback}
                        value={item.value}
                    />
                )
            })}
        </div>
    );
}
export default Popping;