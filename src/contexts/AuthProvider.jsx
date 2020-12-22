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

    // Handles SignUp Requests
    function signup(email, password, name, phone) {
        createClient(email, name, phone)
        return auth.createUserWithEmailAndPassword(email, password)
    }

    // Handles Login Requests
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    // Handles Logout Requests
    function logout() {
        return auth.signOut()
    }

    // Updates Acccount Info on Creation
    function setProfile(name, phone) {
        auth.currentUser
            .updateProfile({
                displayName: name,
                phoneNumber: phone
            })
            .then(() => {
                console.log("Success");
            }).catch((error) => {
                console.log(error);
            });
    }
    
    // Links SignUp with User Doc in FireStore
    function createClient(email, name, phone) {
        
        let newClient = {
            name: name,
            email: email,
            phone: phone,
            cases: []
        }

        firestore.collection("clients")
            .doc(name)
            .set(newClient)
            .then(() => {
                setProfile(name, phone)
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