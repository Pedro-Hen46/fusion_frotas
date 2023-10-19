import styled from "styled-components";
import { HiUserCircle } from "react-icons/hi2";

export default function Header({ name, setSearch, search }) {
  return (
    <>
      <ContainerPage>
        <HiUserCircle size={100} />
        <div>
          <span>
            Olá, <strong>{name}</strong>!{" "}
          </span>
          <br />
          <span>Seja bem vindo(a).</span>
          <br />

        </div>
      </ContainerPage>
    </>
  );
}
const EditProfile = styled.div`
  width: 50px;
  height: 50px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    border-radius: 10px;

    width: 100%;
    height: 100%;
    margin-left: 10px;
    background-color: none !important;

    color: #fff;
    font-size: 32px;
  }

  transition: 0.3s linear infinite;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  }
`;

const ContainerPage = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin-left: 0.4rem;
    flex-direction: column;
    text-align: center;
    span {
      font-size: 1rem;
    }
  }

  button {
    background-color: #252422;
  }
`;
