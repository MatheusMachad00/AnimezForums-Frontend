import headerImg from "../../assets/avatar.jpg";
import STAR_WHITE from "../../assets/star-white.svg";
import { CommentBody, LeftSide, Text } from "./style";

export default function Comment() {
  return (
    <CommentBody>
      <LeftSide>
        <img className="avatar" src={headerImg} alt="" />
        <h2>Nazuna</h2>
        <img src={STAR_WHITE} alt="star" />
      </LeftSide>
      <Text>
        <h1>
          Ainz Ooal Gown calmly states that he instead should be thanking Shalltear
          Bloodfallen for her overconfidence. Shalltear believes Ainz is bluffing but is now
          wondering why Ainz has yet to retreat. Ainz explains the tactics of PVP and the use of
          misinformation. Shalltear realizes that she was led to believe that Ainz didn't know
          about her abilities from the start. In fact, Ainz was lying, making Shalltear think
          everything is going according to her master's plan. Scared at the possibility that
          she walked into a trap she retaliates, intending to pierce Ainz with Spuit Lance.
          
        </h1>
      </Text>
    </CommentBody>
  );
};