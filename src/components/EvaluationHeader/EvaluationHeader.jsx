import React from 'react';

// Contexts
import { useModal } from '../../contexts/ModalProvider';
import { useQuestion } from '../../contexts/QuestionProvider';

// Icons
import cancel from "../../assets/icons/close.svg";

function EvaluationHeader() {    
    const { currentQuestion, length } = useQuestion();
    const { toggleModal, modalDispatch } = useModal();

    function handleClick() {
        toggleModal()
        modalDispatch({
            type: "LEAVE_CONFIRMATION"
        })
    }

    return (
        <div className="evaluation__header">
            <button 
                className="evaluation__close"
                type="button"
                onClick={() => handleClick()}>
                <img 
                    className="evaluation__icon"
                    src={cancel}
                />
            </button>
            <h2 
                className="evaluation__title">
                {currentQuestion < (length - 2)
                    ?   `Case Evaluation (Question ${currentQuestion + 1} of ${length - 2})`
                    :   "Case Evaluation"
                }
            </h2>
        </div>
    );
};

export default EvaluationHeader;