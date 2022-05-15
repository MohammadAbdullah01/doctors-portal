import React from 'react';
import auth from '../../firebase/firebase.init';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import HomeContact from './HomeContact/HomeContact';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';
import { useAuthState } from 'react-firebase-hooks/auth';


const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div >
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