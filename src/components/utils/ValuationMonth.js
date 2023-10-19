import React from "react";
import styled from "styled-components";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function ValuationMonth() {
  return (
    <ContainerPage>
      <h2>ESTE MÊS JÁ FOI GASTO:</h2>
      <h1>R$ 1.246,98</h1>
      <span>
        VALOR REFERENTE AO MÊS DE:
        <strong> {dayjs().locale("pt-br").format("MMMM")} </strong>
      </span>
    </ContainerPage>
  );
}
const ContainerPage = styled.div`
  width: 80vw;
  height: 20vh;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 800 !important;
    font-size: 3rem !important;
    color: red !important;
  }
  h2 {
    color: #000 !important;
    font-weight: 500 !important;
    font-size: 1.6rem !important;
  }
`;
