import Header from "../header/index";
import headerImg from "../../assets/megumi.png";
import HOME from "../../assets/home.svg";
import STAR_YELLOW from "../../assets/star-yellow.svg";
import { UserData, UserStars, MainBody, Footer, ElementsBox } from "./style";
import { Link, useParams } from "react-router-dom";
import PostHome from "../post";
import { useEffect, useState } from "react";
import axios from "axios";
import BACK from "../../assets/arrow-back-circle.svg"

export default function UserActivityPost({ userData, userDataFromProfile }) {
  const { id } = useParams();
  const [pageData, setPageData] = useState(false);


  useEffect(() => {
    let TOKEN = userData.token;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    };

    const LINK_API = `http://localhost:5000/post/postsByUsers/${id}`;
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
        {!pageData ? <></> :
          pageData.map(({ id, stars, title }) => (
            <PostHome
              id={id}
              title={title}
              stars={stars}
              postOwner={userDataFromProfile.username}
              postOwnerAvatar={userDataFromProfile.avatar}
            />
          ))}
      </ElementsBox>
      <Footer>
        <Link to={"/home"}>
          <img src={HOME} alt="home button" />
        </Link>
        <Link to={`/UserProfile/${id}`}>
          <img src={BACK} alt="return button" />
        </Link>
      </Footer>
    </MainBody>
  );
}