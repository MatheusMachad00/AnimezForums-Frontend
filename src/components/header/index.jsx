import { Logo, ProfileAvatar, Head, Bar, MainBody } from "./style"
import userAvatar from "../../assets/avatar.jpg"

export default function Header({headerImg}) {
  return (
    <MainBody>
    <Head>
      <Logo>
        <h1>AnimezForums</h1>
        <img src={headerImg} alt="character logo" />
      </Logo>
      <ProfileAvatar>
      <img src={userAvatar} alt="" />
      </ProfileAvatar>
    </Head>
    </MainBody>
  );
}