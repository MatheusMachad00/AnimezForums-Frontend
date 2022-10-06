import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home/index"
import CreatePost from "./components/createPost";
import CreateComment from "./components/createComment";
import UserProfile from "./components/userProfile";
import PostScreen from "./components/postScreen";
import UserActivity from "./components/userActivity";
import UserContext from "./context/UserContext";


function App() {
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUserData={setUserData} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home userData={userData} />} />
          <Route path="/createPost" element={<CreatePost userData={userData} />} />
          <Route path="/createComment" element={<CreateComment userData={userData} />} />
          <Route path="/UserProfile" element={<UserProfile userData={userData} />} />
          <Route path="/post" element={<PostScreen userData={userData} />} />
          <Route path="/userActivity" element={<UserActivity userData={userData} />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));