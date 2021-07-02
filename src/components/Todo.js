import React from "react";

import { Button, Row, Col, Table } from "react-bootstrap";

import { Link } from "react-router-dom";

// importing global contex datas
import { todo_data } from "../App";

function Todo() {
  const context = React.useContext(todo_data);
  const todos = context.todos;
  const setTodos = context.setTodos;
  const dones = context.dones;
  const setDones = context.setDones;

  // when done button clicked
  const DoneClick = (item, index) => {
    // add todo to done list
    var temp_data = {
      title: item.title,
      last_date: item.last_date,
    };
    var newDones = [temp_data].concat(dones);
    setDones(newDones);

    // delete todo from todo list
    let temp_todos = todos.slice(0, index).concat(todos.slice(index + 1));
    setTodos(temp_todos);
  };

  return (
    <div className="m-5">
      <Row className="my-3">
        <Col>
          <Button style={{ width: "100%" }} variant="success" disabled>
            Todo
          </Button>
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
          <Link to="/add">
            <Button style={{ width: "100%" }} variant="primary">
              Add Todo
            </Button>
          </Link>
        </Col>
      </Row>

      <Table striped bordered hover size="sm" className="text-center my-5">
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Title</th>
            <th>Last Date</th>
            <th>Mark Done</th>
          </tr>
        </thead>
        <tbody>
          {/* showing todo list data */}
          {todos.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.last_date}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    DoneClick(item, index);
                  }}
                >
                  Done
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Todo;
