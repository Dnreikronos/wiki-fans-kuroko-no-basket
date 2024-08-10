import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Placeholder from "react-bootstrap/Placeholder";

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

const CharactersDiv = () => {
  return (
    <>
      <Container maxWidth="xl">
     
        <div className="d-flex justify-content-aroun w-70  bg-black  rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={kagami} />
            <Card.Body>
              <Card.Title className="d-flex text-white text-4xl">
                Kagami Tsurugi
              </Card.Title>
              <Card.Text></Card.Text>
              <Button variant="outlined">
                <Link to="/DetailKagami">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-center  w-70 bg-black rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={tetsuya} />
            <Card.Body>
              <Card.Title className="d-flex right-11 text-white text-4xl">
                Tetsuya Kuroko
              </Card.Title>
              <Card.Text></Card.Text>
              <Button variant="outlined">
              <Link to="/DetailKuroko">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-center  w-70  bg-black rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={aomine} />
            <Card.Body>
              <Card.Title className="d-flex text-white right-11 text-4xl">
                Daiki Aomine
              </Card.Title>
              <Card.Text></Card.Text>
              <Button variant="outlined">
              <Link to="/DetailAomine">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-center  w-70  bg-black">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={murasakibara} />
            <Card.Body>
              <Card.Title className="d-flex text-white right-11 text-4xl">
                Atsushi Murasakibara
              </Card.Title>
              <Card.Text></Card.Text>
              <Button variant="outlined">
              <Link to="/DetailMurasakibara">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-center  w-70  bg-black rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={midorima} />
            <Card.Body>
              <Card.Title className="d-flex right-11 text-white text-4xl">
                Midorima
              </Card.Title>
              <Card.Text></Card.Text>
              <Button variant="outlined">
              <Link to="/DetailMidorima">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-center  w-70  bg-black rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={akashi} />
            <Card.Body>
              <Card.Title className="d-flex text-white right-11 text-4xl">
                Akashi
              </Card.Title>
              <Card.Text></Card.Text>
              <Button variant="outlined">
              <Link to="/DetailAkashi">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-center  w-70  bg-black rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={kise} />
            <Card.Body>
              <Card.Title className="d-flex right-11 text-white text-4xl">
                Ryōta Kise
              </Card.Title>
              <Card.Text></Card.Text>
              <Button variant="outlined">
              <Link to="/DetailKise">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
      {/* </div> */}
    </>
  );
};

export default CharactersDiv;
