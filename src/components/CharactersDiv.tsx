import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import kagami from "../images/kagami.jpg";
import tetsuya from "../images/tetsuya.png";
import aomine from "../images/daiki_aomine.png";
import murasakibara from "../images/murasakibara.png";
import kise from "../images/kise.png";
import akashi from "../images/akashi.png";
import tetsuya2 from "../images/testsuya2.png";
import midorima from "../images/midorima.png";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import CarouselComponent from "./Galery";

const CharactersDiv = () => {
  return (
    <>
      <Container maxWidth="xl">

        <CarouselComponent/>

      </Container>
    </>
  );
};

export default CharactersDiv;
