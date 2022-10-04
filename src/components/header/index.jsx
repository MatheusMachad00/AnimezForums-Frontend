import { Logo, ProfileAvatar, Head, Bar } from "./style"

export default function Header({headerImg}) {
  return (
    <>
    <Head>
      <Logo>
        <h1>AnimezForums</h1>
        <img src={headerImg} alt="character logo" />
      </Logo>
      <ProfileAvatar>
      <img src="./assets/albedo2.png" alt="" />
      </ProfileAvatar>
    </Head>
    <Bar></Bar>
    </>
  );
}