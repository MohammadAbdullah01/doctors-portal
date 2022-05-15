import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { slots, name } = service;
    return (
        <div className="card  lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title mx-auto">{name}</h2>
                {slots.length ?
                    <span>{slots[0]}</span> :
                    <span className='text-red-500'>No slots available </span>
                }
                <p>
                    {slots.length ?
                        slots.length + " spaces available" : slots.length == 0 ? "0 space available" : slots.length + "spaces available"
                    }
                </p>
                <div className="card-actions justify-center">
                    {/* <button onClick={() => setTreatment(service)} disabled={!slots.length} className="btn btn-secondary text-white">BOOK APPOINTMENT</button> */}
                    <label htmlFor="booking-modal" onClick={() => setTreatment(service)} disabled={!slots.length} className="btn btn-secondary text-white">open modal</label>
                </div>
            </div>
        </div>
    );
};

export default Service;