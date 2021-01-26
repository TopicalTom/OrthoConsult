import React, { useState, useEffect } from 'react';
import { useEvaluation } from '../../contexts/EvaluationProvider';
import { useModal } from '../../contexts/ModalProvider';
import readableFileSize from '../../utils/readableFileSize';

// Components
import File from '../File/File';

function EvaluationRecords() {
    const { recordState } = useEvaluation();
    const { records } = recordState;
    const { toggleModal, modalDispatch } = useModal();
    const [ currentSize, setCurrentSize ] = useState(null);

    function handleClick() {
        toggleModal()
        modalDispatch({ type: "REQUIRED_RECORDS" })
    }

    useEffect(() => {
        const total = records.reduce((total, file) => total + file.meta.size, 0)
        const current = readableFileSize(total);

        console.log(total)
        console.log(current)

        setCurrentSize(current)
    }, [records]);

    return (
        <aside className="evaluation__records">
            {records.length !== 0
                ?   <>
                        <div className="evaluation__head">
                            <h3 className="evaluation__sub">Dental Records</h3>
                        </div>
                        <div className="evaluation__container">
                            <p className="evaluation__category">Default</p>
                            <ul className="evaluation__files">
                                {records.filter(item => item.name === "Range Of Motion").map((item) => {
                                    return (
                                        <File
                                            preview={item.preview}
                                            id={item.id}
                                            name={item.name}
                                            size="13 KB"
                                        />
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <p className="evaluation__category">Uploaded ({records.filter(item => item.name !== "Range Of Motion").length})</p>
                            <ul className="evaluation__files">
                                {records.filter(item => item.name !== "Range Of Motion").map((item) => {
                                    const readableSize = readableFileSize(item.meta.size);
                                    console.log(item.id)
                                    return (
                                        <File
                                            preview={item.preview}
                                            id={item.id}
                                            name={item.name}
                                            size={readableSize}
                                        />
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="evaluation__foot">
                            <span className="evaluation__counter">Upload limit: {currentSize} / 2 MB</span>
                        </div>
                    </>
                :   <div className="evaluation__empty">
                        <p 
                            className="evaluation__placeholder">
                            Uploaded dental records will show up here...
                        </p>
                        <button
                            className="evaluation__button evaluation__button--helper"
                            onClick={() => handleClick()}>
                            View required
                        </button>
                    </div>
            }
        </aside>
    );
}
export default EvaluationRecords;