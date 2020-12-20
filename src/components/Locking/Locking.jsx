import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Card from '../Card/Card';

function Locking() {
    const { state } = useData();
    const { left, right, none } = state.tmj.locking;
    const options = [
        {
            name: "lockingLeft",
            label: "Left",
            callback: "LOCKING_LEFT",
            value: left
        },
        {
            name: "lockingRight",
            label: "Right",
            callback: "LOCKING_RIGHT",
            value: right
        },
        {
            name: "lockingNone",
            label: "None",
            callback: "LOCKING_NONE",
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
export default Locking;