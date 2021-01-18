import React from 'react';
import { ScrollProvider } from '../../contexts/ScrollProvider';
import "./About.scss";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function About() {

    return (
        <ScrollProvider>
            <Header />
            <main className="education">
                <section className="education__container">
                    <h1 className="education__header">About</h1>
                    <p className="education__details">Click any of the links on the left to learn about the best that orthodontics has to offer:</p>
                </section>
            </main>
            <Footer />
        </ScrollProvider>
    );
};

export default About;