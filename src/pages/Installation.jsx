import React from 'react';
import Container from '../components/layout/Container';
import InstalledApp from '../components/Apps/InstalledApp';
const apps = [1,2,3];

const Installation = () => {
    return (
        <main>
            <Container>
                <div className='mt-20 mb-10'>
                    <h3 className='text-3xl text-center font-semibold mb-4'>
                        Your Installed Apps
                    </h3>
                    <p className='text-center text-xs md:text-lg text-[#627382]'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>
                <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mb-4'>
                    <h5 className='font-semibold'>1 Apps Found</h5>
                    <select defaultValue="Sort by Size" className="select w-[130px]">
                        <option disabled={true}>Sort by Size</option>
                        <option>Low - High</option>
                        <option>High - Low</option>
                    </select>
                </div>
                <main className='pb-20 space-y-4'>
                    {
                        apps.map(app => <InstalledApp/>)
                    }
                    
                </main>
            </Container>
        </main>
    );
};

export default Installation;