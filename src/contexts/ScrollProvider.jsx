import React, { useContext, useState, createContext, useEffect } from 'react';

// Custom Scroll Hook
const ScrollContext = createContext()

export function useScroll() {
    return useContext(ScrollContext)
}

// Handles Scroll Changes
export function ScrollProvider({ children }) {
    const [, setScrollPosition ] = useState(0);
    let previousScrollTop = 0;
    const [ currentScroll, setCurrentScroll ] = useState(0);
    const [ previousScroll, setPreviousScroll ] = useState(0);

    function listenScrollEvent() {
        const { scrollTop: currentScrollTop } = document.documentElement || document.body;

        setScrollPosition(previousPosition => {
            previousScrollTop = previousPosition;
            return currentScrollTop;
        });
        setCurrentScroll(currentScrollTop)
        setPreviousScroll(previousScrollTop)
    }

    // Listens for Scroll Events
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <ScrollContext.Provider value={{ currentScroll, previousScroll }}>
            {children}
        </ScrollContext.Provider>
    )
}

/*
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

*/