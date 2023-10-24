import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Vehicle({ data, price }) {
  console.log(data);

  useEffect(() => {}, []);
  return (
    <ContainerPage>
      <Link to={`/password/`}>
        <ContainerVehicle>
          <div className="ion">
            <ion-icon name="car" className="ion"></ion-icon>
          </div>
          <div>
            <h3>{data.name}</h3>
            <span>VALOR TOTAL GASTO NO MÊS</span>
            <h2>R$ {price}</h2>
            <span> mais informações</span>
          </div>
        </ContainerVehicle>
      </Link>
    </ContainerPage>
  );
}
const ContainerVehicle = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 400px;
  min-height: 150px;
  height: 200px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0);
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3px);
  margin-right: 20px;

  display: flex;
  justify-content: space-evenly;

  align-items: center;

  margin-top: 20px;
  .ion {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 90px;
    color: #000;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      color: red;
      font-size: 3rem;
      font-weight: 800;
    }

    h3 {
      color: #000;
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 800;

      max-width: 250px; // Limite maximo do texto
      white-space: nowrap; // Removendo quebra de linha
      overflow: hidden; // Removendo a barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final do texto
    }
    span {
      font-size: 0.8rem;
      color: darkgray;
      font-weight: 500;
    }
  }

  transition: 0.3s linear;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  }
`;
const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
