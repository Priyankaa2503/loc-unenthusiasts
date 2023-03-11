import React,{useState} from "react";
import MobNav from "./MobNav";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { Link } from "react-router-dom";
import MonochromePhotosIcon from "@mui/icons-material/MonochromePhotos";
import PersonIcon from "@mui/icons-material/Person";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
function Navbar({newid,setnewid}) {
  let nav = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  const handlecuruserprofile=()=>{
    setnewid(user.uid)
    nav("/profile")
}
  return (
    <div className="bg-black opacity-70 fixed">
      <div className="h-[100px] w-[100px] top-10 right-2.5 p-8 scale-150 md:hidden ">
        <MenuTwoToneIcon style={{ color: "#FFFFFF" }} onClick={showMenu} />
      </div>
      <div className="flex flex-row justify-around w-screen p-3">
        <div className="flex flex-row  gap-5 p-5">
          <MonochromePhotosIcon
            style={{ color: "#FFFFFF", width: "30px", height: "30px" }}
          />
          <div className=" text-white  text-2xl font-ibm ">
            <span className=" font-bold">PHOTO</span>
            <span className=" font-light ">graphy</span>
          </div>
            
        </div>
        {/* <div className="flex flex-row justify-end items-center "> */}

        <div className="hidden md:flex flex-row gap-x-20 items-center ">
          <Link to="/explore">
            <div className=" hover:scale-110 transition duration-300 ease-in-out  text-white text-xl font-medium font-jost ">
              EXPLORE
            </div>
          </Link>
          <Link to="/profile">
            <div className=" hover:scale-110 transition duration-300 ease-in-out  text-white  text-xl font-medium font-jost " onClick={handlecuruserprofile}>
              PROFILE
            </div>
          </Link>
          <Link to="/events">
            <div className=" hover:scale-110 transition duration-300 ease-in-out text-white text-xl font-medium font-jost ">
              EVENTS
            </div>
          </Link>
          <Link to="/chats">
            <div className=" hover:scale-110 transition duration-300 ease-in-out  text-white  text-xl font-medium font-jost ">
              CHAT
            </div>
          </Link>
          <div onClick={handlecuruserprofile} className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-black text-xl font-medium font-jost ">PROFILE</div>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={()=>{signOut(auth); nav("/")}}
                        >
                            Log Out
                        </Button>
          {/* search field */}

          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search "
                required
              ></input>
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          {/* done */}
          <PersonIcon
            style={{ color: "#FFFFFF", width: "30px", height: "30px" }}
          />
        </div>

        {/* </div> */}
      </div>
      <MobNav showMenu={showMenu} active={active} />
    </div>
  );
}

export default Navbar;
