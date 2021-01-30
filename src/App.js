import React from 'react';
import { Route, Switch } from "react-router";

// Components
import SecureRoute from './components/SecureRoute/SecureRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Modal from './components/Modal/Modal';

// Pages
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Evaluation from "./pages/Evaluation/Evaluation";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
    return (
        <>
            <Modal />
            <Switch>
                <SecureRoute path="/evaluation" component={Evaluation} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
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
