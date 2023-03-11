<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import ProfilePic from "../assets/profile.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ProfileBG } from "../assets/profileBg.jpeg";
import { Post } from "../components/cards/Post";
import { app, database, storage } from "../components/firebaseConfig";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
=======
import React, { useState, useEffect } from 'react'
import ProfilePic from '../assets/profile.png'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ProfileBG } from '../assets/profileBg.jpeg'
import { Post } from '../components/cards/Post'
import { app, database, storage } from '../components/firebaseConfig'
import { collection, addDoc,getDoc, getDocs, doc, updateDoc, deleteDoc ,onSnapshot,query,where,setDoc, serverTimestamp,arrayUnion} from "firebase/firestore";
import { async } from '@firebase/util';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
>>>>>>> 2d39c80 (shehal9)
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

<<<<<<< HEAD
export const Profile = ({ newid, setnewid }) => {
  const [data, setdata] = useState({});
  const auth = getAuth();
  const user = auth.currentUser;
  if (newid === "") {
    console.log(user.uid);
    setnewid(user.uid);
  }
  const [fireuser, setfireuser] = useState({});
  const [cardarr, setcardarr] = useState([]);
  console.log(newid);
  useEffect(() => {
    getfireuser();
    getImages();
  }, [newid]);
  useEffect(() => {
    getfireuser();
    getImages();
  }, []);

  const getImages = async () => {
    const collectionRef = collection(database, "images");
    const nameQuery = query(collectionRef, where("createdby", "==", user.uid));
    var arr = [];
    await getDocs(nameQuery).then((res) => {
      console.log(res);
      res.docs.map((item) => {
        arr.push({ array: item.data(), id: item.id });
        console.log(item.id);
      });
    });
    setcardarr([...arr]);
  };
=======
export const Profile = ({newid,setnewid}) => {
  let navigate = useNavigate();
    const [data, setdata] = useState({});
    const [data1, setdata1] = useState({});
    const auth = getAuth();
    const user = auth.currentUser;
    // if(newid===''){
    //     console.log(newid);
    //     setnewid(newid);
    // }
    const [fireuser, setfireuser] = useState({})
    const [cardarr,setcardarr]=useState([]);
    // useEffect(() => {
    //     getfireuser();
    //     getImages();
    // }, [newid])
    useEffect(() => {
        getfireuser();
        getImages();
    }, [])

    const getImages= async()=>{
        const collectionRef = collection(database, 'images');
        const nameQuery=query(collectionRef,where("createdby","==",newid))
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
>>>>>>> 2d39c80 (shehal9)

  const onChangefile = (e) => {
    let newInput = { [e.target.name]: e.target.files[0] };
    setdata({ ...data, ...newInput });
  };

<<<<<<< HEAD
  const getfireuser = async () => {
    const docRef = doc(database, "users", user.uid);
    const docSnap = await getDoc(docRef);
    setfireuser(docSnap.data());
  };
=======
      const onChangefile1 = (e) => {
        let newInput = { [e.target.name]: e.target.files[0] };
        setdata1({ ...data1, ...newInput })
      }

    const getfireuser = async () => {
        const docRef = doc(database, "users", newid);
        const docSnap = await getDoc(docRef);
        setfireuser(docSnap.data())
    }
>>>>>>> 2d39c80 (shehal9)

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setdata({ ...data, ...newInput });
  };

<<<<<<< HEAD
  const handleUpdate = () => {
    const doctoupdate = doc(database, "users", user.uid);
    updateDoc(doctoupdate, {
      bio: data.bio,
      type: data.type,
    });
  };

  const handleUpdateImage = () => {
    const storageRef = ref(storage, user.uid);

    const uploadTask = uploadBytesResumable(storageRef, data.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          await updateDoc(doc(database, "users", user.uid), {
            imageURL: downloadURL,
=======
    const handleInput1 = (event) => {
        let newInput = { [event.target.name]: event.target.value };

        setdata1({ ...data1, ...newInput });
    }

    const handleUpdate = () => {
        const doctoupdate = doc(database, 'users', newid)
        updateDoc(doctoupdate, {
            bio: data.bio,
            type: data.type
        })
    }

    const handleUpdate1= (e) => {
        e.preventDefault()
        // const doctoupdate = doc(database, 'images', newid)
        // updateDoc(doctoupdate, {
        //     bio: data.bio,
        //     type: data.type
        // })
        const storageRef = ref(storage,newid);

        const uploadTask = uploadBytesResumable(storageRef, data1.image1)
        uploadTask.on('state_changed',
          (snapshot) => {
          },
          (error) => {
          },
          () => {
            console.log(data1);
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              console.log('File available at', downloadURL);
              const docRef = await addDoc(collection(database, "images"), {
                caption:data1.caption,
                createdby:fireuser.uid,
                name:fireuser.name,
                likes:0,
                tags:arrayUnion(...[data1.tag1,data1.tag2]),
                url:downloadURL
              });
            });
          });
       
    }

    const handleUpdateImage = () => {
        const storageRef = ref(storage, newid);

        const uploadTask = uploadBytesResumable(storageRef, data.image)
        uploadTask.on('state_changed',
          (snapshot) => {
          },
          (error) => {
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              console.log('File available at', downloadURL);
              await updateDoc(doc(database, "users", newid), {
                imageURL: downloadURL
              })
            });
>>>>>>> 2d39c80 (shehal9)
          });
        });
      }
    );
  };

<<<<<<< HEAD
  return (
    <div>
      <Navbar newid={newid} setnewid={setnewid} />
      <div className="flex flex-row bg-profileBg p-48 h-screen w-screen bg-cover bg-no-repeat">
        <div className="flex flex-col h-[100%] w-[60%] p-6 justify-center">
          <div className="flex flex-col">
            {fireuser?.imageURL ? (
              <div className="w-6/12 sm:w-4/12 px-">
                <img
                  src={fireuser?.imageURL}
                  className="h-[200px] w-[200px] mb-10 rounded-full"
                />
              </div>
            ) : (
              <label htmlFor="image">
                <img src={ProfilePic} className="h-[200px] w-[200px] mb-10" />
              </label>
            )}
            <input
              className="hidden"
              id="image"
              type="file"
              placeholder="Upload Photo"
              onChange={(event) => onChangefile(event)}
              name="image"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 10, mb: 2 }}
              onClick={handleUpdateImage}
              className="w-64"
            >
              Update Profile Picture
            </Button>
            <button className="bg-[#61876E] hover:bg-[#AA5656] border-2  rounded-2xl text-white w-[250px] font-jost py-2 px-4 mt-12 shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out">
              <Link to="#gallery">View Gallery</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col h-[100%] bg-[#00000050] w-[60%] p-8">
          <div className="flex flex-row h-[20px] w-100%">
            <div className="mr-16 text-2xl font-bold text-white">Name</div>
            <div className="text-2xl font-bold text-white">
              {user.displayName}
            </div>
          </div>
          <div className="flex flex-row h-[20px] w-100% mt-12">
            <div className="mr-16 text-2xl font-bold text-white">E-mail</div>
            <div className="text-2xl font-bold text-white">{user.email}</div>
          </div>
          <div className="flex flex-row h-[20px] w-100% mt-12">
            <div className="mr-16 text-2xl font-bold text-white">Bio</div>
            {fireuser?.bio ? (
              <div className="text-2xl font-bold text-white">
                {fireuser.bio}
              </div>
            ) : (
              <input
                type="text"
                className="h-8"
                onChange={(event) => handleInput(event)}
                name="bio"
              ></input>
            )}
          </div>
          <div className="flex flex-row h-[20px] w-100% mt-12">
            <div className="mr-16 text-2xl font-bold text-white">type</div>
            {fireuser?.type ? (
              <div className="text-2xl font-bold text-white">
                {fireuser.type}
              </div>
            ) : (
              <input
                type="text"
                className="h-8"
                onChange={(event) => handleInput(event)}
                name="type"
              ></input>
            )}
          </div>
          <div className="mt-6">
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleUpdate}
              className="w-64"
            >
              Update Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div>
          <form class="bg-white p-6 rounded-lg shadow-md">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="caption">
                Caption
              </label>
              <textarea
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="caption"
                name="caption"
              ></textarea>
=======
    const handlegotoChat=async()=>{
      const combid=
    newid>user.uid?
    newid+user.uid
    :user.uid+newid
    try{
      const res=await getDoc(doc(database,"chats",combid))
      console.log(res.exists());
      if(!res.exists()){
        //create chats
        await setDoc(doc(database,"chats",combid),{
          message:[]
        })
        console.log(user);
        //create userchats
        updateDoc(doc(database,"userchats",newid),{
          [combid+".userinfo"]:{
            uid:user.uid,
            email:user.email,
            name:user.displayName,
            // imageURL:user.imageURL
          },
          [combid+".date"]:serverTimestamp()
        })
        updateDoc(doc(database,"userchats",user.uid),{
          [combid+".userinfo"]:{
            uid:newid,
            email:fireuser.email,
            name:fireuser.name
          },
          [combid+".date"]:serverTimestamp()
        })
        navigate("/chats")
      }
      else{
        navigate("/chats")
      }
    }
    catch(err){
    }
    }

    return (
        <div>
            <Navbar newid={newid} setnewid={setnewid} />
            <div className="flex flex-row bg-profileBg p-48 h-screen w-screen bg-cover bg-no-repeat">
                <div className="flex flex-col h-[100%] w-[60%] p-6 justify-center">
                    <div className='flex flex-col'>
                        {fireuser?.imageURL?<div className='w-6/12 sm:w-4/12 px-'><img src={fireuser?.imageURL} className="h-[200px] w-[200px] mb-10 rounded-full" /></div>:<label htmlFor="image">
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
                        <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 10, mb: 2 }}
                        onClick={handleUpdateImage}
                        className="w-64"
                    >
                        Update Profile Picture
                    </Button>
                        <button className="bg-[#61876E] hover:bg-[#AA5656] border-2  rounded-2xl text-white w-[250px] font-jost py-2 px-4 mt-12 shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out"><Link to="#gallery">View Gallery</Link></button>
                    </div>
                </div>
                <div className="flex flex-col h-[100%] bg-[#00000050] w-[60%] p-8">
                    <div className='flex flex-row h-[20px] w-100%'>
                        <div className='mr-16 text-2xl font-bold text-white'>Name</div>
                        <div className='text-2xl font-bold text-white'>{fireuser.name}</div>
                    </div>
                    <div className='flex flex-row h-[20px] w-100% mt-12'>
                        <div className='mr-16 text-2xl font-bold text-white'>E-mail</div>
                        <div className='text-2xl font-bold text-white'>{fireuser?.email}</div>
                    </div>
                    <div className='flex flex-row h-[20px] w-100% mt-12'>
                        <div className='mr-16 text-2xl font-bold text-white'>Bio</div>
                        {fireuser?.bio ? <div className='text-2xl font-bold text-white'>{fireuser.bio}</div> : <input type='text' className='h-8' onChange={(event) => handleInput(event)} name="bio"></input>}
                    </div>
                    <div className='flex flex-row h-[20px] w-100% mt-12'>
                        <div className='mr-16 text-2xl font-bold text-white'>type</div>
                        {fireuser?.type ? <div className='text-2xl font-bold text-white'>{fireuser.type}</div> : <input type='text' className='h-8' onChange={(event) => handleInput(event)} name="type"></input>}
                    </div>
                    <div className='mt-6'>
                    {user.uid===newid?<Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleUpdate}
                        className="w-64"
                    >
                        Update Profile
                    </Button>:<Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handlegotoChat}
                        className="w-64"
                    >
                        Go to Chat!
                    </Button>}
                    </div>
                </div>
            </div>
            <div class="">
  <form class="bg-white p-6 rounded-lg shadow-md">
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="caption">
        Caption
      </label>
      <input class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="caption" id="caption" onChange={(event) => handleInput1(event)}></input>
      {/* <textarea class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="caption" name="caption" onChange={(event) => handleInput(event)}></textarea> */}
    </div>
    
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="image1">
        Image
      </label>
      <input class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="file" name="image1" id="image1" onChange={(event) => onChangefile1(event)}></input>
      </div>
    <div class="mb-4">
     
    
      <div class="flex flex-wrap">
  <label for="tags" class="block text-gray-700 text-sm font-bold mb-2 mr-2">
    Tags:
  </label>
  <input type="text" name="tag1" id="tag1" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline" placeholder="Add tag 1" onChange={(event) => handleInput1(event)}></input>
  <input type="text" name="tag2" id="tag2" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline" placeholder="Add tag 2" onChange={(event) => handleInput1(event)}></input>
</div>

    </div>
    <div class="flex justify-end">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpdate1}>
        Add Post
      </button>
    </div>
  </form>
</div>

            <div className="h-screen flex flex-col justify-start items-start p-10" id="gallery">
                <p className="font-jost text-black font-bold text-[100px] mt-10 p-10">My Gallery</p>
                <div className="md:grid md:grid-cols-2 p-12 h-screen w-full justify-center">
           {
            cardarr?.map((item,index)=>{
                console.log(item.array);
                return (

                    <Post id={item.id} caption={item.array.caption} imageurl={item.array.url} name={item.array.name} likes={item.array.likes} />


                 )
            },[])
           } 
        </div>
>>>>>>> 2d39c80 (shehal9)
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="caption">
                Description
              </label>
              <textarea
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="caption"
                name="caption"
              ></textarea>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="image">
                Image
              </label>
              <input
                class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="file"
                name="image"
                id="image"
              ></input>
            </div>
            <div class="mb-4">
              <div class="flex flex-wrap">
                <label
                  for="tags"
                  class="block text-gray-700 text-sm font-bold mb-2 mr-2"
                >
                  Tags:
                </label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Add tag 1"
                ></input>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Add tag 2"
                ></input>
              </div>
            </div>
            <div class="flex justify-end">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Post
              </button>
            </div>
          </form>
        </div>

        <div
          className="h-screen flex flex-col justify-start items-start p-10"
          id="gallery"
        >
          <p className="font-jost text-black font-bold text-[100px] mt-10 p-10">
            My Gallery
          </p>
          <div className="md:grid md:grid-cols-2 p-12 h-screen w-full justify-center">
            {cardarr?.map((item, index) => {
              console.log(item.array);
              return (
                <Post
                  id={item.id}
                  caption={item.array.caption}
                  imageurl={item.array.url}
                  name={item.array.name}
                  likes={item.array.likes}
                />
              );
            }, [])}
          </div>
        </div>
        <div className="flex w-[700px] mt-64 ml-[30%] bg-slate-500">
          <h1 className="text-white p-4 text-semibold">Event Request</h1>
          <form class="bg-white p-6 rounded-lg shadow-md w-[700px]">
            <div class="mb-4">
              <label
                class="block text-gray-700 font-bold mb-2"
                for="photographer"
              >
                Photographer
              </label>
              <textarea
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="photographern"
                name="photographer"
              ></textarea>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="events">
                Event name
              </label>
              <textarea
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="events"
                name="'events"
              ></textarea>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="caption">
                Description
              </label>
              <textarea
                class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="caption"
                name="caption"
              ></textarea>
            </div>
            <div class="flex justify-end">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
