import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import Header from "../header/index";
import { SearchBar, Posts } from "./style"


export default function Home() {
  const [anime, setAnime] = useState("");

  return (
    <>
      <Header />
      <SearchBar>
        <input
          type="text"
          placeholder="Pesquisar anime"
          value={anime}
          onChange={(e) => setAnime(e.target.value)} />
      </SearchBar>

      <Posts>
        <div id="POST">
          <div id="coluna_esquerda">
            <img src="./assets/shaltear.png" alt="avatar" />
          </div>
          <div id="coluna_meio">
            <div>
              <h1>Episódio 13 de Overlord</h1>
              <h2>Created by: Alguem</h2>
            </div>
            <img src="../../assets/chatbox-outline.svg" alt="chat-box" />
          </div>
          <div>
            <img src="../../assets/assets/star-outline.svg" alt="star" />
          </div>
        </div>
      </Posts>
    </>
  );
}