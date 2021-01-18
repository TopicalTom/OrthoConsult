import React from 'react';
import { useEvaluation } from '../../contexts/EvaluationProvider';
import { useModal } from '../../contexts/ModalProvider';

// Components
import File from '../File/File';

// Assets 
import Icon from '../../assets/icons/copy.svg';

function EvaluationRecords() {
    const { recordState } = useEvaluation();
    const { records } = recordState;
    const { toggleModal, modalDispatch } = useModal();

    function handleClick() {
        toggleModal()
        modalDispatch({
            type: "REQUIRED_RECORDS"
        })
    }

    return (
        <aside className="evaluation__records">
            {records.length !== 0
                ?   <>
                        <p className="evaluation__label">Dental records</p>
                        <ul className="evaluation__files">
                            {records.map((item) => {
                                return (
                                    <File
                                        preview={item.preview}
                                        name={item.name} 
                                        id={item.id} 
                                    />
                                )
                            })}
                        </ul>
                    </>
                :   <div className="evaluation__empty">
                        <img 
                            className="evaluation__icon" 
                            src={Icon}
                        />
                        <p 
                            className="evaluation__placeholder">
                            Uploaded dental records will show up here.
                        </p>
                        <button
                            className="evaluation__button"
                            onClick={() => handleClick()}>
                            View required
                        </button>
                    </div>
            }
        </aside>
    );
}
export default EvaluationRecords;