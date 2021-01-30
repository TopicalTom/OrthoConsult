import React from 'react';
import "./Payments.scss";

// Layout
import Page from '../../components/DashboardPage/DashboardPage';

// Components
import Section from '../../components/DashboardSection/DashboardSection';
import Tabs from '../../components/DashboardTabs/DashboardTabs';
import Table from '../../components/Table/Table';
import Button from '../../components/Button/Button';

const Payments = () => {

    const tabs = [
        {
            title: "all"
        },
        {
            title: "completed"
        },
        {
            title: "pending"
        },
        {
            title: "expired"
        },
    ]

    return (
        <Page className="payments" title="Payments">
            <Section className="payments__section payments__section--overview">
                <h3>Overview</h3>
                <p>Details regarding your case invoices will be displayed here. All payments are handled by Stripe so your billing details are handled securely.</p>
                <Button 
                    className="payments__button isSecondary" 
                    type="external"
                    to="https://stripe.com/en-ca/about">
                    Learn about Stripe
                </Button>
            </Section>
            <Tabs 
                className="payments__section payments__section--invoices" 
                tabs={tabs}>
            </Tabs>
        </Page>
    );
};

export default Payments;