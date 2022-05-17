import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const TreatmentModal = ({ setTreatment, treatment, date, refetch }) => {
    const formattedDate = format(date, 'PP')
    const [user, loading, error] = useAuthState(auth);
    const { _id: id, name, slots } = treatment || {};
    const handlingBooking = event => {
        const slot = event.target.slot.value;
        event.preventDefault()
        const booking = {
            treatmentId: id,
            treatment: treatment.name,
            slot,
            patient: user?.email,
            patientName: event.target.name.value,
            date: formattedDate,
            phone: event.target.phone.value
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`booking success on ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`already have an appointment on ${data.data?.date} at ${data.data?.slot}`)
                }
            }
            )
        refetch()

        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handlingBooking} className='grid grid-cols-1 gap-3 mt-2 justify-items-center'>
                        <input type="text" disabled name='date' value={format(date && date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {slots.map((slot, index) => <option key={index}>{slot}</option>)}
                        </select>
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="input input-bordered w-full bg-primary text-white max-w-xs cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TreatmentModal;