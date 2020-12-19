import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import Rating from '../Rating/Rating';

function PatientQualifiers() {
    const { state } = useData();
    const { motivation, hygiene, finances } = state.patientInfo;
    const options = [
        {
            name: "patientMotivation",
            label: "Level of Motivation",
            callback: "PATIENT_MOTIVATION",
            data: motivation,
            ratings: [
                {
                    option: "Low"
                },
                {
                    option: "Average"
                },
                {
                    option: "High"
                }
            ]
        },
        {
            name: "patientHygiene",
            label: "Dental Hygiene",
            callback: "PATIENT_HYGIENE",
            data: hygiene,
            ratings: [
                {
                    option: "Poor"
                },
                {
                    option: "Fair"
                },
                {
                    option: "Excellent"
                }
            ]
        },
        {
            name: "patientFinances",
            label: "Finances",
            callback: "PATIENT_FINANCES",
            data: finances,
            ratings: [
                {
                    option: "Limited"
                },
                {
                    option: "Moderate"
                },
                {
                    option: "Excellent"
                }
            ]
        },
    ]

    return (
        <div className="case__content">
            {options && options.map((item) => {
                return (
                    <Rating 
                        name={item.name} 
                        label={item.label} 
                        callback={item.callback}
                        data={item.data}
                        ratings={item.ratings}
                    />
                )
            })}
        </div>
    );
}
export default PatientQualifiers;