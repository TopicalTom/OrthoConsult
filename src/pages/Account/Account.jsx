import React from 'react';
import "./Account.scss";

// Layout
import Page from '../../components/DashboardLayout/DashboardLayout';

// Components
import Section from '../../components/DashboardSection/DashboardSection';

function Account() {
    return (
        <Page className="account" title="account">
            <Section className="account__section account__section--overview">
                <h3>Overview</h3>
                <p>Before sending us a message, make sure to read up on our FAQs as provided:</p>
            </Section>
            <Section className="account__section account__section--option">
                <h3>Overview</h3>
                <p>Before sending us a message, make sure to read up on our FAQs as provided:</p>
            </Section>
        </Page>
    );
};

export default Account;