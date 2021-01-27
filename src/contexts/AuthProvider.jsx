import React, { useContext, useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, firestore } from "../firebase";

const AuthContext = createContext()

// Custom Auth Hook
export function useAuth() {
    return useContext(AuthContext)
}

// Handles Firebase Auth Requests
export const AuthProvider = ({ children }) => {
    const history = useHistory();
    const [ currentUser, setCurrentUser ] = useState();
    const [ verified, setVerified ] = useState();
    const [ loading, setLoading ] = useState(true);

    // Handles SignUp Requests
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    // Handles Login Requests
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    // Handles Logout Requests
    const logout = () => {
        return auth.signOut();
    }

    // Handles Email Verification
    const verifyClient = async () => {
        return await auth.currentUser.sendEmailVerification();
    }

    // Links SignUp with New Client Doc in FireStore
    const createClient = async (userAuth, additionalData) => {
        if (!userAuth) { return };
    
        const clientRef = firestore.doc(`clients/${userAuth.uid}`);
        const snapShot = await clientRef.get();
    
        if (!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdOn = new Date();
    
            try {
                await clientRef.set({
                    displayName,
                    email,
                    createdOn,
                    ...additionalData
                });
                verifyClient();
            } catch (error) {
                console.log('error creating user', error.message)
            }
        }
    
        return clientRef;
    }

    // Watches for User Changes
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const clientRef = await createClient(userAuth);

                clientRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        uid: snapShot.id,
                        ...snapShot.data()
                    });
                })

                if (userAuth.emailVerified === false ) {
                    setVerified(false)  
                } else {
                    setVerified(true)
                }
            } else {
                setCurrentUser(userAuth);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if(loading) { return <div>Loading...</div> }

    return (
        <AuthContext.Provider value={{ currentUser, verified, signup, createClient, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

/*

import React, { useContext, useState, createContext, useEffect } from 'react';
import { auth, firestore } from "../firebase";

const AuthContext = createContext()

// Custom Auth Hook
export function useAuth() {
    return useContext(AuthContext)
}

// Handles Firebase Auth Requests
export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState();
    const [ loading, setLoading ] = useState(true);

    // Handles SignUp Requests
    function signup(email, password, name, location, confirm) {
        return (
            auth
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    updateProfile(name);
                    linkClient(email, name, location);
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
    function linkClient(email, name, location) {
        const clientId = auth.currentUser.uid;

        //console.log(currentUser.uid);
        firestore.collection("clients")
            .doc(clientId)
            .set({
                email: email,
                name: name,
                location: location,
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

    return (
        <AuthContext.Provider value={{ currentUser, signup, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

*/