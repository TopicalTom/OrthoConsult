import React, { useState, useEffect } from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import Cards from '../Cards/Cards';

function Step3() {
    const { state } = useData();
    const { left } = state.model;
    const options = [
        {
            name: "leftClassI",
            label: "Class I",
            value: "Class I"
        },
        {
            name: "leftHalfTooth",
            label: "Class II: Half Tooth",
            value: "Class II: Half Tooth"
        },
        {
            name: "leftFullTooth",
            label: "Class II: Full Tooth",
            value: "Class II: Full Tooth"
        },
        {
            name: "leftClassIII",
            label: "Class III",
            value: "Class III"
        },
    ]

    return (
            <div className="case__content">
                <Cards
                    name="modelLeft"
                    callback="modelLeft"
                    data={left}
                    options={options}
                    type="quad"
                />
            </div>
    );
}
export default Step3;

/*
import React, { useState, useEffect } from 'react';
import { useData } from "../../contexts/DataProvider";
import { useStep } from "../../contexts/StepProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Card from '../Card/Card';

function Step3() {
    const { state } = useData();
    const { classI, classII, classIII, halfTooth, fullTooth } = state.model.left;
    const { currentStep } = useStep();
    const [display, setDisplay] = useState("current");
    const options = [
        {
            name: "leftClassI",
            label: "Class I",
            callback: "leftClassI",
            value: classI
        },
        {
            name: "leftHalfTooth",
            label: "Class II",
            details: "Half Tooth",
            callback: "leftHalfTooth",
            value: halfTooth
        },
        {
            name: "leftFullTooth",
            label: "Class II",
            details: "Full Tooth",
            callback: "leftFullTooth",
            value: fullTooth
        },
        {
            name: "leftClassIII",
            label: "Class III",
            callback: "leftClassIII",
            value: classIII
        },
    ]

    useEffect(() => {
        (currentStep === 3
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 
                className="case__header">
                Model Left Classification
            </h1>
            <p 
                className="case__details">
                <strong>Select</strong> the appicable:
            </p>
            <div className="case__container case__container--quad">
                <Cards
                    name="caseType"
                    callback="caseType"
                    data={caseType}
                    options={options}
                />
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
        </div>
    );
}
export default Step3;

*/

/*
import React, { useState, useEffect } from 'react';
import { useData } from "../../contexts/DataProvider";
import { useStep } from "../../contexts/StepProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';
import Rating from '../Rating/Rating';

// Images
import dental from "../../assets/vectors/SpaceShortage.svg";

function Step3() {
    const { state } = useData();
    const { right, rightClassII, left, leftClassII, overbite, overjet } = state.model;
    const { currentStep } = useStep();
    const [display, setDisplay] = useState("current");
    const options = [
        {
            name: "modelRight",
            label: "Patient Right",
            callback: "modelRight",
            data: right,
            ratings: [
                {
                    option: "Class I"
                },
                {
                    option: "Class II"
                },
                {
                    option: "Class III"
                }
            ]
        },
        {
            name: "rightClassII",
            label: "If Patient Right is Class II:",
            callback: "modelRightClassII",
            data: rightClassII,
            ratings: [
                {
                    option: "1/2 Tooth"
                },
                {
                    option: "Full Tooth"
                }
            ]
        },
        {
            name: "patientLeft",
            label: "Patient Left",
            callback: "modelLeft",
            data: left,
            ratings: [
                {
                    option: "Class I"
                },
                {
                    option: "Class II"
                },
                {
                    option: "Class III"
                }
            ]
        },
        {
            name: "leftClassII",
            label: "If Patient Left is Class II:",
            callback: "modelLeftClassII",
            data: leftClassII,
            ratings: [
                {
                    option: "1/2 Tooth"
                },
                {
                    option: "Full Tooth"
                }
            ]
        },
    ]

    useEffect(() => {
        (currentStep === 3
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 
                className="case__header">
                Model Classification
            </h1>
            <p 
                className="case__details">
                <strong>Input all</strong> of the following details:
            </p>
            <div className="case__container case__container--default">
                <div className="case__column">
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
                <div className="case__column">
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
        </div>
    );
}
export default Step3;

*/

/*
import React, { useState, useEffect } from 'react';
import { useData } from "../../contexts/DataProvider";
import { useStep } from "../../contexts/StepProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';

// Images
import dental from "../../assets/vectors/SpaceShortage.svg";

function Step3() {
    const { dispatch, state } = useData();
    const { overbite, overjet } = state.model;
    const { currentStep } = useStep();
    const [display, setDisplay] = useState("current");

    useEffect(() => {
        (currentStep === 3
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 
                className="case__header">
                Model Classification
            </h1>
            <p 
                className="case__details">
                <strong>Input all</strong> of the following details:
            </p>
            <div className="case__container case__container--default">
                <div className="case__column">
                    <Dropdown 
                        label="Model Left"
                        name="patientLeft"
                        type="checkbox"
                        placeholder="Select all applicable"
                    />
                    <Dropdown 
                        label="If Model Left is Class II:"
                        name="patientRight"
                        type="checkbox"
                        placeholder="Select all applicable"
                    />
                    <Dropdown 
                        label="Model Right"
                        name="patientRight"
                        type="checkbox"
                        placeholder="Select all applicable"
                    />
                    <Dropdown 
                        label="If Model Right is Class II:"
                        name="patientLeft"
                        type="checkbox"
                        placeholder="Select all applicable"
                    />
                </div>
                <div className="case__column">
                    <div className="case__row">
                        <Input 
                            label="Overjet"
                            name="overjet"
                            type="number"
                            criteria="mm"
                            callback="modelOverjet"
                            value={overjet}
                        />
                        <Input 
                            label="Overbite"
                            name="overbite"
                            type="number"
                            criteria="%"
                            callback="modelOverbite"
                            value={overbite}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Step3;

*/

/*

import React, {useState, useEffect} from 'react';
import { useCaseData, useCaseStep } from "../../contexts/CaseProvider";
import "../CaseForm/CaseForm.scss";

// Images
import dental from "../../assets/vectors/SpaceShortage.svg";

function Step3() {
    const { dispatch, state } = useCaseData();
    const { currentStep } = useCaseStep();
    const [display, setDisplay] = useState("current");

    useEffect(() => {
        (currentStep === 3
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 className="case__header">Space Shortage</h1>
            <p className="case__details">Using a dental caliper, measure the width of the upper four central incisors and transpalatal distance from 1st bicuspid to 1st bicuspids (occlusal fissure). Record those measurements below:</p>
            <div className="case__content case__content--horizontal">
                <div className="case__section">
                   <img 
                        className="case__diagram"
                        alt="Space Shortage Diagram"
                        src={dental}
                   />
                </div>
                <div 
                    className="case__section">
                    <div className="case__divider">
                        <div className="case__subsection">
                            <label className="case__label case__label--header" for="age">U/R Central</label>
                            <input
                                className="case__input case__input--text"
                                type="number"
                                name="U/R Central"
                                onChange={(e) => dispatch ({
                                    type: "spaceURCentral",
                                    payload: e.target.value
                                })}
                                value={state.space.measurements.urCentral}
                            />
                        </div>
                        <div className="case__subsection">
                            <label className="case__label case__label--header" for="age">U/L Central</label>
                            <input
                                className="case__input case__input--text"
                                type="number"
                                name="U/L Central"
                                onChange={(e) => dispatch ({
                                    type: "spaceULCentral",
                                    payload: e.target.value
                                })}
                                value={state.space.measurements.ulCentral}
                            />
                        </div>
                    </div>
                    <div className="case__divider">
                        <div className="case__subsection">
                            <label className="case__label case__label--header" for="age">U/R Lateral</label>
                            <input
                                className="case__input case__input--text"
                                type="number"
                                name="U/R Lateral"
                                onChange={(e) => dispatch ({
                                    type: "spaceURLateral",
                                    payload: e.target.value
                                })}
                                value={state.space.measurements.urLateral}
                            />
                        </div>
                        <div className="case__subsection">
                            <label className="case__label case__label--header" for="age">U/L Lateral</label>
                            <input
                                className="case__input case__input--text"
                                type="number"
                                name="U/L Lateral"
                                onChange={(e) => dispatch ({
                                    type: "spaceULLateral",
                                    payload: e.target.value
                                })}
                                value={state.space.measurements.ulLateral}
                            />
                        </div>
                    </div>
                    <label className="case__label case__label--header" for="transpalatial">Transpalatal Measurement</label>
                    <input
                        className="case__input case__input--text"
                        type="number"
                        name="transpalatal"
                        onChange={(e) => dispatch ({
                            type: "spaceTranspalatal",
                            payload: e.target.value
                        })}
                        value={state.space.measurements.transpalatal}
                    />
                </div>
            </div>
        </div>
    );
}
export default Step3;

*/