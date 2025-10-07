import React from 'react';
import Container from '../layout/Container';

const Trusted = () => {
    return (
        <section className='text-white gradient-bg py-20'>
            <Container>
                <h2 className='text-center text-3xl md:text-5xl font-semibold mb-10 md:mb-20'>
                    Trusted by Millions, Built for You
                </h2>
                <div className='md:flex space-y-10 md:space-y-0 justify-evenly'>
                    <div className='flex flex-col items-center gap-4 text-[#ffffff]'>
                        <p className='text-base'>Total Downloads</p>
                        <span className='text-6xl font-bold'>29.6M</span>
                        <p className='text-base'>21% more than last month</p>
                    </div>
                    <div className='flex flex-col items-center gap-4 text-[#ffffff]'>
                        <p className='text-base'>Total Reviews</p>
                        <span className='text-6xl font-bold'>906K</span>
                        <p className='text-base'>46% more than last month</p>
                    </div>
                    <div className='flex flex-col items-center gap-4 text-[#ffffff]'>
                        <p className='text-base'>Active Apps</p>
                        <span className='text-6xl font-bold'>132+</span>
                        <p className='text-base'>31 more will Launch</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Trusted;