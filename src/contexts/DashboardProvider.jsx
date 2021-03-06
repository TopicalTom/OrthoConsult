import React, { useState, useContext, useEffect, createContext } from 'react';
import { useAuth } from './AuthProvider';
import { firestore, storage } from "../firebase";

// Custom Dashboard Management Hook
const DashboardContext = createContext({});

export function useDashboard() {
    return useContext(DashboardContext)
}

// Handles Dashboard Data and Navigation
export function DashboardProvider({ children }) {
    const { currentUser } = useAuth();
    const [ currentCase, setCurrentCase ] = useState("");
    const [ caseDetails, setCaseDetails ] = useState([]);
    const [ caseRecords, setCaseRecords ] = useState([]);
    const [ clientCases, setClientCases ] = useState([]);
    const [ filter, setFilter ] = useState("None");
    const [ loading, setLoading ] = useState(true);

    // Filters case listings by status
    const addFilter = (action) => {
        setFilter(action);
    };

    // Gets Requested Case Records
    const retrieveRecords = async (caseId) => {
        const recordsRef = storage.ref();
        const folderRef = recordsRef.child(`${caseId}`);

        let images = [];
        const newImages = images;
        
        setLoading(true);
    
        // Retrievies data from Case Storage Collection
        await folderRef.listAll()
            .then((res) => {
                res.items.forEach(imgRef => {
                    imgRef.getDownloadURL()
                        .then(url => {
                            const image = {
                                title: "Image Title",
                                src: url
                            }
                            newImages.push(image);
                        })
                        .catch(error => console.log(error))
                })
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))

        setCaseRecords(newImages)
    }

    // Gets Requested Case Data
    const retrieveCase = (caseId) => {
        const caseRef = firestore.collection('cases').doc(caseId);

        // Retrievies data from Case FireStore Collection
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
                retrieveRecords(descendingData[0].uid);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // Grabs all case listings on load
    useEffect(() => {
        retrieveCaseList();
    }, []);

    return (
        <DashboardContext.Provider 
            value={{ 
                clientCases, 
                caseDetails, 
                caseRecords, 
                currentCase, 
                retrieveCase, 
                retrieveRecords, 
                filter, 
                addFilter, 
                loading 
            }}>
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