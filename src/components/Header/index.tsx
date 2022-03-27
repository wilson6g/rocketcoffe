import React from "react";
import { Container, ContentHeader, Nav } from "./styles";
import logoSvg from "../../assets/logo-desktop.svg";
import blur1Png from "../../assets/blur-1.png";

export function Header() {
  return (
    <Container>
      <ContentHeader>
        <div className="container-logo">
          <img className="logo" src={logoSvg} alt="rocketseat" />
        </div>
        <Nav>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Rewards</a>
          <a href="#">Gift Cards</a>
          <a href="#">Store</a>
        </Nav>
        <div className="container-get-coffee">
          <button>Get my coffe</button>
          <img className=" blur" src={blur1Png} alt="blur purple" />
        </div>
      </ContentHeader>
    </Container>
  );
}
