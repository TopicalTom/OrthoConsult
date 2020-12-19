import React, { useContext, useState, createContext, useEffect } from 'react';
import { auth, firestore } from "../firebase";

const AuthContext = createContext()

// Custom Auth Hook
export function useAuth() {
    return useContext(AuthContext)
}

// Handles Firebase Auth Requests
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    // SignUp Modal
    function signup(email, password, name, phone) {
        createClient(email, name, phone)
        return auth.createUserWithEmailAndPassword(email, password)
    }

    // Login Modal
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    // Account Page
    function logout() {
        return auth.signOut()
    }
    
    // Links SignUp with User Doc in FireStore
    function createClient(email, name, phone) {
        
        let newClient = {
            name: name,
            email: email,
            phone: phone,
            cases: []
        }

        // Links Auth with Client Account Creation
        firestore.collection("clients")
            .doc(name)
            .set(newClient)
            .then(() => {
                console.log("Success");
            })
            .catch(error => {
                console.log(error);
            });
    }

    // Watches for Account Changes
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser, signup, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}