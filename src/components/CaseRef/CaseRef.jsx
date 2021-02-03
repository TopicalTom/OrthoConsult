import React, { useState, useRef } from 'react';
import { useDashboard } from '../../contexts/DashboardProvider';
import "./CaseRef.scss";

// Assets
import success from '../../assets/icons/add.svg';
import copy from '../../assets/icons/copy.svg';

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
                ?   <svg 
                        className="reference__icon"
                        aria-hidden="true"
                        viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z" fill-rule="evenodd" />
                    </svg>
                :   <img
                        className="reference__icon"
                        src={copy} />
            }
        </div>
    );

}

export default CaseRef;