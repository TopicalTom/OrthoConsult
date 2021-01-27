import React, { useState, useContext, useEffect, createContext } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { useAuth } from './AuthProvider';
import { firestore } from "../firebase";

// Custom Dashboard Management Hook
const DashboardContext = createContext({});

export function useDashboard() {
    return useContext(DashboardContext)
}

// Handles Dashboard Data and Navigation
export function DashboardProvider({ children }) {
    const { currentUser } = useAuth();
    const location = useLocation();
    const [ currentCase, setCurrentCase ] = useState("");
    const [ page, setPage ] = useState("");
    const [ subPage, setSubPage ] = useState("");
    const [ caseDetails, setCaseDetails ] = useState([]);
    const [ clientCases, setClientCases ] = useState([]);

    console.log(currentUser)

    // Grabs All Client Cases on Load
    useEffect(() => {
        const casesRef = firestore.collection('clients').doc(currentUser.uid).collection("cases");

        casesRef.get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data)
                setClientCases(data);
                setCurrentCase(data[0].uid)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    
    // Handles Dashboard Navigation Changes
    useEffect(() => {
        const currentPage = location.pathname.slice(11).split("/")[0];
        setPage(currentPage);
        //setSubPage("");
    }, [location]);

    // Gets Case Specific Details
    function retrieveCase() {
        const caseId = location.pathname.split("/dashboard/cases/")[1];
        const caseRef = firestore.collection('cases').doc(caseId);

        // Retrievies data from Cases Collection
        caseRef.get()
            .then((doc) => {
                const data = doc.data();
                setCaseDetails(data);
                setPage(data.patient);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <DashboardContext.Provider value={{ clientCases, caseDetails, page, subPage, retrieveCase, currentCase }}>
            {children}
        </DashboardContext.Provider>
    )
}