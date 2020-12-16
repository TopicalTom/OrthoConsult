import React, { useState, useEffect } from 'react';
import { useData } from "../../contexts/DataProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Cards from '../Cards/Cards';

function Step4() {
    const { state } = useData();
    const { right } = state.model;
    const options = [
        {
            name: "rightClassI",
            label: "Class I",
            value: "Class I"
        },
        {
            name: "rightHalfTooth",
            label: "Class II: Half Tooth",
            value: "Class II: Half Tooth"
        },
        {
            name: "rightFullTooth",
            label: "Class II: Full Tooth",
            value: "Class II: Full Tooth"
        },
        {
            name: "rightClassIII",
            label: "Class III",
            value: "Class III"
        },
    ]

    return (
        <div className="case__step">
            <div className="case__container">
                <Cards
                    name="modelRight"
                    callback="modelRight"
                    data={right}
                    options={options}
                />
            </div>
        </div>
    );
}
export default Step4;

/*
import React, { useState, useEffect } from 'react';
import { useData } from "../../contexts/DataProvider";
import { useStep } from "../../contexts/StepProvider";
import "../CaseForm/CaseForm.scss";

// Components
import Card from '../Card/Card';

function Step4() {
    const { state } = useData();
    const { right } = state.model;
    const { currentStep } = useStep();
    const [display, setDisplay] = useState("current");
    const options = [
        {
            name: "rightClassI",
            label: "Class I",
            value: "Class I"
        },
        {
            name: "rightHalfTooth",
            label: "Class II: Half Tooth",
            value: "Class II: Half Tooth"
        },
        {
            name: "rightFullTooth",
            label: "Class II: Full Tooth",
            value: "Class II: Full Tooth"
        },
        {
            name: "rightClassIII",
            label: "Class III",
            value: "Class III"
        },
    ]

    useEffect(() => {
        (currentStep === 4
            ?   setDisplay("current")
            :   setDisplay("hidden")
        )
    }, [currentStep]);

    return (
        <div className={`case__step case__step--${display}`}>
            <h1 
                className="case__header">
                Model Right Classification
            </h1>
            <p 
                className="case__details">
                <strong>Select</strong> the appicable:
            </p>
            <div className="case__container case__container--quad">
                
                    <Card 
                        type="checkbox"
                        id="rightClassI"
                        name="rightClassI"
                        label="Class I"
                        details=""
                        callback="modelRight"
                        value="Class I"
                    />
          
                
                        <Card 
                        type="checkbox"
                        id="rightClassI"
                        name="rightClassI"
                        label="Class II"
                        details="Half Tooth"
                        callback="modelRight"
                        value="Class II"
                        />
                        <Card 
                        type="checkbox"
                        id="rightClassI"
                        name="rightClassI"
                        label="Class II"
                        details="Full Tooth"
                        callback="modelRight"
                        value="Class II"
                        />


                
                
                    <Card 
                        type="checkbox"
                        id="rightClassI"
                        name="rightClassI"
                        label="Class III"
                        details=""
                        callback="modelRight"
                        value="Class III"
                    />
            </div>
        </div>
    );
}
export default Step4;

*/