import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";


export default function FooterIp({ip}){
    
    return( 
        <Footer>
            < AiFillLock />
            <span>Seu IP: {ip}</span>
        </Footer>
    )
}

const Footer = styled.div`
position: fixed;
width: 100vw;
height: 20px;
left: 0;
bottom: 10px;
background-color: rgba(0,0,0,0.75);
backdrop-filter: blur(3px);
display: flex;
align-items: center;
justify-content: center;
color: #20d420 !important;

span{
    margin-left: 5px;
    color: #20d420 !important;
    font-weight: 700;
}

&:hover{
    cursor: not-allowed;
}

`