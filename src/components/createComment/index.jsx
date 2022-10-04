import { useState } from "react";
import Header from "../header";
import headerImg from "../../assets/yumyum.png";
import TRASH from "../../assets/trash.svg";
import SEND from "../../assets/send.svg";
import HOME from "../../assets/home.svg";
import { Navbar, Forms } from "./style";

export default function CreateComment() {
  const [comment, setComment] = useState("");


  return (
    <>
      <Header headerImg={headerImg} />
      <Forms>
        {<form action="">
          <input
            type="text"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="description"
          />
        </form>}
      </Forms>
      <Navbar>
        <img src={TRASH} alt="trash button" /> {/* volta para a página anterior */}
        <img src={HOME} alt="home button" /> {/* volta para a home */}
        <img src={SEND} alt="send button" /> {/* envia o post */}
      </Navbar>
    </>
  );
};