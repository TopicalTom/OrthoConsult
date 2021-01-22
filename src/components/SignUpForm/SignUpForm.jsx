import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { withRouter, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import "../../pages/SignUp/SignUp.scss";

// Validation Checks
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address provided';
    }
    if (!values.location) { errors.location = 'Required' }
    if (!values.name) { errors.name = 'Required' }
    if (!values.password) { errors.password = 'Required' };
    if (!values.confirm) { errors.confirm = 'Must agree to terms' };
    return errors;
}

const SignUpForm = () => {
    const { signup, createClient } = useAuth(); 
    const history = useHistory();
    const [ error, setError ] = useState(null);
    const initialValues = {
        name: '',
        location: '',
        email: '',
        password: '',
        confirm: false
    }

    const handleSignUp = async (values, { setSubmitting }) => {
        const { name, location, email, password, confirm } = values;

        try {
            const { user } = await signup(email, password);
            await createClient(user, { 
                displayName: name, 
                location: location, 
                agreement: confirm
            })
            history.push('/dashboard');
            setSubmitting(false);
        } catch (error) {
            console.log(error);
            setSubmitting(false);
            setError(error);
        }
    }
    
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSignUp}>
            {({values, errors, touched, handleChange, handleSubmit, isSubmitting}) => {
                const { name, email, location, password, confirm } = errors;
                const nameErrors = name && touched.name;
                const emailErrors = email && touched.email;
                const passwordErrors = password && touched.password;
                const locationErrors = location && touched.location;
                const confirmErrors = confirm && touched.confirm;

                return (
                    <form 
                        className="signup__form"
                        onSubmit={handleSubmit}>
                        <h2 
                            className="signup__header">
                            Become a client
                        </h2>
                        {error && 
                            <div className="signup__status">
                                <img 
                                    className="signup__alert"
                                    src={alert}
                                />
                                {error.message}
                            </div>
                        }
                        <div className="signup__field">
                            <label 
                                className={`signup__label signup__label--${nameErrors ? 'error' : 'default'}`}
                                htmlFor="name">
                                Full Name
                            </label>
                            <input 
                                className={`signup__input signup__input--${nameErrors ? 'error' : 'default'}`}
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={values.name}
                            />
                            <ErrorMessage 
                                name="name">
                                {msg => <span className="signup__message">{msg}</span>}
                            </ErrorMessage>
                        </div>
                        <div className="signup__field">
                            <label 
                                className={`signup__label signup__label--${locationErrors ? 'error' : 'default'}`}
                                htmlFor="location">
                                Location
                            </label>
                            <input 
                                className={`signup__input signup__input--${locationErrors ? 'error' : 'default'}`}
                                type="text"
                                name="location"
                                onChange={handleChange}
                                value={values.location}
                            />
                            <ErrorMessage 
                                name="location">
                                {msg => <span className="signup__message">{msg}</span>}
                            </ErrorMessage>
                        </div>
                        <div className="signup__field">
                            <label 
                                className={`signup__label signup__label--${emailErrors ? 'error' : 'default'}`}
                                htmlFor="email">
                                Email
                            </label>
                            <input 
                                className={`signup__input signup__input--${emailErrors ? 'error' : 'default'}`}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                            />
                            <ErrorMessage 
                                name="email">
                                {msg => <span className="signup__message">{msg}</span>}
                            </ErrorMessage>
                        </div>
                        <div className="signup__field">
                            <label 
                                className={`signup__label signup__label--${passwordErrors ? 'error' : 'default'}`}
                                htmlFor="password">
                                Password
                            </label>
                            <input 
                                className={`signup__input signup__input--${passwordErrors ? 'error' : 'default'}`}
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                            />
                            <ErrorMessage 
                                name="password">
                                {msg => <span className="signup__message">{msg}</span>}
                            </ErrorMessage>
                        </div>
                        <div className={'signup__toggle ' + ( confirmErrors ? 'signup__toggle--error' : '')}>
                            <input 
                                className="signup__checkbox"
                                type="checkbox"
                                onChange={handleChange}
                                name="confirm"
                                id="confirmToggle"
                                checked={values.confirm}
                                value={values.confirm}
                            />
                            <label 
                                className="signup__confirmation" 
                                forHTML="confirm">
                                Check here to indicate that you have read and agree to our <a className="signup__link">Terms of Service</a> and <a className="signup__link">Privacy Policy</a>
                            </label>
                        </div>
                        <button 
                            className={'signup__button ' + ( values.confirm ? '' : 'signup__button--disabled')}
                            type="submit"
                            disabled={isSubmitting}>
                            {isSubmitting
                                ?   "Create Account"
                                :   "Create Account"
                            }
                        </button>
                    </form>
                )
            }}
        </Formik>
    );
};

export default withRouter(SignUpForm);

/*
import React, { useState } from 'react';
import { Formik } from 'formik';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import "../../pages/SignUp/SignUp.scss";

// Components
import Toggle from "../Toggle/Toggle";

// Validation Checks
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address provided';
    }
    if (!values.firstname) { errors.firstname = 'Full name is Required' }
    if (!values.password) { errors.password = 'Password is required' }
    return errors;
}

const SignUpForm = () => {
    const { signup } = useAuth(); 
    const { history } = useHistory();
    const [ error, setError ] = useState(null);
    const initialValues = {
        name: '',
        location: '',
        email: '',
        password: '',
        confirm: false
    }

    const handleSignUp = async (values, { setSubmitting }) => {
        const { name, location, email, password } = values;

        try {
            await signup(name, location, email, password)
            history.push('/dashboard');
            setSubmitting(false);
        } catch (error) {
            console.log(error);
            setSubmitting(false);
            setError(error);
        }
    }
    
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSignUp}>
            {({values, errors, handleChange, handleSubmit, isSubmitting}) => {
                const { name, email, password } = errors;
                return (
                    <form 
                        className="signup__form"
                        onSubmit={handleSubmit}>
                        <h2 
                            className="signup__header">
                            Become a client
                        </h2>
                        <div className="signup__message">
                            {error &&
                                <p>{error.message}</p>
                            }
                        </div>
                        <label 
                            className="signup__label"
                            htmlFor="name">
                            Full Name
                        </label>
                        <input 
                            className={'signup__input ' + ( name ? 'error' : '')}
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                        />
                        <label 
                            className="signup__label"
                            htmlFor="location">
                            Location
                        </label>
                        <input 
                            className="signup__input"
                            type="text"
                            name="location"
                            onChange={handleChange}
                            value={values.location}
                        />
                        <label 
                            className="signup__label"
                            htmlFor="email">
                            Email
                        </label>
                        <input 
                            className={'signup__input ' + ( email ? 'error' : '')}
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        <label 
                            className="signup__label"
                            htmlFor="password">
                            Password
                        </label>
                        <input 
                            className={'signup__input ' + ( password ? 'error' : '')}
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                        />
                        <div className="toggle">
                            <input 
                                className="toggle__input"
                                type="checkbox"
                                onChange={handleChange}
                                name="confirm"
                                id="confirmToggle"
                                checked={values.confirm}
                                value={values.confirm}
                            />
                            <label 
                                className="toggle__option" 
                                forHTML="confirm">
                                Agree to our <a className="toggle__link">Terms of Service</a>
                            </label>
                        </div>
                        <button 
                            className="signup__button"
                            type="submit"
                            disabled={isSubmitting}>
                            Create Account
                        </button>
                        <span className="signup__redirect">
                            Have an account? 
                            <Link
                                to="/login"
                                className="signup__link">
                                Sign in
                            </Link>
                        </span>
                    </form>
                )
            }}
        </Formik>
    );
};

export default SignUpForm;

*/