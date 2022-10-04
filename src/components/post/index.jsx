import CHATBOX from "../../assets/chatbox-white.svg";
import STAR_WHITE from "../../assets/star-white.svg";
import STAR_YELLOW from "../../assets/star-yellow.svg";
import { Post, LeftSide, MiddleElements, RightSide } from "./style"

export default function PostHome() {
  return (
    <Post>
      <LeftSide>
        <img src="./assets/shaltear.png" alt="avatar" />
      </LeftSide>
      <MiddleElements>
        <div>
          <h1>Episódio 13 de Overlord</h1>
          <h2>Created by: Alguem</h2>
        </div>
        <img src={CHATBOX} alt="chatbox" />
      </MiddleElements>
      <RightSide>
        <img src={STAR_WHITE} alt="star" />
      </RightSide>
    </Post>
  );
}