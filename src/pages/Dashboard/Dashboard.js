import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import useAdmin from '../../hooks/useAdmin'

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    console.log(admin)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='review'>Reviews</Link></li>
                    <li><Link to='history'>History</Link></li>
                    {admin && <li><Link to='users'>All Users</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;