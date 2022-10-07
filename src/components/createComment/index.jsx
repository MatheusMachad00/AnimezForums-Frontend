import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../header";
import headerImg from "../../assets/yumyum.png";
import TRASH from "../../assets/trash.svg";
import SEND from "../../assets/send.svg";
import HOME from "../../assets/home.svg";
import { Navbar, Forms, MainBody } from "./style";

export default function CreateComment(userData) {
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  function createComment(event) {
    event.preventDefault();
    let TOKEN = userData.userData.token;
    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    };
    const LINK_API = `http://localhost:5000/post/${id}/createComment`;
    const request = axios.post(LINK_API, {
      comment
    }, config);
    request.then(response => {
      const { data } = response;
      navigate(`/post/${id}`);
    })
    request.catch(err => {
      console.log(err.response);
    });
  }

  return (
    <MainBody>
      <Header headerImg={headerImg} avatar={userData.userData.avatar} />
      <Forms>
        {<form onSubmit={createComment}>
          <input
            type="text"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="description"
          />
          <Navbar>
            <Link to={`/post/${id}`}>
              <img src={TRASH} alt="trash button" />
            </Link>
            <Link to={"/home"}>
              <img src={HOME} alt="home button" />
            </Link>
            <button type="submit">
              <img src={SEND} alt="send button" />
            </button>
          </Navbar>
        </form>}
      </Forms>
    </MainBody>
  );
};