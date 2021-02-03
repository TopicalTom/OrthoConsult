import React, {useState, useEffect} from 'react';
import { useDashboard } from '../../contexts/DashboardProvider';
import "../../pages/Patient/Patient.scss";

const CaseRecords = ( props ) => {
    const { className } = props;
    const { retrieveRecords, caseRecords, currentCase } = useDashboard();
    const [patientRecords, setPatientRecords] = useState([]);

    useEffect(async () => {
        await retrieveRecords(currentCase)
            .then(() => setPatientRecords(caseRecords))
            .catch((error) => console.log(error));
    }, [currentCase])

    return (
        <ul className={`${className} patient__records`}>
            {patientRecords.length !== 0 && patientRecords.map((record, index) => {
                return (
                    <li className="patient__record" style={{backgroundImage: `url(${record.src})`}} key={index}>
                        <span>{record.title}</span>
                    </li>
                )
            })}
        </ul>
    );
}

export default CaseRecords;