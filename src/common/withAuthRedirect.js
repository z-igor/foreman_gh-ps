import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuthRedirect = (Component) => {

    let Container = (props) => {
        let isAuth = useSelector(state => state.authReducer.auth);

        if (isAuth) {
            return <Redirect to = '/' / >
        }

        return <Component {...props} />
    }

    return Container;
}

export default withAuthRedirect;