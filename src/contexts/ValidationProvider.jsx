import React, { useContext, useState, createContext, useEffect } from 'react';
import { useData } from "./DataProvider";
import { useStep } from "./StepProvider";

// Custom Step Management Hook
const ValidationContext = createContext();

export function useValidation() {
    return useContext(ValidationContext)
}

// Handles Form Step Changes
export function ValidationProvider({ children }) {
    const { state } = useData();
    const { currentStep } = useStep();
    const options = [
        {
            status: false
        }
    ]
    const [ validation, setValidation] = useState(options)

    function checkValidation() {
        switch (currentStep) {
    
            // Case Type Fields
            case 0:
                return {
                    options: [
                        ...options,
                        options[0].status = state.caseType.length === 0 ? false : true
                    ]
                };
            default:
                return options;
        }
    }

    useEffect(() => {
        setValidation(options)
    }, [options])

    return (
        <ValidationContext.Provider value={{ validation, checkValidation }}>
            {children}
        </ValidationContext.Provider>
    )
}

/*
                state.caseType.length !== 0 
                    ?   validate[0].status = true
                    :   validate[0].status = false

*/