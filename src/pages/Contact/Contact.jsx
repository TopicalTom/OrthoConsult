import React from 'react';
import { ScrollProvider } from '../../contexts/ScrollProvider';
import "./Contact.scss";

// Components
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";

function Contact() {

    return (
        <ScrollProvider>
            <Header />
            <main className="education">
                <SideNav />
                <section className="education__container">
                    <h1 className="education__header">Education</h1>
                    <p className="education__details">Click any of the links on the left to learn about the best that orthodontics has to offer:</p>
                </section>
            </main>
            <Footer />
        </ScrollProvider>
    );
};

export default Contact;