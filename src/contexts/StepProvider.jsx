import React, { useContext, useState, createContext } from 'react';

// State Template
import questions from '../templates/questionaire';

// Custom Step Management Hook
const StepContext = createContext(0);

export function useStep() {
    return useContext(StepContext)
}

// Handles Form Step Changes
export function StepProvider({ children }) {
    const [ currentStep, setCurrentStep ] = useState(0);
    const [ question, setQuestion ] = useState(questions[currentStep]);
    const [ previousTitle, setPreviousTitle ] = useState("");

    function next() {
        let current = currentStep
        // If the current step is length of questions array, then add one on "next" button click
        current = current >= (questions.length - 1) ? questions.length : current + 1
        setCurrentStep(current)
        setQuestion(questions[current])
        setPreviousTitle(questions[current - 1].title)
    }

    function previous() {
        let current = currentStep
        // If the current step is 0 or 1, then add one on "next" button click
        current = current <= 0 ? 1 : current - 1
        setCurrentStep(current)
        setQuestion(questions[current])
        setPreviousTitle(questions[current - 1].title)
    }
    
    return (
        <StepContext.Provider value={{ question, currentStep, previousTitle, previous, next }}>
            {children}
        </StepContext.Provider>
    )
}

/*

import React, { useContext, useState, createContext } from 'react';

// Components
import CaseType from '../components/Step0/Step0';
import PatientInfo from '../components/Step1/Step1';
import PatientQualifier from '../components/Step2/Step2';
import ModelLeft from '../components/Step3/Step3';
import ModelRight from '../components/Step4/Step4';
import Maloclussion from '../components/Step5/Step5';
import Step6 from '../components/Step6/Step6';
import Step7 from '../components/Step7/Step7';
import Step8 from '../components/Step8/Step8';
import Step9 from '../components/Step9/Step9';
import Step10 from '../components/Step10/Step10';
import Step11 from '../components/Step11/Step11';
import Step12 from '../components/Step12/Step12';
import Step13 from '../components/Step13/Step13';
import Step14 from '../components/Step14/Step14';
import Step15 from '../components/Step15/Step15';
import Step16 from '../components/Step16/Step16';
import Step17 from '../components/Step17/Step17';
import Step18 from '../components/Step18/Step18';
import Step19 from '../components/Step19/Step19';
import Step20 from '../components/Step20/Step20';
import Step21 from '../components/Step21/Step21';
import Step22 from '../components/Step22/Step22';

const StepContext = createContext(0);

// Custom Step Management Hook
export function useStep() {
    return useContext(StepContext)
}

// Handles Form Step Changes
export function StepProvider({ children }) {
    const [currentStep, setCurrentStep] = useState(0);

    function next() {
        let current = currentStep
        // If the current step is 21 or 22, then add one on "next" button click
        current = current >= 21? 22 : current + 1
        setCurrentStep(current)
    }

    function previous() {
        let current = currentStep
        // If the current step is 0 or 1, then add one on "next" button click
        current = current <= 0? 1: current - 1
        setCurrentStep(current)
    }

    const questions = [
        {
            title: "Case Type",
            instructions: "Input all of the following details regarding your patient"
        },
        {
            title: "Patient Info",
            instructions: "Input all of the following details regarding your patient"
        },
        {
            title: "Patient Qualities",
            instructions: "Input all of the following details regarding your patient"
        },
        {
            title: "Model Left",
            instructions: "Input all of the following details regarding your patient"
        },
    ]

    const [header, setHeader] = useState(questions[currentStep]);

    function content(currentStep) {
        switch (currentStep) {
            case 0:
                return <CaseType />;
            case 1:
                return <PatientInfo />;
            case 2:
                return <PatientQualifier />;
            case 3:
                return <ModelLeft />;            
            case 4:
                return <ModelRight />;
            case 5:
                return <Maloclussion />;
            case 6:
                return <Step6 />;
            case 7:
                return <Step7 />;            
            case 8:
                return <Step8 />;
            case 9:
                return <Step9 />;
            case 10:
                return <Step10 />;
            case 11:
                return <Step11 />;            
            case 12:
                return <Step12 />;
            case 13:
                return <Step13 />;
            case 14:
                return <Step14 />;
            case 15:
                return <Step15 />;            
            case 16:
                return <Step16 />;
            case 17:
                return <Step17 />;
            case 18:
                return <Step18 />;
            case 19:
                return <Step19 />;            
            case 20:
                return <Step20 />;
            case 21:
                return <Step21 />;            
            case 22:
                return <Step22 />;
            default:
                return <div className="case__step"></div>;
        }
    }
    
    return (
        <StepContext.Provider value={{ currentStep, previous, next, content, header }}>
            {children}
        </StepContext.Provider>
    )
}

*/