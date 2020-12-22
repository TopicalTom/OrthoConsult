import React from 'react';
import { ScrollProvider } from '../../contexts/ScrollProvider';
import "./Main.scss";

// Components
import Header from "../../components/Header/Header";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import Footer from "../../components/Footer/Footer";

// Sections
import Hero from "../../components/Hero/Hero";
import Results from "../../components/Results/Results";
import About from "../../components/About/About";

function Main() {

    return (
        <ScrollProvider>
            <Header />
            <main className="main">
                <Hero />
                <Results />
                <About />
                <div className="main__partition"/>
            </main>
            <Footer />
            <ScrollBar />
        </ScrollProvider>
    );
};

export default Main;

/*
                <section className="main__container">
                        <h1 
                            className="main__heading">
                            Orthodontic Case Evaluations
                        </h1>
                        <p 
                            className="main__mission">
                            Providing streamlined and informative case evaluations to provide your clients with the best service. Never has orthodontic treatment been better.
                        </p>
                        <div className="main_actions">
                            <Link 
                                className="main__cta main__cta--primary" 
                                to={!currentUser ? "/register" : "/evaluation"}>
                                {!currentUser ? "Get started" : "Send a case"}
                                <svg 
                                    className="main__icon"
                                    viewBox="0 0 24 24">
                                    <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                                </svg>
                            </Link>
                            <Link 
                                className="main__cta main__cta--secondary" 
                                to={!currentUser ? "/register" : "/evaluation"}>
                                Learn more
                                <svg 
                                    className="main__icon"
                                    viewBox="0 0 24 24">
                                    <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                                </svg>
                            </Link>
                        </div>
                </section>

*/

/*
import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { useModal } from "../../contexts/ModalProvider";
import "./Main.scss";

// Components
import Header from "../../components/Header/Header";

function Main() {
    const { currentUser } = useAuth();
    const { toggleSignUp, toggleCase } = useModal();

    console.log(currentUser)
    
    return (
        <>
            <Header />
            <main className="main">
                <section className="main__container">
                    <div className="main__details">
                        <h1 
                            className="main__heading">
                            Orthodontic evaluation and consultation.
                        </h1>
                        <p className="main__mission">
                            Providing streamlined and informative case evaluations to provide your clients with the best service
                        </p>
                        <button 
                            className="main__cta"
                            onClick={!currentUser ? toggleSignUp : toggleCase}>
                            Get started
                        </button>
                        <Link to={!currentUser ? "/register" : "/evaluation"} >Test</Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Main;

*/