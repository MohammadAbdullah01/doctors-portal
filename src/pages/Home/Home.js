import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import HomeContact from './HomeContact/HomeContact';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <HomeContact></HomeContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;