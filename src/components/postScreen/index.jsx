import Header from "../header/index";
import headerImg from "../../assets/Aqua.(KonoSuba).full.3362480.png"
import userAvatar from "../../assets/avatar.jpg"
import STAR_WHITE from "../../assets/star-white.svg";
import HOME from "../../assets/home.svg"
import CHATBOX from "../../assets/chatbox.svg"
import { PostHeader, LeftSide, TextPost, CommentBody, Navbar, MainBody, Bar } from "./style";
import Comment from "../comment/index";


export default function PostScreen() {

  return (
    <MainBody>
      <Header headerImg={headerImg} />
        <Bar></Bar>
      <PostHeader>
        <LeftSide>
          <img src={userAvatar} alt="user avatar" />
          <h2>Nazuna</h2>
        </LeftSide>
        <h1>Episódio 13 de Overlord</h1>
        <img src={STAR_WHITE} alt="star" />
      </PostHeader>
      <TextPost>
        <h1>Ainz Ooal Gown calmly states that he instead should be thanking Shalltear
          Bloodfallen for her overconfidence. Shalltear believes Ainz is bluffing but is now
          wondering why Ainz has yet to retreat. Ainz explains the tactics of PVP and the use of
          misinformation. Shalltear realizes that she was led to believe that Ainz didn't know
          about her abilities from the start. In fact, Ainz was lying, making Shalltear think
          everything is going according to her master's plan. Scared at the possibility that
          she walked into a trap she retaliates, intending to pierce Ainz with Spuit Lance.
          Ainz is suddenly garbed in silver armor. The Floor Guardians watching from Nazarick
          realize that the armor is Touch Me's personal armor. Demiurge deduces that Ainz used
          [Perfect Warrior] to wear the armor without penalty. Shalltear cries in pain as she is
          slashed across the chest. She sees that her opponent now wields a katana, which she
          recognizes as Takemikazuchi MK 8, another weapon of the Supreme Beings. Ainz declares
          that he possesses the strength of all Forty-One Supreme Beings.
        </h1>
        <CommentBody>
          <Comment />
          <Comment />
          <Comment />
        </CommentBody>
      </TextPost>
      <Navbar>
      <img src={HOME} alt="home button" />
      <img src={CHATBOX} alt="chatbox button" />
      </Navbar>
    </MainBody>
  );
};