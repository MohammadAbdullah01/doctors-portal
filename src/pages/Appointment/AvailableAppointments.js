import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import TreatmentModal from './TreatmentModal';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, "PP")
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])
    const { isLoading, error, data: services, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div >
            <h2 className='text-center text-secondary  text-xl'>Available appointments {date && format(date, 'PP')}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {services?.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                ></Service>)}
            </div>
            {treatment && <TreatmentModal
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}
                refetch={refetch}
            ></TreatmentModal>}
        </div>
    );
};

export default AvailableAppointments;