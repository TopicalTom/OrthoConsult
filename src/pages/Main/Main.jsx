import React from 'react';
import { useAuth } from "../../contexts/AuthProvider";
import { useModal } from "../../contexts/ModalProvider";
import "./Main.scss";

function Main() {
    const { currentUser } = useAuth();
    const { toggleSignUp, toggleCase } = useModal();


    return (
        <main className="main">
            <section className="main__container">
                <div className="main__details">
                    <h1 
                        className="main__heading">
                        Orthodontic case evaluations and consultation.
                    </h1>
                    <p className="main__mission">
                        Providing streamlined and informative case evaluations to provide your clients with the best service
                    </p>
                    <button 
                        className="main__cta"
                        onClick={!currentUser ? toggleSignUp : toggleCase}>
                        Submit a Case
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Main;