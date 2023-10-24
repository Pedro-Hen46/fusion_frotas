import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Bg_image from "../../lib/images/bg.jpeg";

import Header from "./Header";
import Vehicle from "../../utils/Vehicle";
import FooterIp from "../../utils/FooterIp";

import { ToastContainer, toast } from "react-toastify";
import ValuationMonth from "../../utils/ValuationMonth";
import axios from "axios";

import { TailSpin } from "react-loader-spinner";

export default function UserLogged() {
  const SERVER_URL = "http://192.168.15.195:3002";
  const [clientIPStorage, setClientIPStorage] = useState("");
  const [clientData, setClientData] = useState("");
  const [vaults, setVaults] = useState([]);
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isLogged, setIsLogged] = useState(sessionStorage.getItem("asLogged"));
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (isLogged === null) {
        sessionStorage.clear();
        navigate("/");
      }

      setClientIPStorage(JSON.parse(localStorage.getItem("@clientIP")));
      setClientData(JSON.parse(localStorage.getItem("@userData")));

      const promise = axios.get(`${SERVER_URL}/vehicles`);
      setLoading(true);
      promise.then((res) => {
        setVaults(res.data.vehicles); //Adicionando os dados do veiculo dentro da variavel que manda para outros componentes.
        setLoading(false);
      });
      promise.catch((err) => console.log(err));

      // toast.success(
      //   "Atenção se atente a data prevista para alteração das senhas!",
      //   {
      //     position: "bottom-center",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: false,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   }
      // );
    } catch (error) {
      console.log(error);
    }
  }, [navigate, isLogged]);

  return (
    <>
      {clientData.statusCode === 401 ? (
        <h1>Ops! parece que não está conectado</h1>
      ) : (
        <ContainerPage>
          <img src={Bg_image} alt="Imagem de fundo" />
          <Header
            name={clientData.name}
            setSearch={setSearch}
            search={search}
          />
          <ValuationMonth />
          {/* <NextUpdateInPass /> */}
          <ToastContainer />
          <br /> <br />
          <span>VEÍCULOS DA EMPRESA:</span>
          <ContainerPasswordsCard>
            {vaults.length === 0 ? (
              <ContainerLoading>
                <TailSpin
                  height="100"
                  width="100"
                  color="red"
                  ariaLabel="tail-spin-loading"
                  radius="2"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
                <h2>CARREGANDO, AGUARDE...</h2>
              </ContainerLoading>
            ) : (
              vaults.map((item, index) => {
                return <Vehicle price="400" data={item} key={index} />;
              })
            )}
          </ContainerPasswordsCard>
          <FooterIp ip={clientIPStorage} />
        </ContainerPage>
      )}
    </>
  );
}
const ContainerLoading = styled.div`
  margin-top: 30px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const ContainerPasswordsCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const ContainerPage = styled.div`
  padding: 2rem;
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  img:nth-child(1) {
    width: 100vw;
    height: 100vh;
    opacity: 0.3;

    position: fixed;
    left: 0;
    top: 0;
    object-fit: cover;
    z-index: -1;
  }
  img {
    width: 80%;
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

  span {
    text-transform: uppercase;
    font-family: "Poppins";
    color: black;
    font-size: 0.8rem;
  }

  tt {
    color: #929bf4;
    font-weight: 600;
    text-transform: uppercase;
  }
  a {
    color: #929bf4;
    font-weight: 700;
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
      color: #929bf4;
      background-color: #575d92;

      font-weight: 600;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;

      transition: 0.3s linear;
      &:hover {
        font-size: 1.2rem;
        cursor: pointer;
        color: #d3d7fa;

        box-shadow: 0px 0px 10px rgba(146, 155, 244, 0.9);
      }
    }
    input {
      margin-bottom: 10px;
    }
  }
`;
