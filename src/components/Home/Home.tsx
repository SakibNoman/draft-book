import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
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

  const [pinned, setPinned] = useState<IDraft[]>([]);

  const [draftList, setDraftList] = useState<IDraft[]>([]);

  const onClick = () => {
    setDraftList([draft, ...draftList]);
    setDraft({
      title: "",
      description: "",
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setDraft({ ...draft, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="row">
      <div className="mt-5 col-md-3 input-area">
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
      <div className="justify-content-center d-flex flex-column body-area col-md-9">
        {pinned.length === 0 ? (
          ""
        ) : (
          <div className="justify-content-center d-flex flex-wrap border-bottom border-3 border-secondary">
            <h4 className="text-secondary">Pinned</h4>
            {draftList.map((each) =>
              each.title.length > 0 ? (
                <DraftCard
                  title={each.title}
                  description={each.description}
                  key={each.title}
                  dateTime={new Date().toLocaleString()}
                ></DraftCard>
              ) : (
                ""
              )
            )}
          </div>
        )}
        <div className="justify-content-center d-flex flex-wrap">
          {draftList.map((each) =>
            each.title.length > 0 ? (
              <DraftCard
                title={each.title}
                description={each.description}
                key={each.title}
                dateTime={new Date().toLocaleString()}
              ></DraftCard>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
