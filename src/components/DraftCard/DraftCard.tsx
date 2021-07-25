import React from "react";
import { Card } from "react-bootstrap";
import "./DraftCard.css";

interface IProps {
  title: string;
  description: string;
  dateTime: string;
}

const DraftCard = ({ title, description, dateTime }: IProps) => {
  return (
    <Card className="m-3 custom-card" style={{ width: "18rem" }}>
      <Card.Body>
        {/* <Card.Text><small>{dateTime}</small></Card.Text> */}
        <Card.Title>{title}</Card.Title>
        <Card.Text>{<pre>{description}</pre>}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DraftCard;
