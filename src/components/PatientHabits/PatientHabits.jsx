import React from 'react';
import "../Case/Case.scss";

// Contexts
import { useData } from "../../contexts/DataProvider";

// Components
import Card from '../Card/Card';

function PatientHabits() {
    const { state } = useData();
    const { mouthBreather, snores, tongueThrusts, thumbSucking, none } = state.habits;
    const options = [
        {
            name: "mouthBreather",
            label: "Mouth Breather",
            details: "Feature",
            callback: "MOUTH_BREATHER",
            value: mouthBreather
        },
        {
            name: "snores",
            label: "Snores",
            details: "Habit",
            callback: "SNORES",
            value: snores,
        },
        {
            name: "tongueThrusts",
            label: "Tongue Thrusts",
            details: "Habit",
            callback: "TONGUE_THRUSTS",
            value: tongueThrusts
        },
        {
            name: "thumbSucking",
            label: "Thumb Sucking",
            details: "Habit",
            callback: "THUMB_SUCKING",
            value: thumbSucking
        },
        {
            name: "habitsNone",
            label: "None",
            callback: "HABITS_NONE",
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
export default PatientHabits;