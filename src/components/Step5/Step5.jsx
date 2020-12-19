import React, { useState, useEffect } from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components
import Input from '../Input/Input';

// Images
import dental from "../../assets/vectors/SpaceShortage.svg";

function Step5() {
    const { state } = useData();
    const { overbite, overjet } = state.model;

    return (
            <div className="case__content case__content--default">
                <div className="case__column">
                   <img 
                        className="case__diagram"
                        alt="Space Shortage Diagram"
                        src={dental}
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
    );
}
export default Step5;

/*

import React, {useState, useEffect} from 'react';
import { useCaseData, useCaseStep } from "../../contexts/CaseProvider";
import "../CaseForm/CaseForm.scss";

function Step5() {
    const { dispatch, state } = useCaseData();
    const { currentStep } = useCaseStep();
    const [display, setDisplay] = useState("current");

    useEffect(() => {
        (currentStep === 5
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 className="case__header">Tempromandibular Joint</h1>
            <p className="case__details">This information is required to generate a computerized cephalometirc analysis and understand the needs of the patient:</p>
            <div className="case__container case__container--triple">
                <div className="case__section">
                    <div className="case__block">
                        <label className="case__label case__label--group" for="race">Clicking</label>
                        <ul className="case__selections">
                            <li className="case__option">
                                <input className="case__input case__input--checkbox" type="checkbox" id="male" name="new" value="male"/>
                                <label for="male">Left</label>
                            </li>
                            <li className="case__option">
                                <input className="case__input case__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Right</label>
                            </li>
                        </ul>
                    </div>
                    <div className="case__block">
                        <label className="case__label case__label--group" for="race">Popping</label>
                        <ul className="case__selections">
                            <li className="case__option">
                                <input className="case__input case__input--checkbox" type="checkbox" id="male" name="new" value="male"/>
                                <label for="male">Left</label>
                            </li>
                            <li className="case__option">
                                <input className="form__input form__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Right</label>
                            </li>
                        </ul>
                    </div>
                    <div className="case__block">
                        <label className="case__label case__label--group" for="race">Locking</label>
                        <ul className="case__selections">
                            <li className="case__option">
                                <input className="case__input case__input--checkbox" type="checkbox" id="male" name="new" value="male"/>
                                <label for="male">Left</label>
                            </li>
                            <li className="case__option">
                                <input className="case__input case__input--checkbox" type="checkbox" id="female" name="ongoing" value="female"/>
                                <label for="female">Right</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Step5;

*/