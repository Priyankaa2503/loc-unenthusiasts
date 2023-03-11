import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import Footer from "./components/Footer";
import Login from "./Login/signup/Login";
import Signup from "./Login/signup/Signup";
import Home from "./pages/Home";
import Chats from './components/Chats';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/explore" element={<Landing />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/chats" element={<Chats />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
