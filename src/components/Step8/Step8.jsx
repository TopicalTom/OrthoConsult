import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import Card from '../Card/Card';

function Step8() {
    const { state } = useData();
    const { eyeDarkness, nostrilsDeveloped, weakLips, poorSeal, none } = state.features;
    const options = [
        {
            name: "eyeDarkness",
            label: "Eye Darkness",
            details: "Feature",
            callback: "eyeDarkness",
            value: eyeDarkness,
        },
        {
            name: "nostrilsDeveloped",
            label: "Nostrils Well Developed",
            details: "Feature",
            callback: "nostrilsDeveloped",
            value: nostrilsDeveloped
        },
        {
            name: "weakLips",
            label: "Weak Lips",
            details: "Feature",
            callback: "weakLips",
            value: weakLips
        },
        {
            name: "lipSeal",
            label: "Poor Lip Seal",
            details: "Feature",
            callback: "poorSeal",
            value: poorSeal
        },
        {
            name: "featuresNone",
            label: "None",
            callback: "featuresNone",
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
                        />
                    )
                })}
            </div>
    );
}
export default Step8;