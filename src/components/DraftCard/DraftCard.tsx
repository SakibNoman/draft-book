import React from "react";
import { Card } from "react-bootstrap";
import { GrPin } from "react-icons/gr";
import "./DraftCard.css";

interface IProps {
  title: string;
  description: string;
  dateTime: string;
  id: string;
}

const DraftCard = ({ title, description, dateTime, id }: IProps) => {
  return (
    <Card className="m-3 custom-card" style={{ width: "18rem" }}>
      <Card.Body>
        {/* <Card.Text><small>{dateTime}</small></Card.Text> */}
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>{title}</Card.Title>
          </div>
          <div className="pinIcon">
            <GrPin />
          </div>
        </div>
        <Card.Text>{<pre>{description}</pre>}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DraftCard;
