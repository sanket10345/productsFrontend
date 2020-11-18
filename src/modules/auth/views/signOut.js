import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';
import { logout } from '../auth-action'
import { useDispatch } from 'react-redux';

export default function Logout() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout())      
    },[]);

    return <Redirect to="/" />
}
