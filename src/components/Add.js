import React from "react";

import { Button, Row, Col, Form } from "react-bootstrap";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

// importing global context datas
import { todo_data } from "../App";

function Add() {
  const history = useHistory();

  const context = React.useContext(todo_data);
  const todos = context.todos;
  const setTodos = context.setTodos;

  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");

  const [disabled, setDisabled] = React.useState(true);

  const onTitleChange = (e) => {
    console.log(title);
    setTitle(e.target.value);
  };

  const onDateChange = (e) => {
    console.log(date);
    setDate(e.target.value);
  };

  // submit form
  const onClickHandler = (e) => {
    e.preventDefault();

    // adding new todo to todo list
    var temp_data = {
      title: title,
      last_date: date,
    };
    var newTodos = [temp_data].concat(todos);
    setTodos(newTodos);

    // redirect to '/'
    history.push("/");
  };

  React.useEffect(() => {
    if (date !== "" && title !== "") {
      setDisabled(false);
    } else {
      // submit button will be disabled when title or date is empty string
      setDisabled(true);
    }
  }, [date, title]);

  return (
    <div className="m-5">
      <Row className="my-3">
        <Col>
          <Link to="/">
            <Button style={{ width: "100%" }} variant="success">
              Todo
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to="/done">
            <Button style={{ width: "100%" }} variant="danger">
              Done
            </Button>
          </Link>
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <Button style={{ width: "100%" }} variant="primary" disabled>
            Add Todo
          </Button>
        </Col>
      </Row>

      <Form>
        <Form.Group controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => {
              onTitleChange(e);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formGridTitle">
          <Form.Label>Last Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Last Date"
            value={date}
            onChange={(e) => {
              onDateChange(e);
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={disabled}
          onClick={(e) => {
            onClickHandler(e);
          }}
        >
          Add Todo
        </Button>
      </Form>
    </div>
  );
}

export default Add;
