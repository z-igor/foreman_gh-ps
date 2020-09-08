import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import { useSelector } from 'react-redux';

const with404Redirect = (Component) => {

    let Container = ({
        ...props
    }) => {
        // let isAuth = useSelector(state => state.authReducer.auth);
        let totalCountTeams = useSelector(state => state.teamReducer.teamData.length);

        if (props.match.params.id >= totalCountTeams) {
            return <Redirect to = '/404' / >
        }

        return <Component {
            ...props
        }
        />
    }

    return Container;
}

export default with404Redirect;