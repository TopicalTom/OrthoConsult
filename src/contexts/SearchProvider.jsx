import React, { useContext, useState, createContext, useEffect } from 'react';

// Custom Scroll Hook
const SearchContext = createContext()

export function useSearch() {
    return useContext(SearchContext)
}

// Handles Scroll Changes
export function SearchProvider({ children }) {
    const [ searching, setSearching ] = useState(false);
    const [ parameters, setParameters ] = useState("");
    const [ filters, setFilters ] = useState("");

    return (
        <SearchContext.Provider value={{ searching, parameters, filters }}>
            {children}
        </SearchContext.Provider>
    )
}