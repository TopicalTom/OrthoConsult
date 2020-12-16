import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './contexts/AuthProvider';
import { ModalProvider } from './contexts/ModalProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <AuthProvider>
        <React.StrictMode>
            <BrowserRouter>
                <ModalProvider>
                    <App />
                </ModalProvider>
            </BrowserRouter>
        </React.StrictMode>
    </AuthProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
