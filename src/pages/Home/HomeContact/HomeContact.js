import React from 'react';
import appoinment from '../../../assets/images/appointment.png'
import CommonBtn from '../../Shared/CommonBtn';

const HomeContact = () => {
    return (
        <div
            style={{
                background: `url(${appoinment})`
            }}
            className='mb-5 pb-5'
        >
            <div className='text-center py-5'>
                <h3 className='text-primary text-xl text-center'>Contact Us</h3>
                <h2 className='text-3xl text-center text-white'>Stay Connected with us</h2>
            </div>
            <div>
                <form className='mx-auto w-3/5 lg:w-2/5'>
                    <input className='w-full mb-2 p-2 rounded-md' type="email" name="email" id="email" placeholder='Email' /><br />
                    <input className='w-full mb-2 p-2 rounded-md' type="text" name="text" id="text" placeholder='Subject' /><br />
                    <textarea className='w-full mb-2 p-2 rounded-md' name="textarea" id="textarea" cols="30" rows="10" placeholder='Your message'></textarea><br />
                    <div className='text-center'>
                        <CommonBtn text='submit'></CommonBtn>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HomeContact;