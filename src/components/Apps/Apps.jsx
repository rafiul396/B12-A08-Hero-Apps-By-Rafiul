import React from 'react';
import demoApp from '../../assets/demo-app (1).webp';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';

const Apps = () => {
    return (
        
            <div className='bg-base-100 p-4 rounded-xl space-y-2'>
                <img className='rounded-xl' src={demoApp} alt="" />
                <h4 className='text-[15px]'>Forest: Focus for Productivity</h4>
                <div className='flex justify-between'>
                    <span className='text-[#00D390] flex items-center gap-2'>
                        <img className='w-[13px] h-[13px]' src={downloadIcon} alt="" /><span className='text-[13px]'>9M</span>
                    </span>
                    <span className='text-[#FF8811] flex items-center gap-2'>
                        <img className='w-[13px] h-[13px]' src={ratingIcon} alt="" /><span className='text-[13px]'>5</span>
                    </span>
                </div>
            </div>
    );
};

export default Apps;