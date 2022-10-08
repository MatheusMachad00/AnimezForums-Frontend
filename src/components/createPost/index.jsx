import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Header from "../header";
import headerImg from "../../assets/darkness.png";
import TRASH from "../../assets/trash.svg";
import SEND from "../../assets/send.svg";
import HOME from "../../assets/home.svg";
import { Navbar, Forms, MainBody } from "./style";

export default function CreatePost(userData) {
  const [title, setTitle] = useState("");
  const [anime, setAnime] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function createPost(event) {
    event.preventDefault();
    let TOKEN = userData.userData.token;
    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    };
    const LINK_API = "http://localhost:5000/post/create";
    const request = axios.post(LINK_API, {
      title,
      anime,
      description
    }, config);
    request.then(response => {
      const { data } = response;
      navigate("/home");
    })
    request.catch(err => {
      console.log(err.response);
    });
  }

  return (
    <MainBody>
      <Header headerImg={headerImg} avatar={userData.userData.avatar} />
      <Forms>
        {<form onSubmit={createPost}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Anime"
            value={anime}
            onChange={(e) => setAnime(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="description"
          />
          <Navbar>
            <Link to={"/home"}>
              <img src={HOME} alt="home button" />
            </Link>
            <button type="submit"><img src={SEND} alt="send button" /> </button>
          </Navbar>
        </form>}
      </Forms>
    </MainBody>
  );
};