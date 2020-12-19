import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import Card from '../Card/Card';

function Step9() {
    const { state } = useData();
    const { left, right, none } = state.tmj.clicking;
    const options = [
        {
            name: "clickingLeft",
            label: "Left",
            callback: "clickingLeft",
            value: left
        },
        {
            name: "clickingRight",
            label: "Right",
            callback: "clickingRight",
            value: right
        },
        {
            name: "clickingNone",
            label: "None",
            callback: "clickingNone",
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
export default Step9;