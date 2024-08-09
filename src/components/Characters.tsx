import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom"
import Placeholder from "react-bootstrap/Placeholder";
import Button from "react-bootstrap/Button";
import kagami from "../images/kagami.jpg";
import tetsuya from "../images/tetsuya.png";
import aomine from "../images/daiki_aomine.png"
import murasakibara from "../images/murasakibara.png"
import kise from "../images/kise.png"
import akashi from "../images/akashi.png"
import tetsuya2 from "../images/testsuya2.png"
import midorima from "../images/midorima.png"
const Characters: React.FC = () => {
  return (
    <>
      <div className="h-56 grid grid-cols-4  gap-5 content-start   bg-opacity-85">
      
        <div className="d-flex justify-content-aroun w-70  bg-white  rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={kagami} />
            <Card.Body>
              <Card.Title className="d-flex text-4xl">Kagami Tsurugi</Card.Title>
              <Card.Text></Card.Text>
              <Button className="bg-sky-200" variant="primary  text-18rem ">
                <Link to="/DetailKagami">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      
        <div className="d-flex justify-center  w-70  bg-white rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={tetsuya} />
            <Card.Body>
              <Card.Title className="d-flex right-11 text-4xl">
                Tetsuya Kuroko
              </Card.Title>
              <Card.Text></Card.Text>
              <Button className="bg-sky-200" variant="primary  text-18rem ">
                <Link to="/DetailKuroko">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-center  w-70  bg-white rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={aomine} />
            <Card.Body>
              <Card.Title className="d-flex right-11 text-4xl">
                Daiki Aomine
              </Card.Title>
              <Card.Text></Card.Text>
              <Button className="bg-sky-200" variant="primary  text-18rem ">
                <Link to="/DetailAomine">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>


        <div className="d-flex justify-center  w-70  bg-white">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={murasakibara} />
            <Card.Body>
              <Card.Title className="d-flex right-11 text-4xl">
                Atsushi Murasakibara
              </Card.Title>
              <Card.Text></Card.Text>
              <Button className="bg-sky-200" variant="primary  text-18rem ">
                <Link to="/DetailMurasakibara">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-center  w-70  bg-white rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={midorima} />
            <Card.Body>
              <Card.Title className="d-flex right-11 text-4xl">
                Midorima
              </Card.Title>
              <Card.Text></Card.Text>
              <Button className="bg-sky-200" variant="primary  text-18rem ">
                <Link to="/DetailMidorima">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-center  w-70  bg-white rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={akashi} />
            <Card.Body>
              <Card.Title className="d-flex right-11 text-4xl">
               Akashi
              </Card.Title>
              <Card.Text></Card.Text>
              <Button className="bg-sky-200" variant="primary  text-18rem ">
                <Link to="/DetailAkashi">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-center  w-70  bg-white rounded-xl">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="h-100" src={kise} />
            <Card.Body>
              <Card.Title className="d-flex right-11 text-4xl">
              Ryōta Kise
              </Card.Title>
              <Card.Text></Card.Text>
              <Button className="bg-sky-200" variant="primary  text-18rem ">
                <Link to="/DetailKise">Character Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

      

      </div>
    </>
  );
};

export default Characters;
