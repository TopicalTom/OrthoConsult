import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import Card from '../Card/Card';

function Step11() {
    const { state } = useData();
    const { left, right, none } = state.tmj.locking;
    const options = [
        {
            name: "lockingLeft",
            label: "Left",
            callback: "lockingLeft",
            value: left
        },
        {
            name: "lockingRight",
            label: "Right",
            callback: "lockingRight",
            value: right
        },
        {
            name: "lockingNone",
            label: "None",
            callback: "lockingNone",
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
export default Step11;