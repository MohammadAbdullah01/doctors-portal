import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const MyAppointments = () => {
    const [myAppointments, setMyAppointments] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/bookings?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setMyAppointments(data))
        }
    }, [user])
    console.log(myAppointments)
    return (
        <div>
            <h1 className='text-pink-500 my-3 text-2xl font-bold'>
                My Appointments
            </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead >
                        <tr className='text-center'>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myAppointments?.map(appointment =>
                            <tr className='text-center' key={appointment._id}>
                                <th></th>
                                <td>{appointment.userName}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.treatment}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;