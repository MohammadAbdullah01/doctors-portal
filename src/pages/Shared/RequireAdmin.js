import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

import useAdmin from '../../hooks/useAdmin';
import LoadingSpinner from './LoadingSpinner';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    const [admin, adminLoading] = useAdmin(user)
    if (loading || adminLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAdmin;