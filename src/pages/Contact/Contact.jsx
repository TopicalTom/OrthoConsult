import React from 'react';
import "./Contact.scss";

// Layout
import Page from '../../components/DashboardPage/DashboardPage';

// Components
import Section from '../../components/DashboardSection/DashboardSection';
import Button from '../../components/Button/Button';

const Contact = () => {
    return (
        <Page className="contact" title="contact">
            <Section className="contact__section contact__section--overview">
                <h3>Overview</h3>
                <p>Before sending us a message, make sure to read up on our FAQs as provided:</p>
                <Button 
                    className="contact__button isAction" 
                    type="external"
                    to="https://stripe.com/en-ca/about">
                    Email directly
                </Button>
            </Section>
            <Section className="contact__section contact__section--form">
                <h3>Frequently asked questions (FAQs)</h3>
                <p>Before sending us a message, make sure to read up on our FAQs as provided:</p>
            </Section>
        </Page>
    );
};

export default Contact;