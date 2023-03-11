import axios from 'axios';
import { LoremIpsum } from "lorem-ipsum";
import React from 'react'
import { app, database, storage } from '../components/firebaseConfig'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";

import { collection, addDoc, getDocs,getDoc, doc, updateDoc, deleteDoc ,onSnapshot,query,where,setDoc} from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// const options = {
//   method: 'GET',
//   url: 'https://picsum.photos/v2/list?page=2',
//   // headers: {
//   //   'content-type': 'application/json',
//   //   'X-RapidAPI-Key': 'fc9ac53e3amsh7f0c55372e6f0bep1224a8jsn1e1b9847a5de',
//   //   'X-RapidAPI-Host': 'hydra-ai.p.rapidapi.com'
//   // },
//   // data: '{"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsewZDwDJGKDR-ZO4Rmf9vUUKWjyArPPIqqzu4WDGDOA&s"}'
// };



  



 


//  async function adddata(){
//   const collectionRef = collection(database, 'images');
//   const collectionRefusers = collection(database, 'users');
//   var arr=[];
//   await getDocs(collectionRefusers)
//       .then((res) => {
//        res.docs.map((item)=>{
//         arr.push(item.data());
//        }) 

//       });
//       console.log(arr);

//       // console.log(arr[Math.floor(Math.random()*arr.length)]);

//       await axios.request(options).then(function (res) {
//         console.log(res);
//         //   console.log(response.data.body.image_classification);
//         res.data.map(async (item)=>{
//           var val=Math.floor(Math.random()*arr.length);

//           var id=arr[val].uid;
//           var postarr=arr[val].posts;
//           const lorem = new LoremIpsum({
//             sentencesPerParagraph: {
//               max: 8,
//               min: 4
//             },
//             wordsPerSentence: {
//               max: 10,
//               min: 4
//             }
//           });
//           var para=lorem.generateParagraphs(1);
//           console.log(para);
          
//           const docq=await addDoc(collectionRef, {
//             createdby: id,
//             name:arr[val].name,
//             url:item.url,
//             caption:para


//           })
//           postarr.push(docq.id);
//           const doctoupdate = doc(database, 'users', id)
//           updateDoc(doctoupdate, {
//             posts:postarr
//           })
        
//           console.log(docq.id)
          
           

//         })
//         }).catch(function (error) {
//           console.error(error);
//         });







  
//  }
export default function Home() {
  return (
    
    <div className='text-5xl'>Home
    
    
    </div>
   
  )
}
