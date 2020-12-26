import React, {useState, useEffect} from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import { firestore } from "../../firebase";
import "../../pages/Dashboard/Dashboard.scss";

function Cases() {
    const [ clientCases, setClientCases ] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        const caseRef= firestore.collection('clients').doc(currentUser.uid).collection("cases")

        caseRef.get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => doc.data());
                setClientCases(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <section className="dashboard__content">
            <h3 className="dashboard__subtitle">Overview</h3>
            <p className="dashboard__details">This is </p>
            <ul>
            {clientCases && clientCases.map((item) => {
                return (
                    <li>{item.patient}</li>
                )
            })}
            </ul>
        </section>
    );
};

export default Cases;