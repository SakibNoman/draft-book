import React from "react";
import { Card } from "react-bootstrap";
import "./DraftCard.css";

interface IProps {
  title: string;
  description: string;
}

const DraftCard = ({ title, description }: IProps) => {
  return (
    <Card className="m-3 custom-card" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DraftCard;
