import React from 'react';
import "../../pages/Patient/Patient.scss";

const CaseRecords = ( {children, ...props} ) => {
    const { className, records } = props;

    if (records === undefined) { return <>Loading</> }

    return (
        <ul className={`${className} patient__records`}>
            {records.map((record, index) => {
                return (
                    <li className="patient__record" style={{backgroundImage: `url(${record.src})`}} key={index}>
                    </li>
                )
            })}
        </ul>
    );
}

export default CaseRecords;