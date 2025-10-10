import React from 'react';
import Container from '../components/layout/Container';
import notFound from '../assets/error-404.png'
import { Link } from 'react-router';

const Notfound = () => {
    return (
        <div>
            <title>Error - 404</title>
            <Container>
                <div className='h-[100vh] flex flex-col justify-center items-center'>
                <div>
                    <img className='w-[300px]' src={notFound} alt="" />
                </div>
                <div className='mt-5'>
                    <h3 className='text-3xl text-center font-semibold mb-1'>
                        Oops, page not found!
                    </h3>
                    <p className='text-center text-xs md:text-lg text-[#627382]'>
                        The page you are looking for is not available.
                    </p>
                </div>
                <div className='flex justify-center pt-3'>
                    <Link to="/" className='btn px-8 border-none shadow-none gradient-bg text-white'>
                        Go Back!
                    </Link>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Notfound;