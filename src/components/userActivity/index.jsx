import Header from "../header";
import userAvatar from "../../assets/avatar.jpg";
import headerImg from "../../assets/megumi.png";
import HOME from "../../assets/home.svg";
import STAR_YELLOW from "../../assets/star-yellow.svg";
import { UserData, UserStars, MainBody, Footer, ElementsBox } from "./style";
import Comment from "../comment";

export default function UserActivity() {
  return (
    <MainBody>
      <Header headerImg={headerImg}></Header>
      <UserData>
        <img src={userAvatar} alt="avatar" />
        <h1>Nazuna</h1>
        <UserStars>
          <img src={STAR_YELLOW} alt="star" />
          <h2>50</h2>
        </UserStars>
      </UserData>
      <ElementsBox>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
      </ElementsBox>
      <Footer>
        <img src={HOME} alt="home button" />
      </Footer>
    </MainBody>
  );
}