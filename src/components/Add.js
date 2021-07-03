import React from "react";

// components from react bootstrap
import { Button, Row, Col, Form } from "react-bootstrap";

import { Link } from "react-router-dom";

// for redirect to homepage after form submission
import { useHistory } from "react-router-dom";

// importing global context datas
import { todo_data } from "../App";

function Add() {
  const history = useHistory();

  // context data
  const context = React.useContext(todo_data);
  const todos = context.todos;
  const setTodos = context.setTodos;

  // useState veriables

  // for todo title
  const [title, setTitle] = React.useState("");

  // for todo last date
  const [date, setDate] = React.useState("");

  // for disabling submit button if title and last date is empty
  const [disabled, setDisabled] = React.useState(true);

  // onTitleChange function
  const onTitleChange = (e) => {
    console.log(title);
    setTitle(e.target.value);
  };

  // onDateChange function
  const onDateChange = (e) => {
    console.log(date);
    setDate(e.target.value);
  };

  // submit form
  const onClickHandler = (e) => {
    // prevent page from reloading on submission
    e.preventDefault();

    // create temp todo
    var temp_data = {
      title: title,
      last_date: date,
    };

    // adding temp todo to todo list
    var newTodos = [temp_data].concat(todos);

    // setTodo
    setTodos(newTodos);

    // redirect to homepage
    history.push("/");
  };

  // useEffect for checking title and date to be not empty
  React.useEffect(() => {
    // if title and date is not empty string
    if (date !== "" && title !== "") {
      // enable submit button
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
        {/* title input */}
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

        {/* last date input */}
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

        {/* submit button */}
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
