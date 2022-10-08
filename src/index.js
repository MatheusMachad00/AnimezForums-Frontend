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
import UserActivityPost from "./components/userActivity-post";
import UserActivityComment from "./components/userActivity-comment"
import UserContext from "./context/UserContext";


function App() {
  const [userData, setUserData] = useState({});
  const [userDataFromProfile, setUserDataFromProfile] = useState(false);
  const [commentOrPost, setCommentOrPost] = useState("");

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUserData={setUserData} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home userData={userData} />} />
          <Route path="/createPost" element={<CreatePost userData={userData} />} />
          <Route path="/createComment/:id" element={<CreateComment userData={userData} />} />

          <Route path="/UserProfile/:id" element={<UserProfile
            userData={userData}
            setUserDataFromProfile={setUserDataFromProfile}
            setCommentOrPost={setCommentOrPost} />} />
          <Route path="/post/:id" element={<PostScreen userData={userData} />} />

          <Route path="/userActivityPost/:id" element={<UserActivityPost
            userData={userData}
            userDataFromProfile={userDataFromProfile}
            commentOrPost={commentOrPost} />} />

          <Route path="/userActivityComment/:id" element={<UserActivityComment
            userData={userData}
            userDataFromProfile={userDataFromProfile}
            commentOrPost={commentOrPost} />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));