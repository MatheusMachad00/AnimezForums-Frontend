import Header from "../header/index";
import headerImg from "../../assets/Aqua.(KonoSuba).full.3362480.png"
import STAR_WHITE from "../../assets/star-white.svg";
import HOME from "../../assets/home.svg"
import CHATBOX from "../../assets/chatbox.svg"
import { PostHeader, LeftSide, TextPost, CommentBody, Navbar, MainBody } from "./style";
import Comment from "../comment/index";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function PostScreen(userData) {
  const { id } = useParams();
  const [postsData, setPostsData] = useState(false);
  const userLoggedId = userData.userData.id;

  useEffect(() => {
    let TOKEN = userData.userData.token;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    };

    const LINK_API = `http://localhost:5000/post/${id}`;
    const request = axios.get(LINK_API, config);
    request.then(response => {
      const { data } = response;
      setPostsData(data);
    });
    request.catch(err => {
      console.log(err.response)
    });
  }, []);

  return (
    <MainBody>
      <Header headerImg={headerImg} avatar={userData.userData.avatar} />
      {!postsData ? <h1>Carregando....</h1> :
        <>
          <PostHeader>
            <LeftSide>
              <Link to={`/UserProfile/${postsData.userId}`}>
                <img src={postsData.users.avatar} alt="user avatar" />
                <h2>{postsData.users.username}</h2>
              </Link>
            </LeftSide>
            <h1>{postsData.title}</h1>
            <img src={STAR_WHITE} alt="star" />
          </PostHeader>
          <TextPost>
            <h1>{postsData.description}</h1>
            <CommentBody>
              {!postsData.comments ? <h3>Sem comentários</h3> :
                postsData.comments.map(({ id, comment, commentOwner, commentOwnerAvatar, userId }) => (
                  <Comment
                    id={id}
                    comment={comment}
                    commentOwner={commentOwner}
                    commentOwnerAvatar={commentOwnerAvatar}
                    userLoggedId={userLoggedId}
                    userId={userId}
                  />
                ))}
            </CommentBody>
          </TextPost>
        </>
      }
      <Navbar>
        <Link to={"/home"}>
          <img src={HOME} alt="home button" />
        </Link>
        <Link to={`/createComment/${id}`}>
          <img src={CHATBOX} alt="chatbox button" />
        </Link>
      </Navbar>
    </MainBody>
  );
};