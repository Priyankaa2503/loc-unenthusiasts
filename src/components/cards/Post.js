import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { app, database, storage } from '../firebaseConfig'
import DeleteIcon from '@mui/icons-material/Delete';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";

import { collection, addDoc, getDocs,getDoc, doc, updateDoc, deleteDoc ,onSnapshot,query,where} from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const Post=({id,imageurl,caption,name,likes})=>{
    const [data,setdata]=useState({});
    
    const unsub = onSnapshot(
        doc(database, "images", id), 
        { includeMetadataChanges: true }, 
        (doc) => {
            console.log(doc.data(),'asgdargsd');
            setdata({...doc.data()});
        });
        
    const [clicked,setclicked]=useState(0);
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

    function handleLike(){
        if(clicked===0){
            setclicked(1);
        const doctoupdate = doc(database, 'images', id)
        updateDoc(doctoupdate, {
          likes:data.likes+1
        })
        // likes++;
        
}
else{
    setclicked(0);
    const doctoupdate = doc(database, 'images', id)
    updateDoc(doctoupdate, {
      likes:data.likes-1
    })
    // likes--;
   


}
    }

    return(
        <div className='mt-10 ml-10 bg-white p-6 w-[640px]'>
            <div className="flex flex-row gap-2"><AccountCircleIcon/><span>{data.name}</span></div>
            <img src={imageurl} className='w-[200px] md:w-[652px] md:h-[360px] mt-3'></img>
            <div className='flex flex-col justify-center mt-3'>       
                <div className='flex flex-row justify-between'>
                    <div onClick={handleLike} className='text-[#2f2e2e] font-grotesk'><FavoriteIcon/><span className='ml-1'>{data.likes}</span></div>
                    <div className='text-[#2f2e2e] font-grotesk' onClick={handleClick}>View More<ArrowDropDownIcon/></div>
                </div>
                {isShown &&(
                <div className='flex flex-col'>
                    <div className='text-[#2f2e2e] mt-2 text-xl font-playfair'>{data.caption}</div>
                    <p className='text-sm text-[#2f2e2e] font-grotesk mt-2'>tags</p>
                    <DeleteIcon/>
                </div>
                )}
            </div>
        </div>
    )
}