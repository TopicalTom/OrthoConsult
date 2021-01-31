import React from 'react';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Cases/Cases.scss";

// Components
import Case from '../Case/Case';

const CaseNav = ( {filter} ) => {
    const { clientCases } = useDashboard();

    if (filter === "None (default)") {
        return (
            <nav className="cases__nav">
                <ul className="cases__items">
                    {clientCases && clientCases
                        .map(item => {
                            return <Case {...item} />
                        })
                    }
                </ul>
            </nav>
        );
    } else {
        return (
            <nav className="cases__nav">
                <ul className="cases__items">
                    {clientCases && clientCases
                        .filter(item => item.status === filter)
                        .map(item => {
                            return <Case {...item} />
                        })
                    }
                </ul>
            </nav>
        );
    }
};

export default CaseNav;