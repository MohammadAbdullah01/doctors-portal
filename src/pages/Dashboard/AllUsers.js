import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import UserRow from './UserRow';

const AllUsers = () => {
    const { isLoading, data: users, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/users', {
            method: "get",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <h1 className='text-pink-500 my-3 text-2xl font-bold'>
                All Users
            </h1>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;