import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/index";
import { SearchBar, Posts, Navbar, Bar } from "./style"
import PostHome from "../post/index";
import NEWPOST from "../../assets/new.svg";
import LOGOUT from "../../assets/logout.svg"
import headerImg from "../../assets/shaltear.png"

export default function Home() {
  const [anime, setAnime] = useState("");

  return (
    <>
      <Header headerImg={headerImg}/>
      <Bar></Bar>
      <SearchBar>
        <input
          type="text"
          placeholder="Pesquisar anime"
          value={anime}
          onChange={(e) => setAnime(e.target.value)} />
      </SearchBar>
      <Posts>
        <PostHome />
        <PostHome />
        <PostHome />
        <PostHome />
        <PostHome />
        <PostHome />
      </Posts>
      <Navbar>
        <img src={NEWPOST} alt="new post button" />
        <img src={LOGOUT} alt="logout button" className="logout"/>
      </Navbar>
    </>
  );
}