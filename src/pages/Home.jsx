import axios from 'axios';
// import Razorpay from 'razorpay';
import { LoremIpsum } from "lorem-ipsum";
import React, { useEffect,useCallback } from 'react'
import { app, database, storage } from '../components/firebaseConfig'
import useRazorpay from "react-razorpay";
import { Link} from 'react-router-dom'
// import Razorpay from 'razorpay'
// rzp_test_Pw7oOZCGeCRVYw
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";

import { collection, addDoc, getDocs,getDoc, doc, updateDoc, deleteDoc ,onSnapshot,query,where,setDoc} from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import {useRazorpay,createOrder} from "react-razorpay";
// const options = {
//   method: 'GET',
//   url: 'https://picsum.photos/652/360',
//   // headers: {
//   //   'content-type': 'application/json',
//   //   'X-RapidAPI-Key': 'fc9ac53e3amsh7f0c55372e6f0bep1224a8jsn1e1b9847a5de',
//   //   'X-RapidAPI-Host': 'hydra-ai.p.rapidapi.com'
//   // },
//   // data: '{"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsewZDwDJGKDR-ZO4Rmf9vUUKWjyArPPIqqzu4WDGDOA&s"}'
// };



  



 


 async function adddata(){
  const collectionRef = collection(database, 'images');
  const collectionRefusers = collection(database, 'users');
  var arr=[];
  await getDocs(collectionRefusers)
      .then((res) => {
       res.docs.map((item)=>{
        arr.push(item.data());
       }) 

      });
  //     console.log(arr);

  //     // console.log(arr[Math.floor(Math.random()*arr.length)]);
        for(var i=0;i<10;){
          
            var val=Math.floor(Math.random()*arr.length);

          var id=arr[val].uid;
          var postarr=arr[val].posts;
          const lorem = new LoremIpsum({
            sentencesPerParagraph: {
              max: 8,
              min: 4
            },
            wordsPerSentence: {
              max: 10,
              min: 4
            }
          });
          var para=lorem.generateParagraphs(1);
          console.log(para);

          const options2 = {
            method: 'POST',
            url: 'https://hydra-ai.p.rapidapi.com/dev/image-analysis/multilabel',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': 'fc9ac53e3amsh7f0c55372e6f0bep1224a8jsn1e1b9847a5de',
              'X-RapidAPI-Host': 'hydra-ai.p.rapidapi.com'
            },
            data: '{"image":"https://picsum.photos/id/${i+10}/652/360"}'
          };

          axios.request(options2).then(async function (response) {
            console.log(response.data)
            i++;
            // const docq=await addDoc(collectionRef, {
            //   createdby: id,
            //   name:arr[val].name,
            //   url:`https://picsum.photos/id/${i+10}/652/360`,
            //   caption:para,
            //   likes:Math.floor(Math.random() * 100)
              
  
            // })
            // postarr.push(docq.id);
            // const doctoupdate = doc(database, 'users', id)
            // updateDoc(doctoupdate, {
            //   posts:postarr,
              
            // })
  
          }).catch(function (error) {
            i= -1;
            console.error(error);
          });

          if(i===-1){
            break
          }
          
         



        }
        //   console.log(response.data.body.image_classification);
        // res.data.map(async (item)=>{
        //   var val=Math.floor(Math.random()*arr.length);

        //   var id=arr[val].uid;
        //   var postarr=arr[val].posts;
        //   const lorem = new LoremIpsum({
        //     sentencesPerParagraph: {
        //       max: 8,
        //       min: 4
        //     },
        //     wordsPerSentence: {
        //       max: 10,
        //       min: 4
        //     }
        //   });
        //   var para=lorem.generateParagraphs(1);
        //   console.log(para);
          
        //   const docq=await addDoc(collectionRef, {
        //     createdby: id,
        //     name:arr[val].name,
        //     url:item.url,
        //     caption:para


        //   })
        //   postarr.push(docq.id);
        //   const doctoupdate = doc(database, 'users', id)
        //   updateDoc(doctoupdate, {
        //     posts:postarr
        //   })
        
        //   console.log(docq.id)
          
           

        // })
      

        // const axios = require("axios");

// const encodedParams = new URLSearchParams();
// encodedParams.append("function_type", "<REQUIRED>");

// const options = {
//   method: 'POST',
//   url: "https://quickchart.io/watermark?mainImageUrl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F6e%2FGolde33443.jpg&markImageUrl=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2016%2F10%2FBatman-logo.png&markRatio=0.25",
 
  
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });







  
 }

 

export default function Home() {



  return (
    <div className="bg-bghome h-screen">
      <div className="flex flex-col justify-center items-center gap-32 h-screen ">
       
        <span className="text-white text-5xl font-jost">PHOTOGRAPHY</span>
        {/* <Wallet></Wallet> */}
        {/* <button onClick={handlePayment} >
asfcsdzgvwesdfwESDFwef
        </button> */}
        <button  className="bg-[#61876E] hover:bg-[#AA5656] border-2  rounded-2xl text-white font-jost py-2 px-4 mt-6 w-[300px] shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out"><Link to="/signup">GET STARTED</Link></button>
      </div>
    </div>
  );
}
