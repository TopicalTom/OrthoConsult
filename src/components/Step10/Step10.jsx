import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import Card from '../Card/Card';

function Step10() {
    const { state } = useData();
    const { left, right, none } = state.tmj.popping;
    const options = [
        {
            name: "poppingLeft",
            label: "Left",
            callback: "poppingLeft",
            value: left
        },
        {
            name: "poppingRight",
            label: "Right",
            callback: "poppingRight",
            value: right
        },
        {
            name: "poppingNone",
            label: "None",
            callback: "poppingNone",
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
export default Step10;