import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';

import * as actions from '../../store/actions';

const Logout: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(actions.logout());
        return () => {};
    }, []);

    return <Redirect to="/"/>;
}

export default Logout;