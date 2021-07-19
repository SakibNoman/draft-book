import React from "react";
import { Row } from "react-bootstrap";
import DraftCard from "../DraftCard/DraftCard";
import "./Home.css";

const data = [
  {
    title: "First Card",
    description:
      "My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r ",
  },
  {
    title: "Second Card",
    description:
      "My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you",
  },
  {
    title: "Second Card",
    description:
      "My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you",
  },
  {
    title: "Second Card",
    description:
      "My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you",
  },
  {
    title: "Second Card",
    description:
      "My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you My job is you r My job is you r My job is you r My job is you r My job is you r My job is you r My job is you",
  },
];

const Home = () => {
  return (
    <>
      <Row className="justify-content-center">
        {data.map((each) => (
          <DraftCard
            title={each.title}
            description={each.description}
          ></DraftCard>
        ))}
      </Row>
    </>
  );
};

export default Home;
