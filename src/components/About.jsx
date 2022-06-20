import React from "react";
import miFoto from "../img/miFoto.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContenedorAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #343a40;
  border-radius: 10px 15px 10px 15px;
  width:500px;
  background-color: #343a40 ;
  margin-left:550px;
  margin-top:10px;
  text-decoration:none;
  `;
  
  export const IsSpan = styled.span`
  flex-grow: 1;
  font-weight: bold;
  font-size: 25px;
  justify-content: center;
  flex-grow: 1;
`;

export const IsImg = styled.img`
margin:50px
`;


export default function About() {
  return (
    <ContenedorAbout>
      <Link to='/' >
      <IsSpan>Aplicacion Creada por: Carlos</IsSpan>
      </Link>
      <IsImg src={miFoto} alt="miFoto" />
    </ContenedorAbout>
  );
}
