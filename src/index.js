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


function App() {
  const [userData, setUserData] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUserData={setUserData}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/createComment" element={<CreateComment />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/post" element={<PostScreen />} />
        <Route path="/userActivity" element={<UserActivity />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));