import React, {useState} from 'react';
import "../../pages/Patient/Patient.scss";

const CaseRecords = ( {children, ...props} ) => {
    const { id, className, records } = props;

    return (
        <ul id={id} className={`${className} patient__records`}>
            {records && records.map((record, index) => {
                return (
                    <li className="patient__record" style={{backgroundImage: `url(${record.image})`}} key={index}>

                    </li>
                )
            })}
        </ul>
    );
}

export default CaseRecords;