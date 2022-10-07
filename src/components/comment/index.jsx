import headerImg from "../../assets/avatar.jpg";
import STAR_WHITE from "../../assets/star-white.svg";
import { CommentBody, LeftSide, Text } from "./style";
import { Link } from "react-router-dom";

export default function Comment(props) {
  const { comment, commentOwner, commentOwnerAvatar, userId, userLoggedId } = props;
  let commentBelongsToUser = false;
  if(userId === userLoggedId) commentBelongsToUser = true;


  return (
    <CommentBody commentBelongsToUser={commentBelongsToUser}>
      <LeftSide>
        <Link to={`/UserProfile/${userId}`}>
          <img className="avatar" src={commentOwnerAvatar} alt="" />
          {commentBelongsToUser ? <h2>You</h2> : <h2>{commentOwner}</h2>}
        </Link>
        {commentBelongsToUser ? <></> : <img src={STAR_WHITE} alt="star" />}
      </LeftSide>
      <Text>
        <h1>{comment}</h1>
      </Text>
    </CommentBody>
  );
};