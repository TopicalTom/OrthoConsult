import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Rating from '../Rating/Rating';

function Step2() {
    const { state } = useData();
    const { motivation, hygiene, finances } = state.patientInfo;
    const options = [
        {
            name: "patientMotivation",
            label: "Level of Motivation",
            callback: "patientMotivation",
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
            callback: "patientHygiene",
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
            callback: "patientFinances",
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
        <div className="case__step">
            <div className="case__container">
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
        </div>
    );
}
export default Step2;

/*

import React, { useState, useEffect } from 'react';
import { useCaseData, useCaseStep } from "../../contexts/CaseProvider";
import "../CaseForm/CaseForm.scss";

// Images
import dental from "../../assets/vectors/SpaceShortage.svg";

function Step2() {
    const { dispatch, state } = useCaseData();
    const { currentStep } = useCaseStep();
    const [display, setDisplay] = useState("current");

    useEffect(() => {
        (currentStep === 2
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 className="case__header">Model Classification</h1>
            <p className="case__details">This information is required to generate a computerized cephalometirc analysis and understand the needs of the patient:</p>
            <div className="case__content case__content--horizontal">
                <div className="case__section">
                    <img 
                        className="case__diagram"
                        alt="Space Shortage Diagram"
                        src={dental}
                   />
                </div>
                <div className="case__section">
                    <label className="case__label case__label--header" for="patientLeft">Patient's Left</label>
                    <select 
                        className="case__input case__input--text"
                        name="patientLeft" 
                        id="patientLeft"
                        onChange={(e) => dispatch ({
                            type: "selectionPatientLeft",
                            payload: e.target.value
                        })}>
                            <option value="Class I">Class I</option>
                            <option value="Class II">Class II</option>
                            <option value="Class III">Class III</option>
                            <option value="1/2 Tooth">1/2 Tooth</option>
                            <option value="Full Tooth">Full Tooth</option>
                    </select>
                    <label className="case__label case__label--header" for="patientRight">Patient's Right</label>
                    <select 
                        className="case__input case__input--text"
                        name="patientRight" 
                        id="patientRight"
                        onChange={(e) => dispatch ({
                            type: "selectionPatientRright",
                            payload: e.target.value
                        })}>
                            <option value="Class I">Class I</option>
                            <option value="Class II">Class II</option>
                            <option value="Class III">Class III</option>
                            <option value="1/2 Tooth">1/2 Tooth</option>
                            <option value="Full Tooth">Full Tooth</option>
                    </select>
                    <div className="case__divider">
                        <Input 
                            label="Overjet"
                            name="overjet"
                            type="number"
                            placeholder=""
                            callback="modelOverjet"
                            value={state.model.patientLeft.overjet}
                        />
                        <Input 
                            label="Overbite"
                            name="overbite"
                            type="number"
                            placeholder=""
                            callback="modelOverbite"
                            value={state.model.patientLeft.overbite}
                        />
                        <div className="case__subsection">
                        <label className="case__label case__label--header" for="overjet">Overjet</label>
                        <input
                            className="case__input case__input--text"
                            type="number"
                            name="overjet"
                            onChange={(e) => dispatch ({
                                type: "modelOverjet",
                                payload: e.target.value
                            })}
                            value={state.patientInfo.age}
                        />
                        </div>
                        <div className="case__subsection">
                        <label className="case__label case__label--header" for="overbite">Overbite</label>
                        <input
                            className="case__input case__input--text"
                            type="text"
                            name="overbite"
                            onChange={(e) => dispatch ({
                                type: "modelOverbite",
                                payload: e.target.value
                            })}
                            value={state.patientInfo.dob}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Step2;

*/


/*

import React, {useState, useEffect, useContext} from 'react';
import { StepContext, DataContext } from '../../hooks/useContext';
import "../Form/Form.scss";

function Step2() {
    const {currentStep} = useContext(StepContext);
    const [display, setDisplay] = useState("hidden");

    useEffect(() => {
        (currentStep === 2
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`form__step form__step--${display}`}>
            <h1 className="form__header">Dental Records</h1>
            <p>Please select all records you will be providing and upload the files with the button below. If you require help, reference our guide here.</p>
            <div className="form__content form__content--horizontal">
                <div className="form__section">
                    <div className="form__block">
                        <label className="form__label form__label--group" for="dob">Casts</label>
                        <ul className="form__selections">
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="male" name="new" value="male"/>
                                <label for="male">MX</label>
                            </li>
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Pre-Treatment</label>
                            </li>
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Current</label>
                            </li>
                        </ul>
                    </div>
                    <div className="form__block">
                        <label className="form__label form__label--group" for="height">Wax Bite</label>
                        <ul className="form__selections">
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Centric</label>
                            </li>
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Construction</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="form__section">
                    <div className="form__block">
                        <label className="form__label form__label--group" for="race">Photos</label>
                        <ul className="form__selections">
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="male" name="new" value="male"/>
                                <label for="male">MX</label>
                            </li>
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Pre-Treatment</label>
                            </li>
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Current</label>
                            </li>
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Pre-Treatment</label>
                            </li>
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Current</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="form__section">
                    <div className="form__block">
                        <label className="form__label form__label--group" for="race">X-rays</label>
                        <ul className="form__selections">
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="male" name="new" value="male"/>
                                <label for="male">MX</label>
                            </li>
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Pre-Treatment</label>
                            </li>
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Current</label>
                            </li>
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Pre-Treatment</label>
                            </li>
                            <li className="form__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Current</label>
                            </li>
                        </ul>
                    </div>
                    <label for="race">Do you require Cephalo tracing?</label>
                </div>
            </div>
        </div>
    );
}
export default Step2;

*/