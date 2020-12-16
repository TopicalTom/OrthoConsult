import React, {useState, useEffect, useContext} from 'react';
import { useData } from "../../contexts/DataProvider";
import { useStep } from "../../contexts/StepProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Cards from '../Cards/Cards';

function Step0() {
    const { state } = useData();
    const { caseType } = state;
    const options = [
        {
            id: "newCase",
            label: "New Case",
            value: "New Case"
        },
        {
            id: "ongoingCase",
            label: "Ongoing Case",
            value: "Ongoing Case"
        },
    ]

    return (
        <div className="case__container">
            <Cards
                name="caseType"
                callback="caseType"
                data={caseType}
                options={options}
            />
        </div>
    );
}
export default Step0;

/*
import React, {useState, useEffect, useContext} from 'react';
import { useCaseStep, useCaseData } from "../../contexts/CaseProvider";
import { useAuth } from "../../contexts/AuthProvider";
import "../CaseForm/CaseForm.scss";

function Step0() {
    const { currentStep, setCurrentStep } = useCaseStep();
    const { dispatch, state } = useCaseData();
    const { currentUser } = useCaseStep();
    const [display, setDisplay] = useState("hidden");

    function handleSelection(e) {
        e.preventDefault()

        setCurrentStep(1)
    }

    useEffect(() => {
        (currentStep === 0
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 className="case__header">Case Type</h1>
            <p className="case__details">Select the type of orthodontic case we are looking at:</p>
            <div className="case__container case__container--default">
                <div 
                    className="case__type"
                    onClick={(e) => dispatch ({
                        type: "newCase",
                        payload: e.target.value
                    })}
                    onClickCapture={handleSelection}>
                    <span>New Case</span>
                </div>
                <div 
                    className="case__type"
                    onClick={(e) => dispatch ({
                        type: "ongoingCase",
                        payload: e.target.value
                    })}
                    onClickCapture={handleSelection}>
                    <span>Ongoing Case</span>
                </div>
            </div>
        </div>
    );
}
export default Step0;

*/

/*

<ul className="case__types"
                    onChange={(e) => dispatch ({
                        type: "caseType",
                        payload: e.target.value
                    })}>
                        <li className="case__type">
                            <label for="male">New Case</label>
                            <input 
                                className="case__touchpoint"
                                type="radio" 
                                id="newCase" 
                                name="type"
                                value="New Case"
                                onClick={handleSelection}
                            />
                        </li>
                        <li className="case__type">
                            <label for="female">Ongoing Case</label>
                            <input 
                                className="case__touchpoint"
                                type="radio" 
                                id="ongoingCase" 
                                name="type"
                                value="Ongoing Case"
                                onClick={handleSelection}
                            />
                        </li>
                </ul>                           

*/