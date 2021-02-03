import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Button.scss";

const Button = ( {children, ...props} ) => {
    const { disabled, to, className, type } = props;
    const history = useHistory();

    switch (type) {

        case 'external':
            return (
                <a href={to} className={`${className} button`}>
                    {children}
                </a>
            );

        case 'route':
            return (
                <Link 
                    className={`${className} button`}
                    to={to}>
                    {children}
                </Link>
            );
            
        case 'action':
            return (
                <button 
                    className={`${className} ${disabled ? "disabled" : ""} button`}
                    disabled={disabled}
                    onClick={() => history.push(to)}>
                    {children}
                </button>
            );
        
        default:
            return (
                <button className={`${className} button`}>
                    {children}
                </button>
            )
    }
};

export default Button;

/*
    if (!to) {
        return (
            <button className={`${className} ${type} ${disabled} button`}>
                {children}
            </button>
        );
    } else {
        return (
            <Link 
                className={`${className} ${type} ${disabled} button`}
                to={to}>
                {children}
            </Link>
        );
    };

*/


/*
import React from 'react';
import { useAuth } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({children, props}) => {
    const { theme, type, link, authLink, text, authText, icon } = props
    const { currentUser } = useAuth();

    return (
        <Link className={`button button--${theme}-${type}`} 
            to={!currentUser 
                ?   authLink
                :   link
            }>
            {!currentUser 
                ?   authText
                :   text
            }
            {icon 
                ?   <svg 
                        className={`button__icon button__icon--${theme}`}
                        viewBox="0 0 24 24">
                        <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                    </svg>
                :   <></>
            }
            {children}
        </Link>
    );
};

export default Button;

*/