import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { LoginScreen } from "./style"

export default function Login({setUserData}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    setLoading(true);
    const LINK_API = "http://localhost:5000/login";
    const request = axios.post(LINK_API, {
      email,
      password
    });
    request.then(response => {
      const { data } = response;
      /* setUserData(data); */
      navigate("/home");
    })
    request.catch(err => {
      console.log(err.response);
      setLoading(false);
      alert("E-mail ou senha incorretos. Tente novamente.");
    });
  }

  return (
    <LoginScreen>
      <img src="./assets/logoMobile.png" alt="logo" />

      {<form onSubmit={login}>
        <input
          type="email"
          disabled={loading ? true : false}
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input
          type="password"
          disabled={loading ? true : false}
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">
          {loading ? (
            <ThreeDots color="#FFFFFF" height={13} align='center' />
          ) : (
            'Login'
          )}
        </button>
      </form>}
      <Link to={"/signup"}>
        <h2>Não tem cadastro? Faça o signup!</h2>
      </Link>
    </LoginScreen>
  );
}