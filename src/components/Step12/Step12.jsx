import React from 'react';
import "../CaseForm/CaseForm.scss";

function Step12() {

    return (
            <div className="case__container">

            </div>
    );
}
export default Step12;

/*
import React, {useState, useEffect} from 'react';
import { useData } from "../../contexts/DataProvider";
import { useStep } from "../../contexts/StepProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Selection from '../Selection/Selection';

// Images
import dental from "../../assets/vectors/SpaceShortage.svg";

function Step12() {
    const { dispatch, state } = useData();
    const { currentStep } = useStep();
    const [display, setDisplay] = useState("current");
    const mandibularPlane = [
        {
            name: "manPlaneNormal",
            label: "Normal"
        },
        {
            name: "manPlaneSteep",
            label: "Steep"
        }
    ];
    const growthDirection = [
        {
            name: "growthNormal",
            label: "Normal"
        },
        {
            name: "growthDeep",
            label: "Deep"
        },
        {
            name: "growthOpen",
            label: "Open"
        },
    ];
    const maxillaPosition = [
        {
            name: "maxillaNormal",
            label: "Normal"
        },
        {
            name: "maxillaPosterior",
            label: "Posterior"
        },
        {
            name: "maxillaAnterior",
            label: "Anterior"
        }
    ];

    useEffect(() => {
        (currentStep === 12
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 
                className="case__header">
                Cepholmetric Examination
            </h1>
            <p 
                className="case__details">
                Indicate the following:
            </p>
            <div className="case__container case__container--triple">
                    <Selection 
                        label="Mandibular Plane Angle"
                        name="mandibularPlane"
                        type="radio"
                        callback="mandibularPlane"
                        list={mandibularPlane}
                    />
                    <Selection 
                        label="Growth Direction"
                        name="growthDirection"
                        type="radio"
                        callback="growthDirection"
                        list={growthDirection}
                    />
                    <Selection 
                        label="Maxilla Position"
                        name="maxillaPosition"
                        type="radio"
                        callback="maxillaPosition"
                        list={maxillaPosition}
                    />
            </div>
        </div>
    );
}
export default Step12;

*/