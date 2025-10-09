import React from 'react';

const Loaderforins = ({ count = 3 }) => {
    return (
        <>
        {
            Array.from({ length: count }).map((_, i) => {
                return (
                    <div key={i} className='flex justify-between items-center bg-base-100 rounded-xl p-4'>
                        <div className='flex items-center gap-4'>
                            <div className='w-[100px] h-[100px] rounded-xl skeleton'></div>
                            <div className='space-y-4'>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        </div>
                        <div className='text-center lg:text-start'>
                            <div className='skeleton btn border-none py-1 px-12 rounded-lg'></div>
                        </div>
                    </div>
                )
            })
        }
        </>
    );
};

export default Loaderforins;