import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import TreatmentModal from './TreatmentModal';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
            <h2 className='text-center text-secondary  text-xl'>Available appointments {date && format(date, 'PP')}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                ></Service>)}
            </div>
            {treatment && <TreatmentModal
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}
            ></TreatmentModal>}
        </div>
    );
};

export default AvailableAppointments;