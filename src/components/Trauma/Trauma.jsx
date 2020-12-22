import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Card from '../Card/Card';

function Trauma() {
    const { state } = useData();
    const { trauma, headaches, none } = state.joint.issues;
    const options = [
        {
            name: "trauma",
            label: "Trauma",
            details: "",
            callback: "ISSUES_TRAUMA",
            value: trauma, 
            field: true
        },
        {
            name: "headaches",
            label: "Headaches",
            details: "",
            callback: "ISSUES_HEADACHES",
            value: headaches,
        },
        {
            name: "issuesNone",
            label: "None",
            details: "",
            callback: "ISSUES_NONE",
            value: none
        },
    ]

    return (
        <div className="case__content case__content--table" >
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
                        field={item.field}
                    />
                )
            })}
        </div>
    );
}
export default Trauma;