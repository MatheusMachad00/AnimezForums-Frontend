import { useState } from "react";
import Header from "../header";
import headerImg from "../../assets/darkness.png";
import TRASH from "../../assets/trash.svg";
import SEND from "../../assets/send.svg";
import HOME from "../../assets/home.svg";
import { Navbar } from "./style";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [anime, setAnime] = useState("");
  const [description, setDescription] = useState("");


  return (
    <>
      <Header headerImg={headerImg} />
      <div>
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
          placeholder="Title"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Navbar>
        <img src={TRASH} alt="trash button" />
        <img src={HOME} alt="home button" />
        <img src={SEND} alt="send button" />
      </Navbar>
    </>
  );
}