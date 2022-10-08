import Header from "../header/index";
import headerImg from "../../assets/megumi.png";
import HOME from "../../assets/home.svg";
import STAR_YELLOW from "../../assets/star-yellow.svg";
import { UserData, UserStars, MainBody, Footer, ElementsBox } from "./style";
import { Link, useParams, useNavigate } from "react-router-dom";
import Comment from "../comment";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserActivityComment({ userData, userDataFromProfile }) {
  const { id } = useParams();
  const [pageData, setPageData] = useState(false);

  useEffect(() => {
    let TOKEN = userData.token;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    };

    const LINK_API = `http://localhost:5000/comment/user/${id}`;
    const request = axios.get(LINK_API, config);
    request.then(response => {
      const { data } = response;
      setPageData(data);
      console.log(data)
    });
    request.catch(err => {
      console.log(err.response)
    });
  }, []);

  return (
    <MainBody>
      <Header headerImg={headerImg} avatar={userData.avatar} />
      <UserData>
        <img src={userDataFromProfile.avatar} alt="avatar" />
        <h1>{userDataFromProfile.username}</h1>
        <UserStars>
          <img src={STAR_YELLOW} alt="star" />
          <h2>{userDataFromProfile.totalStars}</h2>
        </UserStars>
      </UserData>
      <ElementsBox>
        {/* comment */}
      </ElementsBox>
      <Footer>
        <img src={HOME} alt="home button" />
      </Footer>
    </MainBody>
  );
}