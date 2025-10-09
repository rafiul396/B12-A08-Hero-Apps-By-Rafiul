import React, { useState } from 'react';
import Container from '../components/layout/Container';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';
import { useParams } from 'react-router';
import useApp from '../hooks/useApp';
import AppNotFound from '../errors/AppNotFound';
import { toast } from 'react-toastify';
import Chart from '../recharts/Chart';
import { loadInstalledApps, updatedList } from '../utilize/localStorage';
import Loaderforapp from '../loader/Loaderforapp';

const Appdetails = () => {
    const [showInstalled, setShowInstalled] = useState(() => loadInstalledApps());

    const { apps, loading } = useApp();
    const { appId } = useParams();
    const singleApp = apps.find(app => app.id === parseInt(appId));
    if(loading){
        return <Loaderforapp />
    }
    const { title, downloads, ratingAvg, image, size, companyName, description, id } = singleApp;
    const matchingApp = showInstalled.find(element => {
                                           return element.id === id    
                                        })

    const installedAlert = () => {
        toast(`Yahoo ⚡ !! ${title} with
            Reminder Installed Successfully`)
    }

    // const setInstalledAppsInLS = () => {
    //     const getInstalledApp = JSON.parse(localStorage.getItem('installed'))
    //     let updatedList = [];
    //     if(getInstalledApp){
    //         const isDuplicate = getInstalledApp.some(dup => dup.id === singleApp.id);
    //         if(isDuplicate){
    //             return toast('Sorry')
    //         }
    //         updatedList = [...getInstalledApp, singleApp]
    //     }else{
    //         updatedList.push(singleApp)
    //     }
    //     localStorage.setItem('installed', JSON.stringify(updatedList))
    // }


    return (
        <section>
            <Container>
                <div className='lg:grid lg:grid-cols-12 lg:gap-6 flex flex-col justify-center lg:justify-start rounded-xl pt-20'>
                    <div className='lg:h-[300px] xl:h-[430px] xl:w-[450px] bg-[#13131310] rounded-xl lg:col-span-4 p-10 m-5 lg:m-0 lg:p-6'>
                        <img className='h-full w-full rounded-xl' src={image} alt="" />
                    </div>
                    <div className='lg:col-span-8'>
                        <div className='text-[#131313] flex flex-col justify-evenly h-full text-base space-y-6 lg:space-y-0'>
                            <div className='space-y-1 text-center lg:text-start'>
                                <h1 className='playfair-display text-3xl font-semibold'>{title}</h1>
                                <p className='text-[#13131390] font-medium'>Developed by <span className='gradient-text'>{companyName}</span></p>
                            </div>

                            <div className="border border-[#13131310]"></div>

                            <div className='flex gap-15 justify-evenly lg:justify-start'>
                                <div className='space-y-2'>
                                    <img className='w-[30px]' src={downloadIcon} alt="" />
                                    <p className='lg:text-[14px] text-xs text-[#001931]'>Download</p>
                                    <h2 className='lg:text-3xl text-2xl font-bold text-[#001931]'>{downloads}</h2>
                                </div>
                                <div className='space-y-2'>
                                    <img className='w-[30px]' src={ratingIcon} alt="" />
                                    <p className='lg:text-[14px] text-xs text-[#001931]'>Average Ratings</p>
                                    <h2 className='lg:text-3xl text-2xl font-bold text-[#001931]'>4.9</h2>
                                </div>
                                <div className='space-y-2'>
                                    <img className='w-[30px]' src={reviewIcon} alt="" />
                                    <p className='lg:text-[14px] text-xs text-[#001931]'>Total Reviews</p>
                                    <h2 className='lg:text-3xl text-2xl font-bold text-[#001931]'>{ratingAvg}</h2>
                                </div>
                            </div>
                            <div className='text-center lg:text-start'>
                                <button disabled={matchingApp} onClick={() => {
                                        updatedList(singleApp);
                                        setShowInstalled(prev => [...prev, singleApp]);
                                        installedAlert();

                                }} className={`${!matchingApp && 'active:scale-95'} font-medium border-none text-[#ffffff] bg-[#00D390] 
                                disabled:bg-[#00D390] py-2 px-10 rounded-lg ${!matchingApp && 'skeleton'} cursor-pointer [&:disabled]:cursor-not-allowed`}>
                                    {
                                        matchingApp ? 'Installed' : `Install Now (${size} MB)`
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-[#13131310] my-8"></div>
                <div>
                    <Chart singleApp={singleApp}/>
                </div>
                <div className="border border-[#13131310] mt-15 mb-5" ></div>
                <div>
                    <h2>Description</h2>
                    <p className='text-xs md:text-lg text-[#627382]'>
                        {description}
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default Appdetails;