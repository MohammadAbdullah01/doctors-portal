import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-20 bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='mb-2'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor dolores totam illum similique quibusdam!</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <p>{review.name}</p>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;