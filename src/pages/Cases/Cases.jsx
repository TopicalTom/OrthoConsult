import React from 'react';
import "./Cases.scss";

// Context
import { useDashboard } from '../../contexts/DashboardProvider';

// Components
import CaseList from '../../components/CaseList/CaseList';
import Patient from '../Patient/Patient';
import Page from '../../components/DashboardPage/DashboardPage';
import Section from '../../components/DashboardSection/DashboardSection';

const Cases = () => {
    const { clientCases, currentCase } = useDashboard();
    const hasCases = clientCases && clientCases.length > 0;
    const selectedCase = clientCases.find(item => item.uid === currentCase);

    if (hasCases) {
        return (
            <div className="cases">
                <CaseList />
                <Patient {...selectedCase} />
            </div>
        );
    } else {
        return (
            <Page className="cases" title="cases">
                <Section className="cases__section">
                    No Cases
                </Section>
            </Page>
        );
    };
};

export default Cases;