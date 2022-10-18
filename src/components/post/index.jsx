import CHATBOX from "../../assets/chatbox-white.svg";
import STAR_WHITE from "../../assets/star-white.svg";
import STAR_YELLOW from "../../assets/star-yellow.svg";
import { Post, LeftSide, MiddleElements, RightSide } from "./style"
import { Link } from "react-router-dom";

export default function PostHome({ title, stars, postOwner, postOwnerAvatar, id, likedByUser }) {

  return (
    <Link to={`/post/${id}`}>
      <Post>
        <LeftSide>
          <img src={postOwnerAvatar} alt="post owner avatar" />
        </LeftSide>
        <MiddleElements>
          <div>
            <h1>{title}</h1>
            <h2>Created by: {postOwner}</h2>
          </div>
          <img src={CHATBOX} alt="chatbox" />
        </MiddleElements>
        <RightSide>
          {!likedByUser ? <img src={STAR_WHITE} alt="star" /> :
            <img src={STAR_YELLOW} alt="star" />}
          <h2>{stars}</h2>
        </RightSide>
      </Post>
    </Link>
  );
}