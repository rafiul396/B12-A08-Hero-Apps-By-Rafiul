import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import { toast } from 'react-toastify';


const InstalledApp = ({ app, uninstallApp }) => {
    const { image, ratingAvg, downloads, title, size, id } = app;
    const uninstalledAlert = () => {
            toast(`Yahoo ⚡ !! ${title} uninstalled from your Device`)
        }
    

    return (
        <div className='flex justify-between items-center bg-base-100 rounded-xl p-4'>
            <div className='flex items-center gap-4'>
                <img className='md:w-[100px] w-[80px] rounded-xl' src={image} alt="" />
                <div className='space-y-4'>
                    <h4 className='text-xl'>
                        {title}
                    </h4>
                    <div className='flex justify-between space-x-5'>
                        <span className='text-[#00D390] flex items-center gap-2'>
                            <img className='md:w-[16px] w-[12px] md:h-[16px] h-[12px]' src={downloadIcon} alt="" /><span className='md:text-[16px] text-xs'>{downloads}</span>
                        </span>
                        <span className='text-[#FF8811] flex items-center gap-2'>
                            <img className='md:w-[16px] w-[12px] md:h-[16px] h-[12px]' src={ratingIcon} alt="" /><span className='md:text-[16px] text-xs'>{ratingAvg}</span>
                        </span>
                        <span className='text-[#627382] md:text-[16px] text-xs flex items-center gap-2'>
                            {size}MB
                        </span>
                    </div>
                </div>
            </div>
            <div className='text-center lg:text-start'>
                <button onClick={() => {
                    uninstallApp(id);
                    uninstalledAlert();
                }} className='btn font-medium border-none text-[#ffffff] bg-[#00D390] py-2 px-3 rounded-lg'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApp;