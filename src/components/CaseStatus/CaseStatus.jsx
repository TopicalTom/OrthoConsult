import React from 'react';
import "./CaseStatus.scss";

// Components
import Button from '../Button/Button';

const CaseStatus = ( {children, ...props} ) => { 
    const { details, className } = props;

    switch (details.status) {

        // Client has yet to pay their invoice
        case "Awaiting payment":
            return (
                <section className={`${className} status`}>
                    <div className="status__context">
                        <h3>Case Status:</h3>
                        <div className="status__label status__label--alert">
                            <span>
                                {details.status}
                            </span>
                        </div>
                    </div>
                    <p 
                        className="status__description">
                        Once you pay for your invoice that was emailed to you, we will begin reviewing this case. Alternatively you can complete your payment through the link below:
                    </p>
                    <div className="status__actions">
                        <Button 
                            className="status__button status__button--primary isPrimary" 
                            type="external"
                            to="https://invoice.stripe.com/i/acct_1Hyx6KLSfMQSWLzu/invst_Ip2saoBpqfqRgonJ7RWcsnE9hv6cIUW">
                            Complete payment
                        </Button>
                        <Button 
                            className="status__button status__button--secondary isAction" 
                            type="route"
                            to="/dashboard/contact">
                            Contact us
                        </Button>
                    </div>
                </section>
            );         
        
        // We are actively looking over and preparing case feedback
        case "In review":
            return (
                <section className={`${className} status`}>
                    <div className="status__context">
                        <h3>Case Status:</h3>
                        <div className="status__label status__label--default">
                            <span>
                                {details.status}
                            </span>
                        </div>
                    </div>
                    <p 
                        className="status__description">
                        We are actively looking over your case to provide feedback and will email you when it is ready. If you have any questions, feel free to contact us below.
                    </p>
                    <div className="status__actions">
                        <Button 
                            className="status__button status__button--primary isPrimary" 
                            type="action"
                            disabled>
                            Awaiting feedback
                        </Button>
                        <Button 
                            className="status__button status__button--secondary isSecondary" 
                            type="route"
                            to="/dashboard/contact">
                            Contact us
                        </Button>
                    </div>
                </section>
            )        
        
        // Feedback has been provided and clients can now download
        case "Reviewed":
            return (
                <section className={`${className} status`}>
                    <div className="status__context">
                        <h3>Case Status:</h3>
                        <div className="status__label status__label--success">
                            <span>
                                Reviewed
                            </span>
                        </div>
                    </div>
                    <p 
                        className="status__description">
                        Once you pay for your invoice that was emailed to you at (email@gmail.com) then you will gain access to feedback for this case once it is available:
                    </p>
                    <div className="status__actions">
                        <Button 
                            className="status__button status__button--primary isPrimary" 
                            type="action">
                            Download feedback
                        </Button>
                        <Button 
                            className="status__button status__button--secondary isSecondary" 
                            type="route"
                            to="/dashboard/contact">
                            Contact us
                        </Button>
                    </div>
                </section>
            );
        
        // Client missed the deadline for paying the invoice
        case "Invoice expired":
            return (
                <section className={`${className} status`}>
                    <div className="status__context">
                        <h3>Case Status:</h3>
                        <div className="status__label status__label--important">
                            <span>
                                Invoice expired
                            </span>
                        </div>
                    </div>
                    <p 
                        className="status__description">
                        The invoice sent to your email was not paid within the allotted time. In order for us to begin reviewing this case, request a new invoice below:
                    </p>
                    <div className="status__actions">
                        <Button 
                            className="status__button status__button--primary isPrimary" 
                            type="external"
                            disabled>
                            Request new invoice
                        </Button>
                        <Button 
                            className="status__button status__button--secondary isSecondary" 
                            type="route"
                            to="/dashboard/contact">
                            Contact us
                        </Button>
                    </div>
                </section>
            ); 
        
        default:
            return <></>
    }
}

export default CaseStatus;