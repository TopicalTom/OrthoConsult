import React from 'react';
import { useDashboard } from '../../contexts/DashboardProvider';
import { Link } from 'react-router-dom';
import "../../pages/Cases/Cases.scss";

// Components
import Case from '../Case/Case';
import Button from '../Button/Button';

const CaseNav = ( {filter} ) => {
    const { currentCase, clientCases } = useDashboard();

    if (filter === "None") {
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
                <Button 
                    className="cases__clear isAction"
                    type="action"
                    to={`/dashboard/cases?filter=None&case=${currentCase}`}>
                    Clear filter
                </Button>
            </nav>
        );
    }
};

export default CaseNav;

/*
                <Link to={`/dashboard/cases?filter=None&case=${currentCase}`}>
                    Clear filter
                </Link>

*/