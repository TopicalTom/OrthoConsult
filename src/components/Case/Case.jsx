import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Cases/Cases.scss";

const Case = ( props ) => {
    const { retrieveCase } = useDashboard();
    const { caseId } = useParams();
    const { uid, patient } = props;
    const currentlySelected = uid === caseId ? "current" : "other";
    const reverseName = patient.split(" ").reverse().join(", ");

    useEffect(() => {
        retrieveCase(caseId);
    }, [caseId]);

    return (
        <li className={`cases__item cases__item--${currentlySelected}`}>
            <Link
                className="cases__also"
                to={`/dashboard/cases/${uid}`}>
                <p>{reverseName}</p>
                <h4>{uid}</h4>
            </Link>
        </li>
    )
};

export default Case;