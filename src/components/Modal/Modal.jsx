import React from 'react';
import { useModal } from "../../contexts/ModalProvider";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./Modal.scss";

Modal.setAppElement('*');

function ModalView() {
    const { modalIsOpen, toggleModal, modalState } = useModal();

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            className="modal"
            overlayClassName="overlay">
            {modalState}
        </Modal>
    );
}

export default ModalView;

/*
            <div className="modal__content">
                <h2 className="modal__header">Are you sure you want to delete this case?</h2>
                <button 
                    className="modal__close"
                    onClick={toggleModal}>
                    <span>X</span>
                </button>
                <div className="modal__details">
                    <p>Icon</p>
                    <p 
                        className="modal__text modal__text--warning">
                        Information provided so far will be permenately deleted and can't be undone.
                    </p>
                </div>
                <div className="modal__actions">
                    <button 
                        className="modal__button modal__button--cancel"
                        type="button"
                        onClick={toggleModal}>
                        Cancel
                    </button>
                    <button 
                        className="modal__button modal__button--destructive"
                        type="button">
                        Delete
                    </button>
                </div>
            </div>

*/