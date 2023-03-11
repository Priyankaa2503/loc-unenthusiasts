import React,{useState,useEffect} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { app, database, storage } from '../firebaseConfig'
import { collection, addDoc,getDoc, getDocs, doc, updateDoc, deleteDoc ,onSnapshot,query,where,setDoc} from "firebase/firestore";
import { async } from '@firebase/util';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

export default function EventCard() {
  const [thons, setthons] = useState([])
  const collectionRef = collection(database, 'events')
  useEffect(() => {
    getEvents()
  }, [])
  
  const auth = getAuth();
  const user = auth.currentUser;
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const getEvents=()=>{
      const nameQuery=query(collectionRef,where("to","==",user.uid))
      onSnapshot(nameQuery,(data)=>{
        setthons(data.docs);
      })
    }
  return (
    <div className="">
    {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>
        General settings
      </Typography>
      <span className="flex gap-8">
      <button onClick >✓</button>
      <button onClick >X</button>

      </span>
    </AccordionSummary>
    <AccordionDetails>
  jbjkb
    </AccordionDetails>
  </Accordion> */}
  {
            thons.map((note) => {
                let id=note.id;
                let noted=note.data();
                return <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel3bh-content"
      id="panel3bh-header" className='w-[700px]'
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>
        {noted.Title}
      </Typography>
      <span className="flex gap-8">
      <button onClick >✓</button>
      {!note.accepted && <button onClick >X</button>}

      </span>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {noted.desc}
      </Typography>
      <Typography>
        {noted.Location}
      </Typography>
      <Typography>
        By:  {noted.fromname}
      </Typography>
    </AccordionDetails>
  </Accordion>;
              })}

  </div>
  )
}
