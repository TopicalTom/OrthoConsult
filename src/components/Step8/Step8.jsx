import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Card from '../Card/Card';

function Step8() {
    const { state } = useData();
    const { eyeDarkness, nostrilsDeveloped, weakLips, poorSeal, none } = state.airway;
    const airway = [
        {
            name: "eyeDarkness",
            label: "Eye Darkness",
            details: "Feature",
            callback: "airwayEyeDarkness",
            value: eyeDarkness,
        },
        {
            name: "nostrilsDeveloped",
            label: "Nostrils Well Developed",
            details: "Feature",
            callback: "airwayNostrilsDeveloped",
            value: nostrilsDeveloped
        },
        {
            name: "weakLips",
            label: "Weak Lips",
            details: "Feature",
            callback: "airwayWeakLips",
            value: weakLips
        },
        {
            name: "lipSeal",
            label: "Poor Lip Seal",
            details: "Feature",
            callback: "airwayPoorSeal",
            value: poorSeal
        },
        {
            name: "airwayNone",
            label: "None",
            callback: "airwayNone",
            value: none
        },
    ]

    return (
            <div className="case__container case__container--table" >
                {airway && airway.map((item) => {
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