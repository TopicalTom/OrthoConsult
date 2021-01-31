import React from 'react';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Cases/Cases.scss";

// Components 
import Nav from '../CaseNav/CaseNav';
import Filter from '../CaseFilter/CaseFilter';

const CaseList = () => {
    const { filter } = useDashboard();

    return (
        <aside className="cases__list">
            <header className="cases__header">
                <h3>Cases</h3>
                {filter !== "None (default)"
                    ?   <h4>Filter: {filter}</h4>
                    :   <h4>Sorted by most recent</h4>
                }
                <Filter className="cases__filter" />
            </header>
            <Nav filter={filter}/>
        </aside>
    );
};

export default CaseList;

/*
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Cases/Cases.scss";

const CaseList = ( ) => {
    const { clientCases, retrieveCase } = useDashboard();
    const { caseId } = useParams();
    const [filter, setFilter] = useState("Date");

    useEffect(() => {
        retrieveCase(caseId);
    }, [caseId]);

    return (
        <aside className="cases__list">
            <header className="cases__header">
                <h3>Cases</h3>
                <h4>Filtered by: {filter}</h4>
                <button>
                    X
                </button>
            </header>
            <nav className="cases__nav">
                <ul className="cases__items">
                    {clientCases && clientCases
                        .filter(item => item.status === "In review")
                        .map((item, index) => {
                            const currentlySelected = item.uid === caseId ? "current" : "other";
                            const reverseName = item.patient.split(" ").reverse().join(", ");
                            return (
                                <li className={`cases__item cases__item--${currentlySelected}`} key={index}>
                                    <Link
                                        className="cases__also"
                                        to={`/dashboard/cases/${item.uid}`}>
                                        <p>{reverseName}</p>
                                        <h4>{item.uid}</h4>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    );
};

export default CaseList;

*/

/*
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Dashboard/Dashboard.scss";

const DashboardBar = () => {
    const { currentCase, clientCases, retrieveCase } = useDashboard();
    const { caseId } = useParams();

    console.log(caseId)

    useEffect(() => {
        retrieveCase(caseId);
    }, [caseId])

    return (
        <aside className="cases__nav">
            <header className="cases__header">
                <h3>Cases</h3>
                <h4>Filtered by: Timestamp</h4>
            </header>
            <nav className="cases__container">
            <div className="cases__items cases__items--selected">
                {clientCases && clientCases
                    .filter(item => {
                        return new String(item.uid).valueOf() === new String(currentCase).valueOf()
                    })
                    .map(item => {
                        return (
                            <div className="cases__item cases__item--current">
                                <Link
                                    className="cases__also"
                                    to={`/dashboard/cases/${item.uid}`}>
                                    <p>{item.patient}</p>
                                    <h4>{item.uid}</h4>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="cases__items cases__items">
                <ul className="cases__caselist">
                    {clientCases && clientCases
                        .filter(item => {
                            return new String(item.uid).valueOf() !== new String(currentCase).valueOf()
                        })
                        .map((item, index) => {
                            return (
                                <li className="cases__item cases__item--other" key={index}>
                                    <Link
                                        className="cases__also"
                                        to={`/dashboard/cases/${item.uid}`}>
                                        <p>{item.patient}</p>
                                        <h4>{item.uid}</h4>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            </nav>
        </aside>
    );
};

export default DashboardBar;

*/


/*
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Dashboard/Dashboard.scss";

const DashboardBar = () => {
    const { clientCases } = useDashboard();
    const location = useLocation();

    return (
        <nav className="dashboard__bar">
            <div className="dashboard__items dashboard__items--selected">
                <p className="dashboard__label">Currently viewing</p>
                {clientCases && clientCases
                    .filter(item => {
                        return item.uid === location.pathname.split("/dashboard/cases/")[1]
                    })
                    .map(item => {
                        return (
                            <div className="dashboard__item">
                                <Link
                                    to={`/dashboard/cases/${item.uid}`}>
                                    {item.patient}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="dashboard__items dashboard__items--all">
                <p className="dashboard__label">All Cases</p>
                <ul className="dashboard__caselist">
                    {clientCases && clientCases
                        .filter(item => {
                            return item.uid !== location.pathname.split("/dashboard/cases/")[1]
                        })
                        .map((item) => {
                            return (
                                <li className="dashboard__item">
                                    <Link
                                        to={`/dashboard/cases/${item.uid}`}>
                                        {item.patient}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

export default DashboardBar;

*/