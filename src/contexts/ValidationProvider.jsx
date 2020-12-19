import React, { useContext, useState, createContext, useReducer } from 'react';
import { useData } from "./DataProvider";

// Custom Step Management Hook
const ValidationContext = createContext();

export function useValidation() {
    return useContext(ValidationContext)
}

// Handles Form Step Changes
export function ValidationProvider({ children }) {
    const initialState = {}; 
    const [check, validate] = useReducer(reducer, initialState);

    // Handles Case Evaluation Form Logic
    function reducer(check, action) {
        switch (action.type) {

            // Case Type Fields
            case "CASE_TYPE":
                return {
                    ...check,
                    caseType: action.payload
                };

            default:
                return check;
        }
    }

    
    return (
        <ValidationContext.Provider value={{ check, validate}}>
            {children}
        </ValidationContext.Provider>
    )
}