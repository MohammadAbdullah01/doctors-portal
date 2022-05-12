import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className='my-20'>
            <h3 className='text-primary text-center text-xl  font-bold'>OUR SERVICES</h3>
            <h1 className='text-accent text-center text-3xl'>Services we provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <Service img={fluoride} cardTitle='Fluoride Treatment' cardText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the "></Service>
                <Service img={cavity} cardTitle='Cavity Filling' cardText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the "></Service>
                <Service img={whitening} cardTitle='Teeth Whitening' cardText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></Service>
            </div>
        </div>
    );
};

export default Services;