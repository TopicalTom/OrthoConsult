import React from 'react';
import { useData } from "../../contexts/DataProvider";
import { useStep } from "../../contexts/StepProvider";

// Components
import File from '../File/File';

function CaseRecords() {
    const { state } = useData();
    const { records } = state;
    const { currentStep } = useStep();

    return (
        <aside className={`case__records case__records--${currentStep >= 21 ? "alt" : "default"}`}>
            {records.length !== 0
                ?   <div className="case__files">
                        <p>Currently Uploading</p>
                        <p>Uploaded Files</p>
                        {records.map((item) => {
                            return (
                                <File
                                    src={item.url} 
                                    id={item.id} 
                                />
                            )
                        })}
                    </div>
                :   <div className="case__empty">
                        Uploaded dental records will appear here...
                    </div>
            }
        </aside>
    );
}
export default CaseRecords;