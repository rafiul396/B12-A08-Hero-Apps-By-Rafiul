import React from 'react';
import logo from '../assets/logo.png'

const Loaderforapp = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <img className='w-[200px] animate-spin' src={logo} />
        </div>
    );
};

export default Loaderforapp;