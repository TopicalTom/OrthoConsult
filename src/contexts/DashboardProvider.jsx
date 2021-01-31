import React, { useState, useContext, useEffect, createContext } from 'react';
import { useAuth } from './AuthProvider';
import { firestore } from "../firebase";

// Custom Dashboard Management Hook
const DashboardContext = createContext({});

export function useDashboard() {
    return useContext(DashboardContext)
}

//const initialFilter = "None";

// Handles Dashboard Data and Navigation
export function DashboardProvider({ children }) {
    const { currentUser } = useAuth();
    const [ currentCase, setCurrentCase ] = useState("");
    const [ caseDetails, setCaseDetails ] = useState([]);
    const [ clientCases, setClientCases ] = useState([]);
    const [ filter, setFilter ] = useState("None (default)")

    /*
    const [ filter, filterDispatch ] = useReducer(filterReducer, initialFilter);
    const isAwaitingPayment = () => filterDispatch({type: 'AWAITING_PAYMENT'});
    const isInReview = () => filterDispatch({type: 'IN_REVIEW'});
    const isReviewed = () => filterDispatch({type: 'REVIEWED'});
    const clearFilter = () => filterDispatch({type: 'CLEAR_FILTER'});
    */

    const addFilter = (action) => {
        setFilter(action)
    }

    // Gets Requested Case Specific Details
    const retrieveCase = (caseId) => {
        const caseRef = firestore.collection('cases').doc(caseId);

        // Retrievies data from Cases Collection
        caseRef.get()
            .then((doc) => {
                const data = doc.data();
                setCaseDetails(data);
                setCurrentCase(caseId);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // Gets Short-form Client Case listings
    const retrieveCaseList = () => {
        const casesRef = firestore.collection('clients').doc(currentUser.uid).collection("cases");

        casesRef.get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => doc.data());
                const descendingData = data.sort((a, b) => a.createdAt.seconds > b.createdAt.seconds ? 1 : -1 );
                setClientCases(descendingData);
                retrieveCase(descendingData[0].uid);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // On Load Actions
    useEffect(() => {
        retrieveCaseList();
    }, []);

    return (
        <DashboardContext.Provider value={{ clientCases, caseDetails, currentCase, retrieveCase, filter, addFilter }}>
            {children}
        </DashboardContext.Provider>
    )
}

/*
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

    // Grabs All Client Cases on Load
    useEffect(() => {
        const casesRef = firestore.collection('clients').doc(currentUser.uid).collection("cases");

        casesRef.get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => doc.data());
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

*/