import React from 'react';
import { Route, Switch } from "react-router";

// Components
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Modal from './components/Modal/Modal';

// Pages
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Education from './pages/Education/Education';
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Resources from "./pages/Resources/Resources";
import Evaluation from "./pages/Evaluation/Evaluation";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
    return (
        <>
            <Modal />
            <Switch>
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/evaluation" component={Evaluation} />
                <Route path="/education" component={Education} />
                <Route path="/resources" component={Resources} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/register" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
            </Switch>
        </>
    );
}

export default App;

/*
import React from 'react';
import { Router, Route, Switch } from "react-router";
import { useAuth } from "./contexts/AuthProvider";

// Components
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Case from './components/Case/Case';

function App() {
    const { currentUser } = useAuth(); 

    return (
        <>
            <Header />
            <Main />
            {!currentUser
                ?   <>
                        <LogIn />
                        <SignUp />
                    </>
                :   <Case />
            }
        </>
    );
}

export default App;

*/
