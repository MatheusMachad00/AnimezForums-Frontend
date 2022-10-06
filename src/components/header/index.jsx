import { Logo, ProfileAvatar, Head, Bar, MainBody } from "./style"


export default function Header({headerImg, avatar}) {
  return (
    <MainBody>
    <Head>
      <Logo>
        <h1>AnimezForums</h1>
        <img src={headerImg} alt="character logo" />
      </Logo>
      <ProfileAvatar>
      <img src={avatar} alt="" />
      </ProfileAvatar>
    </Head>
    </MainBody>
  );
}