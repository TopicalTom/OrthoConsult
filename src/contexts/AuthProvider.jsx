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
        return (
            auth
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    updateProfile(name);
                    linkClient(email, name, phone);
                })
                .catch((error) => {
                    console.log(error);
                })
        )
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
    function updateProfile(name) {
        auth.currentUser
            .updateProfile({
                displayName: name
            })
            .then(() => {
                console.log("Success");
            }).catch((error) => {
                console.log(error);
            });
    }
    
    // Links SignUp with User Doc in FireStore
    function linkClient(email, name, phone) {
        const clientId = auth.currentUser.uid;

        //console.log(currentUser.uid);
        firestore.collection("clients")
            .doc(clientId)
            .set({
                email: email,
                name: name,
                phone: phone,
                cases: []
            })
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

    console.log(currentUser)

    return (
        <AuthContext.Provider value={{ currentUser, signup, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}