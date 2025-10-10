import React from 'react';
import logo from '../assets/logo.png'

const Loaderforapp = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <img className='md:w-[200px] w-[100px] animate-spin' src={logo} />
        </div>
    );
};

export default Loaderforapp;