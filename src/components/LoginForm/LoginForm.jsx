import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { withRouter, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import "../../pages/Login/Login.scss";

// Assets
import alert from '../../assets/icons/danger.svg';

// Validation Checks
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address provided';
    }
    if (!values.password) { errors.password = 'Password is required' }
    return errors;
}

const LoginForm = () => {
    const { login } = useAuth(); 
    const history = useHistory();
    const [ error, setError ] = useState(null);
    const initialValues = {
        email: '',
        password: '',
        save: false
    }

    const handleLogin = async (values, { setSubmitting }) => {
        const { email, password } = values;

        try {
            await login(email, password)
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
            onSubmit={handleLogin}>
            {({values, errors, touched, handleChange, handleSubmit, isSubmitting}) => {
                const { email, password } = errors;
                const emailErrors = email && touched.email;
                const passwordErrors = password && touched.password;

                return (
                    <form 
                        className="login__form"
                        onSubmit={handleSubmit}>
                        <h2 
                            className="login__header">
                            Sign in to your account
                        </h2>
                        {error && 
                            <div className="login__status">
                                <img 
                                    className="login__alert"
                                    src={alert}
                                />
                                {error.message}
                            </div>
                        }
                        <div className="login__field">
                            <label 
                                className={'login__label ' + ( emailErrors ? 'login__label--error' : '')}
                                htmlFor="email">
                                Email
                            </label>
                            <input 
                                className={'login__input ' + ( emailErrors ? 'login__input--error' : '')}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                            />
                            <ErrorMessage 
                                name="email">
                                {msg => <span className="login__message">{msg}</span>}
                            </ErrorMessage>
                        </div>
                        <div className="login__field">
                            <div className="login__labels">
                                <label 
                                    className={'login__label ' + ( passwordErrors ? 'login__label--error' : '')}
                                    htmlFor="password">
                                    Password
                                </label>
                                <a
                                    className="login__forgot"
                                    htmlFor="password">
                                    Forgot your password?
                                </a>
                            </div>
                            <input 
                                className={'login__input ' + ( passwordErrors ? 'login__input--error' : '')}
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                            />
                            <ErrorMessage 
                                name="password">
                                {msg => <span className="login__message">{msg}</span>}
                            </ErrorMessage>
                        </div>
                        <div className="login__toggle">
                            <input 
                                className="login__checkbox"
                                type="checkbox"
                                onChange={handleChange}
                                name="confirm"
                                id="confirmToggle"
                                checked={values.confirm}
                                value={values.confirm}
                            />
                            <label 
                                className="login__confirmation" 
                                forHTML="confirm">
                                Stay signed in
                            </label>
                        </div>
                        <button 
                            className="login__button"
                            type="submit"
                            disabled={isSubmitting}>
                            Continue
                        </button>
                    </form>
                )
            }}
        </Formik>
    );
};

export default withRouter(LoginForm);