import React from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Button from "react-bootstrap/Button";
import kagami from "../images/kagami.jpg";
import tetsuya from "../images/tetsuya.png";

const Characters: React.FC = () => {
  return (
    
      
      <div className="d-flex justify-content-around bg-slate-50 w-60">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" className="h-80" src={kagami} />
          <Card.Body>
            <Card.Title className="d-flex right-11">Kagami</Card.Title>
            <Card.Text>
             
            </Card.Text>
            <Button variant="primary">Character Detail</Button>
          </Card.Body>
        </Card>
      </div>
    
    
  );
};

export default Characters;
