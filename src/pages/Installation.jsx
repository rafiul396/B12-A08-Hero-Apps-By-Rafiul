import React, { useEffect, useState } from 'react';
import Container from '../components/layout/Container';
import InstalledApp from '../components/Apps/InstalledApp';
import NoAppIns from '../errors/NoAppIns';
import { loadInstalledApps, removeApps } from '../utilize/localStorage';

const Installation = () => {
    const [installApp, setInstalledApp] = useState(() => loadInstalledApps());
    const [sorted, setSorted] = useState('Sort by Size');

    // useEffect(() => {
    //     const installedApp = JSON.parse(localStorage.getItem('installed'));
    //     if(installedApp){
    //         setInstalledApp(installedApp)
    //     }
    // }, [])

    const sortedApps = (
        () => {
        if(sorted === 'lowToHigh'){
            return [...installApp].sort((a, b) => a.size - b.size)
        }else if(sorted === 'highToLow'){
            return [...installApp].sort((a, b) => b.size - a.size)
        }else {
            return installApp;
        }
    }
    )()

    const uninstallApp = (appId) => {
            //remove from local storage
            removeApps(appId);
            // instant update
            setInstalledApp(prev => prev.filter(p => p.id !== appId));
        }

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
                    <h5 className='font-semibold'>{installApp.length} Apps Found</h5>
                    {/* sorting apps by its size */}
                    <select defaultValue={sorted} onChange={(e) => setSorted(e.target.value)} className="select w-[130px]">
                        <option value='none'>Sort by Size</option>
                        <option value='lowToHigh'>Low - High</option>
                        <option value='highToLow'>High - Low</option>
                    </select>
                </div>
                <main className='pb-20 space-y-4'>
                    {
                        !sortedApps.length ? <NoAppIns/> : sortedApps.map(app => <InstalledApp key={app.id} uninstallApp={uninstallApp} app={app}/>)
                    }
                    
                </main>
            </Container>
        </main>
    );
};

export default Installation;