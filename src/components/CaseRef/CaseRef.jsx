import React, { useState, useRef } from 'react';
import { useDashboard } from '../../contexts/DashboardProvider';
import "./CaseRef.scss";

// Assets
import success from '../../assets/icons/add.svg';
import copy from '../../assets/icons/add.svg';

const CaseRef = () => { 
    const { currentCase } = useDashboard();
    const [ copySuccess, setCopySuccess] = useState(false);
    const caseRef = useRef(null);

    const copyCaseId = () => {
        caseRef.current.select();
        document.execCommand('copy');
        setCopySuccess(true);
        setTimeout(() => {
            setCopySuccess(false);
        }, 1500);
    }

    return (
        <div className="reference">
            <input 
                className={`reference__preview reference__preview--${copySuccess ? "success" : "default"}`}
                ref={caseRef}
                onClick={() => copyCaseId()}
                value={`${currentCase}`}
            />
            {copySuccess
                ?   <img 
                        className="reference__icon"
                        src={success} />
                :   <img
                        className="reference__icon"
                        src={copy} />
            }
        </div>
    );

}

export default CaseRef;