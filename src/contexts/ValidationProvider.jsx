import React, { useContext, useState, createContext } from 'react';

const ValidationContext = createContext();

// Custom Step Management Hook
export function useValidation() {
    return useContext(ValidationContext)
}

// Handles Form Step Changes
export function ValidationProvider({ children }) {

    
    return (
        <ValidationContext.Provider value={{ }}>
            {children}
        </ValidationContext.Provider>
    )
}