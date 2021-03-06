import React, { useContext, useReducer, useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { auth, firestore, storage } from "../firebase";
import { fetchFromAPI } from "../utils/fetchFromAPI";

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
    const history = useHistory();
    const initialData = database; 
    const initialRecords = records; 
    const [ dataState, dataDispatch ] = useReducer(dataReducer, initialData);
    const [ recordState, recordDispatch ] = useReducer(recordReducer, initialRecords);
    const [ loading, setLoading ] = useState(false);

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

            if (item.id !== "base64") {
                storageRef.child(item.id)
                    .put(item.meta)
                    .then(() => {
                        console.log("Records Uploaded")
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } else {
                storageRef.child(item.name)
                    .putString(item.meta.file, 'data_url')
                    .then(() => {
                        console.log("Records Uploaded")
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
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
                status: "Awaiting payment"
            })
            .then(() => {
                console.log("Case linked to client")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // Ensures Upload to Firebase Services
    const submitCase = async () => {
        const newCaseId = uuidv4();
        setLoading(true);

        await Promise
            .all([
                uploadData(newCaseId),
                uploadRecords(newCaseId),
                linkClient(newCaseId)
            ])
            .then(() => {
                fetchFromAPI('create-invoice', {
                    body: { 
                        customer_uid: auth.currentUser.uid, 
                        invoice_items: {
                            caseType: dataState.caseType,
                            cephalometric: dataState.cephalometric
                        }
                    },
                });
                history.push(`/dashboard/cases?filter=None&case=${newCaseId}`);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => 
                setLoading(false)
            );
    };

    return (
        <EvaluationContext.Provider 
            value={{ 
                loading,
                dataState, 
                dataDispatch, 
                recordState, 
                recordDispatch,
                submitCase }}>
            {children}
        </EvaluationContext.Provider>
    )
}