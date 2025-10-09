import React from 'react';


const SkeletonLoader = ({ count = 8 }) => {
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4'>
            {Array.from({ length: count }).map((_, i) => {
                return (
                    <div key={i} className="flex flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                )
            })}
        </div >
    )
};

export default SkeletonLoader;