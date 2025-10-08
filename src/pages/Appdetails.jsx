import React from 'react';
import Container from '../components/layout/Container';
import demoAppImg from '../assets/demo-app (1).webp';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';

const Appdetails = () => {
    return (
        <section>
            <Container>
                <div className='lg:grid lg:grid-cols-12 lg:gap-6 flex flex-col justify-center lg:justify-start rounded-xl pt-20'>
                    <div className='lg:h-[300px] rounded-xl lg:col-span-4 p-10 lg:p-0'>
                        <img className='h-full w-full rounded-xl' src={demoAppImg} alt="" />
                    </div>
                    <div className='lg:col-span-8'>
                        <div className='text-[#131313] flex flex-col justify-evenly h-full text-base space-y-6 lg:space-y-0'>
                            <div className='space-y-1 text-center lg:text-start'>
                                <h1 className='playfair-display text-3xl font-semibold'>Md. Rafiul Islam</h1>
                                <p className='text-[#13131390] font-medium'>Developed by <span className='gradient-text'>productive.io</span></p>
                            </div>

                            <div className="border border-[#13131310]"></div>

                            <div className='flex gap-15 justify-evenly lg:justify-start'>
                                <div className='space-y-2'>
                                    <img className='w-[30px]' src={downloadIcon} alt="" />
                                    <p className='text-[14px] text-[#001931]'>Download</p>
                                    <h2 className='text-3xl font-bold text-[#001931]'>8M</h2>
                                </div>
                                <div className='space-y-2'>
                                    <img className='w-[30px]' src={ratingIcon} alt="" />
                                    <p className='text-[14px] text-[#001931]'>Average Ratings</p>
                                    <h2 className='text-3xl font-bold text-[#001931]'>4.9</h2>
                                </div>
                                <div className='space-y-2'>
                                    <img className='w-[30px]' src={reviewIcon} alt="" />
                                    <p className='text-[14px] text-[#001931]'>Total Reviews</p>
                                    <h2 className='text-3xl font-bold text-[#001931]'>54K</h2>
                                </div>
                            </div>
                            <div className='text-center lg:text-start'>
                                <button className='btn font-medium border-none text-[#ffffff] bg-[#00D390] py-2 px-3 rounded-lg'>View Details (280MB)</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-[#13131310] my-8"></div>
                <div>

                </div>
                <div className="border border-[#13131310] my-8"></div>
                <div>
                    <h2>Description</h2>
                    <p className='text-xs md:text-lg text-[#627382]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga. Accusamus, repudiandae sed error esse numquam porro! Fugit velit voluptas, dignissimos enim dolorum quod ex nihil consequuntur nemo? Voluptatum placeat, officiis impedit perspiciatis dicta commodi reiciendis distinctio odio sed dignissimos iusto, qui hic. Doloremque fugiat nobis mollitia in voluptatem quaerat.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default Appdetails;