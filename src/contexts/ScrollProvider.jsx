import React, { useContext, useState, createContext, useEffect } from 'react';

// Custom Scroll Hook
const ScrollContext = createContext()

export function useScroll() {
    return useContext(ScrollContext)
}

// Handles Scroll Changes
export function ScrollProvider({ children }) {
    const [ position, setPosition ] = useState(0);

    function listenScrollEvent() {
        setPosition(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <ScrollContext.Provider value={{ position }}>
            {children}
        </ScrollContext.Provider>
    )
}