import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

import Home from '../pages/home';
import Signup from '../pages/signup';
import Test from '../pages/test';

export default function Routes() {
    const { dataContext } = useContext(AuthContext);
    return (
        dataContext.uid ? <Home /> : <Signup />
        // <Test/>
    )
}