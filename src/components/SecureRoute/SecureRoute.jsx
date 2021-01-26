import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

function SecureRoute({ component: Component, ...rest }) {
    const { currentUser, verified } = useAuth();

    return (
        <Route 
            {...rest}
            render={props => {
                return (currentUser && verified)
                    ?   <Component {...props} />
                    :   <Redirect to="/dashboard" />
            }}
        >
        </Route>
    );
}

export default SecureRoute;