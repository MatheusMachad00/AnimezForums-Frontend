import Header from "../header/index";
import headerImg from "../../assets/albedo2.png"
import STAR_YELLOW from "../../assets/star-yellow.svg";
import HOME from "../../assets/home.svg";
import { UserData, UserStars, Buttons, Navbar, MainBody } from "./style";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile(userData) {
  const { id } = useParams();
  const [userProfileData, setUserProfileData] = useState("");

  useEffect(() => {
    let TOKEN = userData.userData.token;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    };

    const LINK_API = `http://localhost:5000/userProfile/${id}`;
    const request = axios.get(LINK_API, config);
    request.then(response => {
      const { data } = response;
      setUserProfileData(data);
      console.log(data);
    });
    request.catch(err => {
      console.log(err.response)
    });
  }, []);
console.log(userProfileData)
  return (
    <MainBody>
      <Header headerImg={headerImg} avatar={userData.userData.avatar}/>
      <UserData>
        <img src={userProfileData.avatar} alt="user avatar" />
        <h1>{userProfileData.username}</h1>
        <UserStars>
          <img src={STAR_YELLOW} alt="star" />
          <h2>{userProfileData.totalStars}</h2>
        </UserStars>
      </UserData>

      <Buttons>
        <button>Posts</button>
        <button>Comentários</button>
      </Buttons>
      <Navbar>
        <Link to={"/home"}>
        <img src={HOME} alt="home button" />
        </Link>
      </Navbar>

    </MainBody>
  )
};