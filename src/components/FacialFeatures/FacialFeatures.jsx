import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Card from '../Card/Card';

function FacialFeatures() {
    const { state } = useData();
    const { eyeDarkness, nostrilsDeveloped, weakLips, poorSeal, none } = state.features;
    const options = [
        {
            name: "eyeDarkness",
            label: "Eye Darkness",
            details: "Feature",
            callback: "EYE_DARKNESS",
            value: eyeDarkness,
        },
        {
            name: "nostrilsDeveloped",
            label: "Nostrils Well Developed",
            details: "Feature",
            callback: "NOSTRILS_DEVELOPED",
            value: nostrilsDeveloped
        },
        {
            name: "weakLips",
            label: "Weak Lips",
            details: "Feature",
            callback: "WEAK_LIPS",
            value: weakLips
        },
        {
            name: "lipSeal",
            label: "Poor Lip Seal",
            details: "Feature",
            callback: "POOR_SEAL",
            value: poorSeal
        },
        {
            name: "featuresNone",
            label: "None",
            callback: "FEATURES_NONE",
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
export default FacialFeatures;