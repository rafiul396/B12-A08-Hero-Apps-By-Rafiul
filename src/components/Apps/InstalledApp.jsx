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
                <img className='w-[100px] rounded-xl' src={image} alt="" />
                <div className='space-y-4'>
                    <h4 className='text-xl'>
                        {title}
                    </h4>
                    <div className='flex justify-between space-x-5'>
                        <span className='text-[#00D390] flex items-center gap-2'>
                            <img className='w-[16px] h-[16px]' src={downloadIcon} alt="" /><span className='text-[16px]'>{downloads}</span>
                        </span>
                        <span className='text-[#FF8811] flex items-center gap-2'>
                            <img className='w-[16px] h-[16px]' src={ratingIcon} alt="" /><span className='text-[16px]'>{ratingAvg}</span>
                        </span>
                        <span className='text-[#627382] flex items-center gap-2'>
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