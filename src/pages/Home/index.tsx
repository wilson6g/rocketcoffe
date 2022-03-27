import React from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import coffeePng from "../../assets/rocket-coffee.png";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <h1>Great Coffee</h1>
        <h1 className="great-neon">&lt;Great Coffee/&gt;</h1>
        <img className="coffe-img" src={coffeePng} alt="coffee" /> 
      </Container>
    </>
  );
}
