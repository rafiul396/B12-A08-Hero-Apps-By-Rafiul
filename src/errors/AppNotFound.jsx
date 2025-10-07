import React from 'react';
import appNotFound from '../assets/App-Error.png';
import Container from '../components/layout/Container';

const AppNotFound = () => {
    return (
        <div>
            <Container>
                <div className='h-[100vh] flex flex-col justify-center items-center'>
                <div>
                    <img className='w-[300px]' src={appNotFound} alt="" />
                </div>
                <div className='mt-5'>
                    <h3 className='text-3xl text-center font-semibold mb-1'>
                        OPPS!! APP NOT FOUND
                    </h3>
                    <p className='text-center text-xs md:text-lg text-[#627382]'>
                        The App you are requesting is not found on our system.  please try another apps
                    </p>
                </div>
                <div className='flex justify-center pt-3'>
                    <a href="/" className='btn px-8 border-none shadow-none gradient-bg text-white'>
                        Go Back!
                    </a>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default AppNotFound;