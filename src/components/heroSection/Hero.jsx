import React from 'react';
import googleStore from '../../assets/playstore.png';
import appStore from '../../assets/appstore.png';
import banner from '../../assets/hero.png';

const Hero = () => {
    return (
        <section className='space-y-10 mt-10 md:mt-20'>
            <div className='space-y-4'>
                <h1 className='text-center text-4xl md:text-6xl font-bold text-[#001931]'>
                    We Build <br />
                    <span className='gradient-text'>Productive</span> Apps
                </h1>
                <p className='text-center text-xs md:text-lg text-[#627382]'>
                    At BDSOFT.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
            </div>
            <div className='flex gap-4 justify-center'>
                <a className='btn' href="https://play.google.com/" target='_blank'>
                    <img src={googleStore} alt="" />
                    Google Play
                </a>
                <a className='btn' href="https://www.apple.com/app-store/" target='_blank'>
                    <img src={appStore} alt="" />
                    App Store
                </a>
            </div>
            <div className='flex justify-center'>
                <img src={banner} alt="" />
            </div>
        </section>
    );
};

export default Hero;