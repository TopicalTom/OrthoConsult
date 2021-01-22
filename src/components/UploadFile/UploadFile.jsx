import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useEvaluation } from '../../contexts/EvaluationProvider';
import { useValidation } from "../../contexts/ValidationProvider";
import { useModal } from "../../contexts/ModalProvider";
import { useDropzone } from 'react-dropzone';
import "./UploadFile.scss";

// Icons
import upload from "../../assets/icons/cloud.svg";

function UploadFile() {
    const { recordDispatch } = useEvaluation();
    const { validationDispatch } = useValidation();
    const { toggleModal, modalDispatch } = useModal();

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')

            reader.onload = () => {
                const id = uuidv4();
                recordDispatch ({
                    type: "ADD_RECORD",
                    payload: { 
                        id: id, 
                        name: `Name ${id}`,
                        preview: URL.createObjectURL(file),
                        file: file
                    }
                })

                validationDispatch ({
                    type: "CHECK_RECORDS",
                    payload: { 
                        name: "records"
                    }
                })
            }
            reader.readAsArrayBuffer(file)
        })
    }, [])
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

    function handleHelp() {
        modalDispatch({
            type: "RECORDS_HELP"
        })
        toggleModal()
    }

    function handleAdvanced() {
        modalDispatch({
            type: "RECORDS_ADVANCED"
        })
        toggleModal()
    }
    
    return (
        <>
        <div className={`upload ${isDragActive ? "upload--active" : ""}`} {...getRootProps()}>
            <input className="upload__input" {...getInputProps()} />
            {isDragActive 
                ?   <p 
                        className="upload__instructions">
                        Drop the file(s) here ...
                    </p> 
                :   <>
                        <img 
                            className="upload__icon"
                            src={upload}
                        />
                        <p 
                            className="upload__instructions">
                            Drag & Drop
                        </p>
                        <h4 
                            className="upload__sub">
                            or click to <a className="upload__link">browse</a> files
                        </h4>
                    </>
            }
        </div>
        <div className="upload__actions">
            <button 
                className="upload__button"
                type="button"
                onClick={() => handleHelp()}>
                Help
            </button>
            <button 
                className="upload__button"
                type="button"
                onClick={() => handleAdvanced()}>
                Advanced
            </button>
        </div>
        </>
    )
}

export default UploadFile;

/*
import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from "../../contexts/DataProvider";
import { useModal } from "../../contexts/ModalProvider";
import { useDropzone } from 'react-dropzone';
import { storage } from "../../firebase";
import "./UploadFile.scss";

// Icons
import upload from "../../assets/icons/cloud.svg";

function UploadFile() {
    const { dataState, dataDispatch } = useData();
    const { toggleModal } = useModal();
    const { patient } = dataState;

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')

            reader.onload = async () => {
                const id = uuidv4();
                const storageRef = storage.ref(patient).child(id);
                
                await storageRef.put(file);
                storageRef.getDownloadURL()
                    .then((url) => {
                        dataDispatch ({
                            type: "UPLOAD_RECORD",
                            payload: { 
                                id: id, 
                                url: url
                            }
                        })
                    })
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })
    }, [])
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

    return (
        <>
        <div className={`upload ${isDragActive ? "upload--active" : ""}`} {...getRootProps()}>
            <input className="upload__input" {...getInputProps()} />
            {isDragActive 
                ?   <p 
                        className="upload__instructions">
                        Drop the file(s) here ...
                    </p> 
                :   <>
                        <img 
                            className="upload__icon"
                            src={upload}
                        />
                        <p 
                            className="upload__instructions">
                            Drag & Drop
                        </p>
                        <h4 
                            className="upload__sub">
                            or click to <a className="upload__link">browse</a> files
                        </h4>
                    </>
            }
        </div>
        <div className="case__column">
                <button 
                    className="case__button case__button--capture"
                    type="button"
                    onClick={toggleModal}>
                    Help
                </button>
                <button 
                    className="case__button case__button--capture"
                    type="button"
                    onClick={toggleModal}>
                    Advanced
                </button>
            </div>
        </>
    )
}

export default UploadFile;

*/

/*
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from "../../contexts/DataProvider";
import { storage } from "../../firebase";
import "./UploadFile.scss";

const UploadFile = (props) => {
    const { state, dispatch } = useData();
    const { patient } = state;

    const uploadImages = async (e) => {
        const file = e.target.files[0];
        const id = uuidv4();
        const storageRef = storage.ref(patient).child(id);
        
        await storageRef.put(file);
        storageRef.getDownloadURL()
            .then((url) => {
                dispatch ({
                    type: "uploadRecord",
                    payload: { 
                        id: id, 
                        url: url
                    }
                })
            })
    }

    return (
        <div className="upload">
            <div className="upload__container">
                <h3 className="upload__instructions">Drag & Drop to upload</h3>
                <p>Or</p>
                <input 
                    className="upload__input"
                    type="file" 
                    accept="image/*" 
                    multiple
                    onChange={uploadImages}
                />
            </div>
        </div>
    );
};

export default UploadFile;

*/

/*

import React, {useState} from 'react';
import { useData } from "../../contexts/DataProvider";
import "./UploadFile.scss";

const UploadFile = (props) => {
    const { dispatch, state } = useData();
    const { } = props;
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    function handleFiles(files) {

    }

    function validateFile(file) {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }

    function dragOver(e) {
        e.preventDefault();
    }
    
    function dragEnter(e) {
        e.preventDefault();
    }
    
    function dragLeave(e) {
        e.preventDefault();
    }
    
    function fileDrop(e) {
        e.preventDefault();
        
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    return (
        <div className="upload">
            <div 
                className="upload__container"
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}>
                <p 
                    className="upload__message">
                    Drag & Drop files here or click to upload
                </p>
            </div>
        </div>
    );
};

export default UploadFile;

*/