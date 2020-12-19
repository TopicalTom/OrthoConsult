import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../Case/Case.scss";

// Components 
import UploadFile from '../UploadFile/UploadFile';
import File from '../File/File';

function Step21() {
    const { state } = useData();
    const { records } = state;

    return (
        <div className="case__content"> 
            <UploadFile />
        </div>
    );
}
export default Step21;

/*

import React from 'react';
import { useData } from "../../contexts/DataProvider";
import "../CaseForm/CaseForm.scss";

// Components 
import UploadFile from '../UploadFile/UploadFile';
import File from '../File/File';

function Step21() {
    const { state } = useData();
    const { records } = state;

    return (
            <div className="case__container case__container--default">
                <div className="case__column">
                    <UploadFile />
                </div>
                <div className="case__column">
                    <label className="case__label">Uploaded Records:</label>
                    {records.length !== 0
                        ?   records.map((item) => {
                                return (
                                    <File
                                        src={item.url} 
                                        id={item.id} 
                                    />
                            )
                            })
                        :   <></>
                    }
                </div>
            </div>
    );
}
export default Step21;

*/