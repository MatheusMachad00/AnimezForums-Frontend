import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/index";
import { SearchBar, Posts, Navbar, MainBody } from "./style"
import PostHome from "../post/index";
import NEWPOST from "../../assets/new.svg";
import LOGOUT from "../../assets/logout.svg"
import headerImg from "../../assets/shaltear.png"

export default function Home(userData) {
  const [anime, setAnime] = useState("");
  const [postsData, setPostsData] = useState(false);
  console.log(userData)

  useEffect(() => {
    let TOKEN = userData.userData.token;

    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    };

    const LINK_API = "http://localhost:5000/post/getAll";
    const request = axios.get(LINK_API, config);
    request.then(response => {
      const { data } = response;
      setPostsData(data);
      console.log(postsData)
    });
    request.catch(err => {
      console.log(err.response)
    });
  }, []);

  return (
    <MainBody>
      <Header headerImg={headerImg} avatar={userData.userData.avatar} />
      <SearchBar>
        <input
          type="text"
          placeholder="Pesquisar anime"
          value={anime}
          onChange={(e) => setAnime(e.target.value)} />
      </SearchBar>
      <Posts>
        {!postsData ? <h1>Sem posts no momento</h1> :
          postsData.map(({ title, stars, id }) => (
            <PostHome
              id={id}
              title={title}
              stars={stars} />
          ))}
      </Posts>
      <Navbar>
        <Link to={"/createPost"}>
          <img src={NEWPOST} alt="new post button" />
        </Link>
        <Link to={"/"}>
          <img src={LOGOUT} alt="logout button" className="logout" />
        </Link>
      </Navbar>
    </MainBody>
  );
};