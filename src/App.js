import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./Login/signup/Login";
import Signup from "./Login/signup/Signup";
import Home from "./pages/Home";
import Chats from './components/Chats';
import Events from "./pages/Events";
import {Profile} from "./pages/Profile";
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/explore" element={<Landing />}></Route>
          <Route path="/chats" element={<Chats />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
