import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Dashboard/Dashboard.scss";

// Assets 
import path from '../../assets/icons/dropdown.svg';

const DashboardBreadcrumbs = () => {
    const { currentUser } = useAuth();
    const { page, subPage } = useDashboard();
    const welcome = `Welcome, Dr. ${currentUser.displayName.split(" ").pop()}`;

    return (
        <nav className="dashboard__breadcrumbs">
            <ul className="dashboard__pathlist">
                {subPage === ""
                    ?   <>
                            <li className="dashboard__path">
                                <h2 
                                    className="dashboard__context dashboard__context--current">
                                    {page.length !== 0
                                        ?   page
                                        :   welcome
                                    }
                                </h2>
                            </li> 
                        </>
                    :   <>                            
                            <li className="dashboard__path">
                                <Link 
                                    className="dashboard__return"
                                    to="/dashboard/cases">
                                    <h2 
                                        className="dashboard__context dashboard__context--previous">
                                        {page}
                                    </h2>
                                </Link>
                            </li> 
                            <li className="dashboard__path">
                                <img 
                                    className="dashboard__direction"
                                    src={path}
                                />
                            </li>
                            <li className="dashboard__path">
                                <h2 
                                    className="dashboard__context dashboard__context--current">
                                    {subPage}
                                </h2>
                            </li>
                        </>
                }
            </ul>
        </nav>
    );
};

export default DashboardBreadcrumbs;

/*
                {subPage &&
                    <>
                        <li className="dashboard__path">
                            <img 
                                className="dashboard__icon dashboard__icon--path"
                                src={path}
                            />
                        </li>
                        <li className="dashboard__path">
                            <h2 
                                className="dashboard__context">
                                {subPage}
                            </h2>
                        </li>
                    </>
                }
*/