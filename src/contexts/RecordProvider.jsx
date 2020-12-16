import React, { useContext, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from "./DataProvider";
import { storage } from "../firebase";

const RecordContext = createContext()

// Custom Record Hook
export function useRecord() {
    return useContext(AuthContext)
}

// Handles Firebase Storage Requests
export function RecordProvider({ children }) {
    const { state, dispatch } = useData();
    const { patient } = state;

    const upload = async (e) => {
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

    const remove = async (e) => {

        dispatch ({
            type: "removeRecord",
            payload: e.current.id
        })
    }

    return (
        <RecordContext.Provider value={{ upload, remove }}>
            {children}
        </RecordContext.Provider>
    )
}