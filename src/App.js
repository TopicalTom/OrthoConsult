import React from 'react';
import { Router, Route, Switch } from "react-router";
import { useAuth } from "./contexts/AuthProvider";

// Components
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Cases from './components/CaseForm/CaseForm';

function App() {
    const { currentUser } = useAuth(); 
    console.log(currentUser)

    return (
        <>
            <Header />
            <Main />
            {!currentUser
                ?   <>
                        <LogIn />
                        <SignUp />
                    </>
                :   <Cases />
            }
        </>
    );
}

export default App;
