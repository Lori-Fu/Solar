import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { UserAuthE } from '../Firebase/AuthContextEmail';
import { UserAuthG } from '../Firebase/AuthContextGoogle';

const PrivateRoute = () => {
    const { userE } = UserAuthE();
    const { userG } = UserAuthG();
    const auth = userE || userG;
    return (
        
        auth !== null ? <Outlet/> : <Navigate to='/'/>
    )
}

export default PrivateRoute