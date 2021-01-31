import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Cases/Cases.scss";

// Utilities
import getParams from '../../utils/getParams.js';

const Case = ( props ) => {
    const { uid, patient } = props;
    const { retrieveCase } = useDashboard();
    const location = useLocation();
    const searchParams = getParams(location.search);
    const reverseName = patient.split(" ").reverse().join(", ");

    useEffect(() => {
        retrieveCase(searchParams.caseId);
    }, [searchParams.caseId]);

    return (
        <li className={`cases__item cases__item--${uid === searchParams.caseId ? "current" : "other"}`}>
            <Link
                className="cases__also"
                to={`/dashboard/cases?filter=${searchParams.filterType}&case=${uid}`}>
                <p>{reverseName}</p>
                <h4>{uid}</h4>
            </Link>
        </li>
    )
};

export default Case;