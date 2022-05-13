import React from 'react';
import { format } from 'date-fns';

const TreatmentModal = ({ setTreatment, treatment, date }) => {
    const { name, slots } = treatment || {};
    const handlingBooking = event => {
        event.preventDefault()
        setTreatment(null)

        const name = event.target.name.value;
        const time = event.target.time.value;
        console.log(name, time)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">

                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handlingBooking} className='grid grid-cols-1 gap-3 mt-2 justify-items-center'>
                        <input type="text" disabled name='date' value={format(date && date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='time' class="select select-bordered w-full max-w-xs">
                            {slots.map(slot => <option>{slot}</option>)}
                        </select>
                        <input type="email" name='' placeholder=" Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="input input-bordered w-full max-w-xs cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TreatmentModal;