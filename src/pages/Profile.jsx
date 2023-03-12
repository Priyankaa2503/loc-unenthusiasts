import React, { useState, useEffect } from 'react'
import ProfilePic from '../assets/profile.png'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ProfileBG } from '../assets/profileBg.jpeg'
import { Post } from '../components/cards/Post'
import { app, database, storage } from '../components/firebaseConfig'
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot, query, where, setDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export const Profile = ({newid,setnewid}) => {
    const [data, setdata] = useState({});
    const auth = getAuth();
    const user = auth.currentUser;
    if(newid===''){
        console.log(user.uid);
        setnewid(user.uid);
    }
    const [fireuser, setfireuser] = useState({})
    const [cardarr,setcardarr]=useState([]);
    console.log(newid);
    useEffect(() => {
        getfireuser();
        getImages();
    }, [newid])
    useEffect(() => {
        getfireuser();
        getImages();
    }, [])

    const getImages= async()=>{
        const collectionRef = collection(database, 'images');
        const nameQuery=query(collectionRef,where("createdby","==",user.uid))
        var arr=[];
          await getDocs(nameQuery)
              .then((res) => {
                console.log(res);
               res.docs.map((item)=>{
                arr.push({array:item.data(),id:item.id});
                console.log(item.id)
               }) 
            })
            setcardarr([...arr]);
    }

    const onChangefile = (e) => {
        let newInput = { [e.target.name]: e.target.files[0] };
        setdata({ ...data, ...newInput })
      }

    const getfireuser = async () => {
        const docRef = doc(database, "users", user.uid);
        const docSnap = await getDoc(docRef);
        setfireuser(docSnap.data())
    }

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value };

        setdata({ ...data, ...newInput });
    }

    const handleUpdate = () => {
        const doctoupdate = doc(database, 'users', user.uid)
        updateDoc(doctoupdate, {
            bio: data.bio,
            type: data.type
        })
    }

    const handleUpdateImage = () => {
        const storageRef = ref(storage, user.uid);

        const uploadTask = uploadBytesResumable(storageRef, data.image)
        uploadTask.on('state_changed',
          (snapshot) => {
          },
          (error) => {
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              console.log('File available at', downloadURL);
              await updateDoc(doc(database, "users", user.uid), {
                imageURL: downloadURL
              })
            });
          });
    }

    return (
        <div>
            <Navbar newid={newid} setnewid={setnewid} />
            <div className="flex flex-row bg-profilebg p-48 h-screen bg-cover">
                <div className="flex flex-col h-[100%] w-[60%] p-6 justify-center">
                    <div className='flex flex-col gap-4 items-center'>
                        {fireuser?.imageURL?<div className=''><img src={fireuser?.imageURL} className="h-[200px] w-[200px] rounded-full shadow-lg shadow-black" /></div>:<label htmlFor="image">
                        <img src={ProfilePic} className="h-[200px] w-[200px] mb-10" />
                        </label>}
                        <input
                        className='hidden'
                            id='image'
                            type="file"
                            placeholder="Upload Photo"
                            onChange={(event) => onChangefile(event)}
                            name="image"
                           
                        />
                         <button className="bg-[#61876E] hover:bg-[#AA5656] border-2  rounded-2xl text-white w-[250px] font-jost py-2 px-4 mt-12 shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out"  onClick={handleUpdateImage}>Update Profile Picture</button>
                        
                        <button className="bg-[#61876E] hover:bg-[#AA5656] border-2  rounded-2xl text-white w-[250px] font-jost py-2 px-4  shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out"><Link to="#gallery">View Gallery</Link></button>
                    </div>
                </div>
                <div className="flex flex-col h-[100%] bg-[#deebe1] shadow-md shadow-black rounded-xl w-[50%] p-8 gap-4">
                    <div className='flex flex-row  justify-start font-ibm text-black text-2xl'>
                        <div className=''>Name:</div>
                        <div className='  '>{user.displayName}</div>
                    </div>
                    <div className='flex flex-row justify-start font-ibm text-black text-2xl'>
                        <div className=''>Email:</div>
                        <div className='  '>{user.email}</div>
                    </div>
                    
                    <div className='flex flex-row  justify-start font-ibm text-black text-2xl'>
                        <div className=''>Bio:</div>
                        {fireuser?.bio ? <div className=''>{fireuser.bio}</div> : <input type='text' className='h-8' onChange={(event) => handleInput(event)} name="bio"></input>}
                    </div>
                    <div className='flex flex-row justify-start font-ibm text-black text-2xl'>
                        <div className=''>Type:</div>
                        {fireuser?.type ? <div className=''>{fireuser.type}</div> : <input type='text' className='h-8' onChange={(event) => handleInput(event)} name="type"></input>}
                       
                    </div>
                    <div className='mt-6'>
                    <button className="bg-[#61876E] hover:bg-[#AA5656] border-2  rounded-2xl text-white w-[250px] font-jost py-2 px-4 mt-12 shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out"  onClick={handleUpdate}>Update Profile</button>
                    </div>
                </div>
            </div>
            {/* <div class=""> */}
  <form class="bg-[#61876E] p-6 shadow-md ">
    <div class="mb-4">
      <label class="block text-black font-bold mb-2" for="caption">
        Caption
      </label>
      <textarea class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="caption" name="caption"></textarea>
    </div>
    <div class="mb-4">
      <label class="block text-black font-bold mb-2" for="caption">
        Description
      </label>
      <textarea class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="caption" name="caption"></textarea>
    </div>
    <div class="mb-4">
      <label class="block text-black font-bold mb-2" for="image">
        Image
      </label>
      <input class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="file" name="image" id="image"></input>
      </div>
    <div class="mb-4">
     
    
      <div class="flex flex-wrap">
  <label for="tags" class="block text-black  font-bold mb-2 mr-2">
    Tags:
  </label>
  <input type="text" name="tags" id="tags" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline" placeholder="Add tag 1"></input>
  <input type="text" name="tags" id="tags" class="w-full px-3 py-2 text-gray-700 mt-2 border rounded-lg focus:outline-none focus:shadow-outline" placeholder="Add tag 2"></input>
</div>

    </div>
    <div class="flex justify-end">
      <button class="bg-[#AA5656]  text-white font-bold py-2 px-4 rounded">
        Add Post
      </button>
    </div>
  </form>
{/* </div> */}

            <div className="  bg-[#61876E]  p-4" id="gallery">
                <p className="font-jost text-black font-bold text-[100px]">My Gallery</p>
                <div className="md:grid md:grid-cols-2 items-center gap-16 w-full justify-center">
           {
            cardarr?.map((item,index)=>{
                console.log(item.array);
                return (

                    <Post id={item.id} caption={item.array.caption} imageurl={item.array.url} name={item.array.name} likes={item.array.likes} />
                    // <Post id={item.id} caption={item.array.caption} imageurl={item.array.url} name={item.array.name} likes={item.array.likes} createdby={item.array.createdby}/>


                 )
            },[])
           } 
        </div>
            </div>
         
        </div>

    )
}