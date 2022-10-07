import headerImg from "../../assets/avatar.jpg";
import STAR_WHITE from "../../assets/star-white.svg";
import { CommentBody, LeftSide, Text } from "./style";

export default function Comment(props) {
  const { comment, commentOwner, commentOwnerAvatar, userId, userLoggedId } = props
  return (
    <CommentBody>
      <LeftSide>
        <img className="avatar" src={commentOwnerAvatar} alt="" />
        <h2>{commentOwner}</h2>
        <img src={STAR_WHITE} alt="star" />
      </LeftSide>
      <Text>
        <h1>{comment}</h1>
      </Text>
    </CommentBody>
  );
};