import React from 'react';
import "../../pages/Dashboard/Dashboard.scss";

// Components
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';

function Contact() {

    return (
        <div className="dashboard__content">
            <section className="dashboard__section">
                <h3 className="dashboard__subtitle">A quick note</h3>
                <p className="dashboard__details">Before sending us a message, make sure to read up on our FAQs as provided:</p>
            </section>
            <section className="dashboard__section">
                <h3 className="dashboard__subtitle">Fill out the following:</h3>
                <form className="dashboard__form">
                    <Input 
                        label="Link case"
                    />
                    <Input 
                        label="Question type"
                    />
                    <TextArea 
                        label="Message"
                    />
                    <button>
                        Submit question
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Contact;