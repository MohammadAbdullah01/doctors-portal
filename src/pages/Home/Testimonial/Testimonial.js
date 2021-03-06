import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';
const reviews = [
    { _id: 1, name: "jack herry", review: "", location: "california", img: people1 },
    { _id: 2, name: "jack herry", review: "", location: "california", img: people2 },
    { _id: 3, name: "jack herry", review: "", location: "california", img: people3 }
]
const Testimonial = () => {
    return (
        <div className='my-20'>
            <div className='flex justify-between '>
                <div>
                    <h2 className='text-primary text-xl'>Testimonial</h2>
                    <h1 className='text-3xl'>What our patients say</h1>
                </div>
                <div>
                    <img className='w-16 lg:w-[156px]' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {reviews.map(review => <Review key={review._id} review={review}></Review>)}
            </div>
        </div>
    );
};

export default Testimonial;