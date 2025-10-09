import React from 'react';
import Container from '../layout/Container';
import Apps from './Apps';
import useApp from '../../hooks/useApp';
import Loaderforapp from '../../loader/Loaderforapp';

const TrendingApps = () => {
    const {apps} = useApp();
    // console.log(apps);
    
    return (
        <main>
            <Container>
                <div className='mt-20 mb-10'>
                    <h3 className='text-3xl text-center font-semibold mb-4'>
                        Trending Apps
                    </h3>
                    <p className='text-center text-xs md:text-lg text-[#627382]'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4'>
                    {
                        apps.slice(0, 8).map(app => <Apps key={app.id} app={app}/>)
                    }
                </div>
                <div className='flex justify-center py-10'>
                    <a href="/apps" className='btn gradient-bg text-white'>
                        Show All
                    </a>
                </div>
            </Container>
        </main>
    );
};

export default TrendingApps;