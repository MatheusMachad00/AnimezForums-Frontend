import { Logo, ProfileAvatar, Head, Bar } from "./style"

export default function Header() {
  return (
    <>
    <Head>
      <Logo>
        <h1>AnimezForums</h1>
        <img src="./assets/shaltear.png" alt="shaltear logo" />
      </Logo>
      <ProfileAvatar>
      <img src="./assets/albedo2.png" alt="" />
      </ProfileAvatar>
    </Head>
    <Bar></Bar>
    </>
  );
}