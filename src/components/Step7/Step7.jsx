import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Card from '../Card/Card';

function Step7() {
    const { state } = useData();
    const { mouthBreather, snores, tongueThrusts, thumbSucking, none } = state.airway;
    const airway = [
        {
            name: "mouthBreather",
            label: "Mouth Breather",
            details: "Feature",
            callback: "airwayMouthBreather",
            value: mouthBreather
        },
        {
            name: "snores",
            label: "Snores",
            details: "Habit",
            callback: "airwaySnores",
            value: snores,
        },
        {
            name: "tongueThrusts",
            label: "Tongue Thrusts",
            details: "Habit",
            callback: "airwayTongueThrusts",
            value: tongueThrusts
        },
        {
            name: "thumbSucking",
            label: "Thumb Sucking",
            details: "Habit",
            callback: "airwayThumbSucking",
            value: thumbSucking
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
export default Step7;

/*
import React, {useState, useEffect} from 'react';
import { useData } from "../../contexts/DataProvider";
import { useStep } from "../../contexts/StepProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Card from '../Card/Card';

function Step7() {
    const { state } = useData();
    const { mouthBreather, snores, eyeDarkness, nostrilsDeveloped, weakLips, poorSeal, tongueThrusts, thumbSucking, none } = state.airway;
    const { currentStep } = useStep();
    const [display, setDisplay] = useState("current");
    const airway = [
        {
            name: "mouthBreather",
            label: "Mouth Breather",
            details: "Feature",
            callback: "airwayMouthBreather",
            value: mouthBreather
        },
        {
            name: "snores",
            label: "Snores",
            details: "Habit",
            callback: "airwaySnores",
            value: snores,
        },
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
            name: "tongueThrusts",
            label: "Tongue Thrusts",
            details: "Habit",
            callback: "airwayTongueThrusts",
            value: tongueThrusts
        },
        {
            name: "thumbSucking",
            label: "Thumb Sucking",
            details: "Habit",
            callback: "airwayThumbSucking",
            value: thumbSucking
        },
        {
            name: "airwayNone",
            label: "None",
            callback: "airwayNone",
            value: none
        },
    ]

    useEffect(() => {
        (currentStep === 7
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 
                className="case__header">
                Features & Habits
            </h1>
            <p 
                className="case__details">
                <strong>Select all</strong> applicable features or habits of the patient below:
            </p>
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
        </div>
    );
}
export default Step7;

*/