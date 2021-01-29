import React from 'react';
import "./Settings.scss";

// Layout
import Page from '../../components/DashboardLayout/DashboardLayout';

// Components
import Section from '../../components/DashboardSection/DashboardSection';

const Settings = () => {
    return (
        <Page className="settings" title="settings">
            <Section className="settings__section settings__section--overview">
                <h3>Overview</h3>
                <p>Before sending us a message, make sure to read up on our FAQs as provided:</p>
            </Section>
            <Section className="settings__section settings__section--option">
                <h3>Overview</h3>
                <p>Before sending us a message, make sure to read up on our FAQs as provided:</p>
            </Section>
        </Page>
    );
};

export default Settings;