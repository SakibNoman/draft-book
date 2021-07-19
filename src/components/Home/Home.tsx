import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import DraftCard from "../DraftCard/DraftCard";
import "./Home.css";

interface IDraft {
  title: string;
  description: string;
}

const Home = () => {
  const [draft, setDraft] = useState<IDraft>({
    title: "",
    description: "",
  });

  const [draftList, setDraftList] = useState<IDraft[]>([]);

  const onClick = () => {
    setDraftList([...draftList, draft]);
    setDraft({
      title: "",
      description: "",
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mt-5 input-area">
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Control
              className="input-box"
              name="title"
              type="text"
              placeholder="Title"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              className="input-box"
              as="textarea"
              placeholder="Description"
              name="description"
              rows={3}
              onChange={onChange}
            />
          </Form.Group>
          <Button onClick={onClick} variant="dark">
            Add To List
          </Button>
        </Form>
      </div>
      <Row className="justify-content-center">
        {draftList.map((each) => (
          <DraftCard
            title={each.title}
            description={each.description}
            key={each.title}
          ></DraftCard>
        ))}
      </Row>
    </>
  );
};

export default Home;
