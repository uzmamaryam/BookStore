import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddBook } from "../store/acttion";
import 'bootstrap/dist/css/bootstrap.min.css';
const add = () => {
  const [title, settitle] = useState("");
  const [Author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("abc");
    const result = { title, Author };
    dispatch(AddBook(result));
   
  };
  console.log({ title });
  console.log({ Author });
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>book Title</Form.Label>
          <Form.Control
            onChange={(e) => settitle(e.target.value)}
            type="text"
            placeholder="Enter the Title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author</Form.Label>
          <Form.Control
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Author"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>{" "}
    </div>
  );
};

export default add;