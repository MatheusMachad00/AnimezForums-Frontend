import Header from "../header/index";
import headerImg from "../../assets/albedo2.png"
import STAR_YELLOW from "../../assets/star-yellow.svg";
import HOME from "../../assets/home.svg";
import { UserData, UserStars, Buttons, Navbar, Bar, MainBody } from "./style";

export default function UserProfile() {
  return (
    <MainBody>
      <Header headerImg={headerImg} />
      <Bar></Bar>
      <UserData>
        <img src="../../assets/albedo2.png" alt="user avatar" />
        <h1>Alguém</h1>
        <UserStars>
          <img src={STAR_YELLOW} alt="star" />
          <h2>50</h2>
        </UserStars>
      </UserData>

      <Buttons>
        <button>Posts</button>
        <button>Comentários</button>
      </Buttons>
      <Navbar>
        <img src={HOME} alt="home button" />
      </Navbar>

    </MainBody>
  )
};