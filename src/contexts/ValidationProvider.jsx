import React, { useContext, useReducer, createContext } from 'react';

// Contexts
import { useQuestion } from './QuestionProvider';
import { useEvaluation } from './EvaluationProvider';

// Validation Template
import validation from "../templates/validation";

// Custom Step Management Hook
const ValidationContext = createContext();

export function useValidation() {
    return useContext(ValidationContext)
}

// Handles Form Step Changes
export function ValidationProvider({ children }) {
    const { currentQuestion } = useQuestion();
    const { dataState, recordState } = useEvaluation();

    const initialState = validation;
    const [ validationState, validationDispatch ] = useReducer(validationReducer, initialState);

    // Handles Checking for Question Completion
    function validationReducer(validationState, action) {
        const { name, value } = action.payload;
        
        const valid = {
            ...validationState,
                [`step${currentQuestion}`]: {
                    ...validationState[`step${currentQuestion}`],
                    [name]: true
                }
        };
        const invalid = {
            ...validationState,
            [`step${currentQuestion}`]: {
                ...validationState[`step${currentQuestion}`],
                [name]: false
            }
        };
        
        switch (action.type) {
    
            // Ensures some content is provided
            case "CHECK_TEXT":
                if (value !== "" && value.length !== 0) {
                    return valid;
                } else {
                    return invalid;
                }                     
            
            // Ensures a non-zero or negative number is provided
            case "CHECK_NUMBER":
                if (value !== null && value !== 0 && value > 0) {
                    return valid;
                } else {
                    return invalid;
                }   
            
            // Ensures a non-zero or negative number is provided
            case "CHECK_SELECTION":
                if (value !== "") {
                    return valid;
                } else {
                    return invalid;
                }   
            
            // Ensures selection value is stored
            case "CHECK_FIELD":
                if (value !== "") {
                    return valid;
                } else {
                    return invalid;
                }                  
            
            // Determines if object of values has at least one true value
            case "CHECK_FIELDS":
                if (Object.values(dataState[name]).some((val) => val === true)) {
                    return valid;
                } else {
                    return invalid;
                }  
            
            // Determines if object of values has at least one true value
            case "CHECK_TOGGLE":
                if (value !== false) {
                    return valid;
                } else {
                    return invalid;
                }  
            
            // Determines if object of values has at least one true value
            case "CHECK_DRAWING":
                if (recordState.records.length !== 0) {
                    return valid;
                } else {
                    return invalid;
                }  
                
            // Determines if object of values has at least one true value
            case "CHECK_RECORDS":
                if (recordState.records.length > 1) {
                    return valid;
                } else {
                    return invalid;
                }  

            default:
                return validationState;
        }
    }

    return (
        <ValidationContext.Provider value={{ validationState, validationDispatch }}>
            {children}
        </ValidationContext.Provider>
    )
}

/*
import React, { useContext, useReducer, createContext } from 'react';

// Contexts
import { useQuestion } from './QuestionProvider';
import { useEvaluation } from './EvaluationProvider';

// Reducers
import validationReducer from '../reducers/validationReducer';

// Validation Template
import validation from "../templates/validation";

// Custom Step Management Hook
const ValidationContext = createContext();

export function useValidation() {
    return useContext(ValidationContext)
}

// Handles Form Step Changes
export function ValidationProvider({ children }) {
    const { currentQuestion } = useQuestion();
    const { dataState, recordState } = useEvaluation();
    const values = {currentQuestion, dataState, recordState};

    const initialState = validation;
    const [ validationState, validationDispatch ] = useReducer(
        validationReducer, 
        initialState,
        values
    );

    return (
        <ValidationContext.Provider value={{ validationState, validationDispatch }}>
            {children}
        </ValidationContext.Provider>
    )
}import React, { useContext, useReducer, createContext } from 'react';

// Contexts
import { useQuestion } from './QuestionProvider';
import { useEvaluation } from './EvaluationProvider';

// Reducers
import validationReducer from '../reducers/validationReducer';

// Validation Template
import validation from "../templates/validation";

// Custom Step Management Hook
const ValidationContext = createContext();

export function useValidation() {
    return useContext(ValidationContext)
}

// Handles Form Step Changes
export function ValidationProvider({ children }) {
    const { currentQuestion } = useQuestion();
    const { dataState, recordState } = useEvaluation();
    const values = {currentQuestion, dataState, recordState};

    const initialState = validation;
    const [ validationState, validationDispatch ] = useReducer(
        validationReducer, 
        initialState,
        values
    );

    return (
        <ValidationContext.Provider value={{ validationState, validationDispatch }}>
            {children}
        </ValidationContext.Provider>
    )
}

*/