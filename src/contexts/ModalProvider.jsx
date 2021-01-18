import React, { useContext, useState, createContext, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('*');

const ModalContext = createContext()

export function useModal() {
    return useContext(ModalContext)
}

export function ModalProvider({children}) {
    const history = useHistory();
    const [ modalIsOpen, toggle ] = useState(false);
    function toggleModal() {
        {!modalIsOpen ? toggle(true) : toggle(false)}
    }

    function handleLeave() {
        history.push('/');
        toggleModal()
    }

    const initialState = <></>;
    const [ modalState, modalDispatch ] = useReducer(modalReducer, initialState);

    // Handles Checking for Question Completion
    function modalReducer(modalState, action) {
        
        switch (action.type) {
    
            case "LEAVE_CONFIRMATION":
                return (
                    <div className="modal__content">
                        <h2 className="modal__header">Are you sure you want to leave?</h2>
                        <button 
                            className="modal__close"
                            onClick={() => toggleModal()}>
                            <span>X</span>
                        </button>
                        <div className="modal__details">
                            <p>Icon</p>
                            <p 
                                className="modal__text modal__text--warning">
                                Information provided so far will be permenately deleted and can't be undone.
                            </p>
                        </div>
                        <div className="modal__actions">
                            <button 
                                className="modal__button modal__button--cancel"
                                type="button"
                                onClick={() => toggleModal()}>
                                Cancel
                            </button>
                            <button 
                                className="modal__button modal__button--destructive"
                                type="button"
                                onClick={() => handleLeave()}>
                                Leave
                            </button>
                        </div>
                    </div>
                )            
            
            case "REQUIRED_RECORDS":
                return (
                    <div className="modal__content">
                        <h2 className="modal__header">What is required</h2>
                        <button 
                            className="modal__close"
                            onClick={() => toggleModal()}>
                            <span>X</span>
                        </button>
                        <div className="modal__details">
                            <p>Icon</p>
                            <p 
                                className="modal__text modal__text--warning">
                                Information provided so far will be permenately deleted and can't be undone.
                            </p>
                        </div>
                        <div className="modal__actions">
                            <button 
                                className="modal__button modal__button--cancel"
                                type="button"
                                onClick={() => toggleModal()}>
                                Cancel
                            </button>
                            <button 
                                className="modal__button modal__button--submit"
                                type="button"
                                onClick={() => toggleModal()}>
                                Continue
                            </button>
                        </div>
                    </div>
                )            
            
            case "RECORDS_HELP":
                return (
                    <div className="modal__content">
                        <h2 className="modal__header">Records Walkthrough</h2>
                        <button 
                            className="modal__close"
                            onClick={() => toggleModal()}>
                            <span>X</span>
                        </button>
                        <div className="modal__details">
                            <p>Icon</p>
                            <p 
                                className="modal__text modal__text--warning">
                                Information provided so far will be permenately deleted and can't be undone.
                            </p>
                        </div>
                        <div className="modal__actions">
                            <button 
                                className="modal__button modal__button--cancel"
                                type="button"
                                onClick={() => toggleModal()}>
                                Cancel
                            </button>
                            <button 
                                className="modal__button modal__button--submit"
                                type="button"
                                onClick={() => toggleModal()}>
                                Continue
                            </button>
                        </div>
                    </div>
                )            
            
            case "RECORDS_ADVANCED":
                return (
                    <div className="modal__content">
                        <h2 className="modal__header">New Dental Record</h2>
                        <button 
                            className="modal__close"
                            onClick={() => toggleModal()}>
                            <span>X</span>
                        </button>
                        <div className="modal__details">
                            <p>Icon</p>
                            <p 
                                className="modal__text modal__text--warning">
                                Information provided so far will be permenately deleted and can't be undone.
                            </p>
                        </div>
                        <div className="modal__actions">
                            <button 
                                className="modal__button modal__button--cancel"
                                type="button"
                                onClick={() => toggleModal()}>
                                Cancel
                            </button>
                            <button 
                                className="modal__button modal__button--submit"
                                type="button"
                                onClick={() => toggleModal()}>
                                Upload
                            </button>
                        </div>
                    </div>
                )

                

            default:
                return modalState;
        }
    }

    return (
        <ModalContext.Provider value={{ modalState, modalDispatch, modalIsOpen, toggleModal }}>
            {children}
        </ModalContext.Provider>
    )
}

/*
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

*/