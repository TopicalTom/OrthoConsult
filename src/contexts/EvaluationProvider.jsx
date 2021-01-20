import React, { useContext, useReducer, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { auth, firestore, storage } from "../firebase";

// Templates
import database from "../templates/database";
import records from "../templates/records";

// Reducers
import dataReducer from "../reducers/dataReducer";
import recordReducer from "../reducers/recordReducer";

// Custom Hook
const EvaluationContext = createContext({});

export function useEvaluation() {
    return useContext(EvaluationContext)
}

// Handles Case Evaluation Actions
export const EvaluationProvider = ({ children }) => {
    const initialData = database; 
    const initialRecords = records; 
    const [ dataState, dataDispatch ] = useReducer(dataReducer, initialData);
    const [ recordState, recordDispatch ] = useReducer(recordReducer, initialRecords);

    // Stores Case Data in Firestore Collection
    const uploadData = (newCaseId) => {
        firestore.collection("cases")
            .doc(newCaseId)
            .set(dataState)
            .then(() => {
                console.log("Success");
            })
            .catch(error => {
                console.log(error);
            });
    }

    // Creates Storage Bucket in Firebase Storage
    const uploadRecords = (newCaseId) => {
        const storageRef = storage.ref(newCaseId);
        {recordState.records.map((item) => {
            storageRef.child(item.id)
                .put(item.file)
                .then(() => {
                    console.log("Records Uploaded")
                })
                .catch((error) => {
                    console.log(error)
                })
        })}
    }

    // Adds Foreign Key (Case) + Info to Current User
    const linkClient = (newCaseId) => {
        firestore.collection("clients")
            .doc(auth.currentUser.uid).collection("cases")
            .doc(newCaseId)
            .set({
                uid: newCaseId,
                type: dataState.caseType,
                patient: dataState.patient,
                createdAt: new Date(),
                status: "Awaiting feedback"
            })
            .then(() => {
                console.log("Case linked to client")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // Links Case Evaluation to Firebase resources
    const submitCase = () => {
        const newCaseId = uuidv4();
        uploadData(newCaseId)
        uploadRecords(newCaseId)
        linkClient(newCaseId)
    };

    return (
        <EvaluationContext.Provider 
            value={{ 
                dataState, 
                dataDispatch, 
                recordState, 
                recordDispatch, 
                submitCase }}>
            {children}
        </EvaluationContext.Provider>
    )
}

/*
import React, { useContext, useReducer, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { auth, firestore, storage } from "../firebase";

// Templates
import database from "../templates/database";
import records from "../templates/records";

// Custom Hook
const EvaluationContext = createContext({});

export function useEvaluation() {
    return useContext(EvaluationContext)
}

// Handles Case Evaluation Actions
export function EvaluationProvider({ children }) {
    const initialData = database; 
    const [ dataState, dataDispatch ] = useReducer(dataReducer, initialData);

    // Handles Data Logic
    function dataReducer(dataState, action) {
        const { name, value, group, path } = action.payload;
        switch (action.type) {

            // Stores Data at the top level of state
            case "STORE_DATA":
                return {
                    ...dataState,
                    [name]: value
                };

            // Stores Data within an object of state
            case "STORE_AS_NESTED_DATA":            
                return {
                    ...dataState,
                    [group]: {
                        ...path,
                        [name]: value
                    }
                }; 

            // Stores Data & clears None Value within an object of state
            case "STORE_AS_NESTED_COLLECTION_DATA":
                return {
                    ...dataState,
                    [group]: {
                        ...path,
                        none: false,
                        [name]: value
                    }
                };       
            
            // Sets Data as None Value within an object of state
            case "STORE_AS_EMPTY_NESTED_COLLECTION_DATA":
                return {
                    ...dataState,
                    [group]: {
                        [!name]: false,
                        [name]: value
                    }
                };

            default:
                return dataState;
        }
    }

    const initialRecords = records; 
    const [ recordState, recordDispatch ] = useReducer(recordReducer, initialRecords);

    // Handles Records Logic
    function recordReducer(recordState, action) {
        const { drawing } = action.payload;
        switch (action.type) {

            // Stores vector strokes from canvas pad
            case "CAPTURE_DRAWING":
                return {
                    ...recordState,
                    rangeOfMotion: drawing,
                };  

            // Clears canvas pad of current vector strokes
            case "CLEAR_DRAWING":
                return {
                    ...recordState,
                    rangeOfMotion: [],
                };   
                
            // Adds drawing to records list (overrides previous)
            case "ADD_DRAWING":
                return {
                    ...recordState,
                    records: [
                        ...recordState.records,
                        action.payload
                    ]
                }; 

            // Adds new record to records list
            case "ADD_RECORD":
                return {
                    ...recordState,
                    records: [
                        ...recordState.records,
                        action.payload
                    ]
                };  

            // Returns records of non-matching ID
            case "REMOVE_RECORD":
                const updatedRecords = recordState.records
                    .filter(item => item.id !== action.payload.id);

                return {
                    ...recordState,
                    records: [...updatedRecords]
                };

            default:
                return recordState;
        }
    }

    // Stores Case Data in Firestore Collection
    function uploadData(newCaseId) {
        firestore.collection("cases")
            .doc(newCaseId)
            .set(dataState)
            .then(() => {
                console.log("Success");
            })
            .catch(error => {
                console.log(error);
            });
    }

    // Creates Storage Bucket in Firebase Storage
    const uploadRecords = (newCaseId) => {
        const storageRef = storage.ref(newCaseId);
        {recordState.records.map((item) => {
            storageRef.child(item.id)
                .put(item.file)
                .then(() => {
                    console.log("Records Uploaded")
                })
                .catch((error) => {
                    console.log(error)
                })
        })}
    }

    // Adds Foreign Key (Case) + Info to Current User
    function linkClient(newCaseId) {
        firestore.collection("clients")
            .doc(auth.currentUser.uid).collection("cases")
            .doc(newCaseId)
            .set({
                uid: newCaseId,
                type: dataState.caseType,
                patient: dataState.patient,
                createdAt: new Date(),
                status: "Awaiting feedback"
            })
            .then(() => {
                console.log("Case linked to client")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // Links Case Evaluation to Firebase resources
    function submitCase() {
        const newCaseId = uuidv4();
        uploadData(newCaseId)
        uploadRecords(newCaseId)
        linkClient(newCaseId)
    };

    return (
        <EvaluationContext.Provider 
            value={{ 
                dataState, 
                dataDispatch, 
                recordState, 
                recordDispatch, 
                submitCase }}>
            {children}
        </EvaluationContext.Provider>
    )
}

*/