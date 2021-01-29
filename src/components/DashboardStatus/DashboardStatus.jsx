import React from 'react';
import "./DashboardStatus.scss";

// Context 
import { useAuth } from "../../contexts/AuthProvider";

// Components
import Button from '../../components/Button/Button';

const DashboardStatus = ( {children, ...props} ) => {
    const { currentUser } = useAuth(); 
    const { status, className } = props;
    const details = {
        type: "New Case",
        submitted: "July 12, 2021",
        status: "Awaiting payment",
    }

    switch (status) {

        // Client has yet to pay their invoice
        case "Awaiting payment":
            return (
                <section className={`${className} status`}>
                    <div className="status__context">
                        <h3>Overview:</h3>
                    </div>
                    <ul className="status__list">
                    {Object.entries(details).map(([key, value]) => {
                        if(key !== "status") {
                            return (
                                <li>
                                    <p>
                                        {key}
                                    </p>
                                    <p>
                                        {value}
                                    </p>
                                </li>
                            )
                        } else {
                            return (
                                <li>
                                    <p>
                                        {key}
                                    </p>
                                    <p className="status__label status__label--alert">
                                        {value}
                                    </p>
                                </li>
                            )
                        }
                    })}
                </ul>
                    <p 
                        className="status__description">
                        Pay your invoice (by email or below) in order to get access to our feedback once it is available.
                    </p>
                    <Button 
                        className="status__button" 
                        type="primary" 
                        disabled>
                        Complete payment
                    </Button>
                </section>
            );         
        
        case "Feedback pending":
            return (
                <section className={`${className} status`}>
                    <div className="status__context">
                        <h3>Feedback Status:</h3>
                        <div className="status__label status__label--alert">
                            <span>
                                Feedback pending
                            </span>
                        </div>
                    </div>
                    <p 
                        className="status__description">
                        Once you pay for your invoice that was emailed to you at (email@gmail.com) then you will gain access to feedback for this case once it is available:
                    </p>
                    <Button 
                        className="status__button" 
                        type="primary" 
                        disabled>
                        Awaiting feedback
                    </Button>
                </section>
            )        
        
        case "Feedback ready":
            return (
                <section className={`${className} status`}>
                    <div className="status__context">
                        <h3>Feedback Status:</h3>
                        <div className="status__label status__label--default">
                            <span>
                                Feedback ready
                            </span>
                        </div>
                    </div>
                    <p 
                        className="status__description">
                        Once you pay for your invoice that was emailed to you at (email@gmail.com) then you will gain access to feedback for this case once it is available:
                    </p>
                    <Button 
                        className="status__button" 
                        type="primary">
                        Download feedback
                    </Button>
                </section>
            );
        
        // Client missed the deadline for paying the invoice
        case "Invoice expired":
            return (
                <section className={`${className} status`}>
                    <div className="status__context">
                        <h3>Feedback Status:</h3>
                        <div className="status__label status__label--important">
                            <span>
                                Invoice expired
                            </span>
                        </div>
                    </div>
                    <p 
                        className="status__description">
                        Once you pay for your invoice that was emailed to you at (email@gmail.com) then you will gain access to feedback for this case once it is available:
                    </p>
                    <Button 
                        className="status__button" 
                        type="primary">
                        Send new invoice
                    </Button>
                </section>
            ); 
        
        default:
            return <></>
    }
}

export default DashboardStatus;