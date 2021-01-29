import React from 'react';
import "./Payments.scss";

// Layout
import Page from '../../components/DashboardPage/DashboardPage';

// Components
import Section from '../../components/DashboardSection/DashboardSection';
import Tabs from '../../components/DashboardTabs/DashboardTabs';
import Table from '../../components/Table/Table';

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
                <p>Coninue your education with our hosted education resources. Complete courses and gain credit.</p>
            </Section>
            <Tabs 
                className="payments__section payments__section--invoices" 
                tabs={tabs}>
            </Tabs>
        </Page>
    );
};

export default Payments;