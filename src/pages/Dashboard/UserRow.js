import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "put",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }, {
            method: "put"
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === "failed") {
                    return toast.error("failed to make admin")
                }
                toast("admin made")
                refetch()
            })
    }
    console.log(role)
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role === "admin" || <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove Admin</button></td>
        </tr>

    );
};

export default UserRow;