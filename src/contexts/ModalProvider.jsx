import React, { useContext, useState, createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('*');

const ModalContext = createContext()

export function useModal() {
    return useContext(ModalContext)
}

export function ModalProvider({ children }) {
    const [ loginIsOpen, openLogin ] = useState(false);
    const [ signUpIsOpen, openSignUp ] = useState(false);
    const [ caseIsOpen, openCase ] = useState(false);

    function switchToLogin() {
        openSignUp(false)
        openLogin(true)
    }

    function switchToSignUp() {
        openLogin(false)
        openSignUp(true)
    }

    function toggleLogin() {
        {loginIsOpen !== true ? openLogin(true) : openLogin(false)}
    }

    function toggleSignUp() {
        {signUpIsOpen !== true ? openSignUp(true) : openSignUp(false)}
    }

    function toggleCase() {
        {caseIsOpen !== true ? openCase(true) : openCase(false)}
    }

    return (
        <ModalContext.Provider 
            value={{
                loginIsOpen,
                toggleLogin,
                signUpIsOpen,
                toggleSignUp,
                caseIsOpen,
                toggleCase,
                switchToLogin,
                switchToSignUp
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}