import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Card from '../Card/Card';

function Clicking() {
    const { state } = useData();
    const { left, right, none } = state.tmj.clicking;
    const options = [
        {
            name: "clickingLeft",
            label: "Left",
            callback: "CLICKING_LEFT",
            value: left
        },
        {
            name: "clickingRight",
            label: "Right",
            callback: "CLICKING_RIGHT",
            value: right
        },
        {
            name: "clickingNone",
            label: "None",
            callback: "CLICKING_NONE",
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
export default Clicking;