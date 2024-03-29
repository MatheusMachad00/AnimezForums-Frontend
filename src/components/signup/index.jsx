import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { SignScreen } from "./style"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function submitData(event) {
    event.preventDefault();
    setLoading(true);
    const LINK_API = "http://localhost:5000/signup";
    const request = axios.post(LINK_API, {
      username,
      email,
      password,
      avatar
    });
    request.then(response => {
      navigate("/");
      alert('Cadastrado com sucesso!');
    });
    request.catch(err => {
      console.log(err.response);
      setLoading(false);
      alert("E-mail ja cadastrado. Tente novamente.");
    });
  }

  return (
    <SignScreen>
      <img src="./assets/logoMobile.png" alt="logo" />

      <form onSubmit={submitData}>
        <input
          type="text"
          id="username"
          disabled={loading ? true : false}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />

        <input
          type="email"
          id="email"
          disabled={loading ? true : false}
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input
          type="password"
          id="password"
          disabled={loading ? true : false}
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <input
          type="url"
          id="avatarURL"
          disabled={loading ? true : false}
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)} />


        <button type="submit" id="send-button">
          {loading ? (
            <ThreeDots color="#FFFFFF" height={13} align='center' />
          ) : (
            'Signup'
          )}
        </button>
      </form>
      <Link to={"/"}>
        <h2>Já tem cadastro? Faça o login!</h2>
      </Link>
    </SignScreen>
  );
}