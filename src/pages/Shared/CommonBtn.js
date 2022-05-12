import React from 'react';

const CommonBtn = ({ text }) => {
    return (
        <button className="btn text-white btn-primary bg-gradient-to-r from-secondary to-primary">{text}</button>
    );
};

export default CommonBtn;