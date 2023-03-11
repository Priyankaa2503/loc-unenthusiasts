import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
export const Post=()=>{
    const [text, setText] = useState('View More');
    const [isShown, setIsShown] = useState(false);
    function handleClick() {
        setIsShown(current => !current);
        if(text === 'View More'){
          setText('View Less');
        }else{
          setText('View More');
        }
    }

    return(
        <div className='mt-10 ml-10 bg-white p-6 w-[640px]'>
            <div className="flex flex-row gap-2"><AccountCircleIcon/><span>Username</span></div>
            <img src={"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWZnXA?ver=0b14"} className='w-[200px] md:w-[652px] md:h-[360px] mt-3'></img>
            <div className='flex flex-col justify-center mt-3'>       
                <div className='flex flex-row justify-between'>
                    <div className='text-[#2f2e2e] font-grotesk'><FavoriteIcon/><span className='ml-1'>25</span></div>
                    <button className='text-[#2f2e2e] font-grotesk' onClick={handleClick}>{text}</button>
                </div>
                {isShown &&(
                <div className='flex flex-col'>
                    <div className='text-[#2f2e2e] mt-2 text-xl font-playfair'>description</div>
                    <p className='text-sm text-[#2f2e2e] font-grotesk mt-2'>tags</p>
                </div>
                )}
            </div>
        </div>
    )
}