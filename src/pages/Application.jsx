import React from 'react';
import Apps from '../components/Apps/Apps';
import Container from '../components/layout/Container';
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const Application = () => {
    return (
        <main>
            <Container>
                <div className='mt-20 mb-10'>
                    <h3 className='text-3xl text-center font-semibold mb-4'>
                        Our All Applications
                    </h3>
                    <p className='text-center text-xs md:text-lg text-[#627382]'>
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>
                <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mb-4'>
                    <h5 className='font-semibold'>({arr.length}) Apps Found</h5>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4'>
                    {
                        arr.map(app => <Apps />)
                    }
                </div>
            </Container>
        </main>
    );
};

export default Application;