import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import { Link } from 'react-router';

const Apps = ({ app }) => {
    const { title, downloads, ratingAvg, image, id } = app;

    return (
        <Link to={`/appdetails/${id}`}>
            <div className='bg-base-100 p-4 rounded-xl space-y-2'>
                <img className='rounded-xl bg-amber-200 p-3' src={image} alt="" />
                <h4 className='text-[15px]'>{title}</h4>
                <div className='flex justify-between'>
                    <span className='text-[#00D390] flex items-center gap-2'>
                        <img className='w-[13px] h-[13px]' src={downloadIcon} alt="" /><span className='text-[13px]'>{downloads}</span>
                    </span>
                    <span className='text-[#FF8811] flex items-center gap-2'>
                        <img className='w-[13px] h-[13px]' src={ratingIcon} alt="" /><span className='text-[13px]'>{ratingAvg}</span>
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default Apps;