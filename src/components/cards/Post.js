import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { app, database, storage } from '../firebaseConfig'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useRazorpay from 'react-razorpay';
import DeleteIcon from '@mui/icons-material/Delete';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";

import { collection, addDoc, getDocs,getDoc, doc, updateDoc, deleteDoc ,onSnapshot,query,where} from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const Post=({id,imageurl,caption,name,likes})=>{

    const [clicked,setclicked]=useState(0);
    const [text, setText] = useState('View More');
    const [isShown, setIsShown] = useState(false);
  const Razorpay = useRazorpay();

  const handlePayment = async (key,name) => {
    // const order = await createOrder(params); //  Create order on your backend
  
    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: name,
      description: "Buying photo",
      image: "https://example.com/your_logo",
      // order_id: "sdgvgs", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: async function (response) {
        alert(response.razorpay_payment_id);
        const docRef = doc(database, "users", id);
const docSnap = await getDoc(docRef);
console.log(docSnap.data());
       
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
        
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const rzp1 = new Razorpay(options);
  
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  
    rzp1.open();
  };
   
    const [data,setdata]=useState({});
    useEffect(()=>{
        const unsub = onSnapshot(
            doc(database, "images", id), 
            { includeMetadataChanges: true }, 
            (doc) => {
                console.log(doc.data(),'asgdargsd');
                setdata({...doc.data()});
            });

    },[clicked])
    useEffect(()=>{
        const unsub = onSnapshot(
            doc(database, "images", id), 
            { includeMetadataChanges: true }, 
            (doc) => {
                console.log(doc.data(),'asgdargsd');
                setdata({...doc.data()});
            });

    },[])
   
        
    
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
        <div  className='mt-10 ml-10 bg-white p-6 w-[640px]'>
            <div className="flex flex-row gap-2"><AccountCircleIcon/><span>{data.name}</span></div>
            <img id='post' src={imageurl} className='w-[200px] md:w-[652px] md:h-[360px] mt-3'></img>
            <div className='flex flex-col justify-center mt-3'>       
                <div className='flex flex-row justify-between'>
                    <div onClick={handleLike} className='text-[#2f2e2e] font-grotesk'><FavoriteIcon/><span className='ml-1'>{data.likes}</span></div>
                    <div className='text-[#2f2e2e] font-grotesk' onClick={handleClick} style={{cursor:"pointer"}}>View More<ArrowDropDownIcon/></div>
                </div>
                {isShown &&(
                <div className='flex flex-col'>
                    <div className='text-[#2f2e2e] mt-2 text-xl font-playfair'>{data.caption}</div>
                    <div className='text-[#2f2e2e] mt-2 text-xl font-playfair justify-between flex flex-row'>
                        <p className='text-m text-[#2f2e2e] font-grotesk mt-2 flex gap-2  '>{data.tags.map((item)=>{return<p class="bg-transparent  text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded">
 # {item}
</p> })}</p>
                        <  ShoppingCartIcon onClick={()=>{handlePayment("rzp_test_Pw7oOZCGeCRVYw",data.name)}} />
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}