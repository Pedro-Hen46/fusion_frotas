import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { AiFillLock } from "react-icons/ai";
import styled from "styled-components";
import Bg_image from "../../lib/images/bg.jpeg";
import Logo_image from "../../lib/images/LOGO_FUSION.png";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import config from "../../config/assets/usersBase.json";

export default function HomePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ip, setIP] = useState("");

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");

    setIP(res.data.ip);
    localStorage.setItem("@clientIP", JSON.stringify(res.data.ip));
    notifyAboutSystem();
  };

  useEffect(() => {
    getData();
  }, []);

  function login(event) {
    event.preventDefault();

    checkLoginAndPass(email, password);
  }

  function checkLoginAndPass(email, pass) {
    const isValid = config.users.find((item) => {
      if (item.login === email && item.pass_ === pass) {
        localStorage.setItem(
          "@userData",
          JSON.stringify({
            login: item.login,
            name: item.name,
          })
        );
        sessionStorage.setItem("asLogged", true);
        return true;
      }
      return false;
    });
    if (isValid) {
      navigate(`/vehicles-resume`);
    } else {
      toast.error("Usuário ou senha incorretos, tente novamente", {
        position: "bottom-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  function notifyAboutSystem() {
    toast.success(
      "Atenção use o plataforma em ambiente controlado, não compartilhe sua senha com ninguem",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  }

  return (
    <ContainerPage>
      <img src={Bg_image} alt="bg" />
      <span>
        Bem vindo ao <strong>sistema de frotas</strong>
      </span>
      <img src={Logo_image} className="fusion-logo" alt="Logo da empresa" />
      <ToastContainer />
      <br />
      <form onSubmit={(e) => login(e)} autocomplete="off">
        <tt>Entre com seu Login:</tt>
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          autocomplete="off"
          type="email"
        ></input>

        <tt>Entre com sua Senha:</tt>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          autocomplete="off"
        ></input>
        <button>ACESSAR</button>
      </form>

      <span>
        Plataforma desenvolvida por{" "}
        <a
          href="mailto:driverique@gmail.com?subject=Fusion%20PassLock"
          onClick={() =>
            toast.info("Redirecionando para Email do Desenvolvedor.", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          }
        >
          Pedro Henrique
        </a>
        .
      </span>
      {ip !== "" ? (
        <div className="my_ip">
          <AiFillLock />
          <h4>
            Seu IP: <strong>{ip}</strong>
          </h4>
        </div>
      ) : (
        <div className="my_ip">
          <AiFillLock />
          <h4>
            Aguarde, capturando seu <strong>IP</strong>.
          </h4>
        </div>
      )}
    </ContainerPage>
  );
}

const ContainerPage = styled.div`
  padding: 2rem;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img:nth-child(1) {
    width: 100vw;
    height: 100vh;

    position: fixed;
    left: 0;
    top: 0;
    object-fit: cover;
    z-index: -1;

    opacity: 0.3;
  }
  .fusion-logo {
    width: 80%;
    max-width: 300px;
    height: auto;
    object-fit: contain;
  }

  h1 {
    font-family: "Poppins";
    color: black;
    font-size: 2rem;
    text-align: center;
    letter-spacing: 0.1rem;
  }
  .my_ip {
    width: 100%;
    position: fixed;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins";
    color: #20d420;
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.75);

    cursor: not-allowed;
    h4 {
      margin-left: 5px;
      font-weight: 400;
    }
  }
  span {
    text-transform: uppercase;
    font-family: "Poppins";
    color: black;
    font-size: 0.8rem;
  }

  tt {
    color: #252422;
    font-weight: 600;
    text-transform: uppercase;
  }
  a {
    color: #252422;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      filter: brightness(0.6);
    }
  }
  form {
    width: 90%;
    display: flex;
    flex-direction: column;

    margin-bottom: 20px;

    button {
      margin-top: 10px;
      height: 60px;
      border-radius: 10px;
      text-transform: uppercase;
      color: #fffcf2;
      background-color: #252422;

      font-weight: 600;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;

      transition: 0.3s linear;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
    input {
      margin-bottom: 10px;
    }
  }
`;
