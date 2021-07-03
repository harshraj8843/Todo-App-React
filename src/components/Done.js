import React from "react";

// components from react bootstrap
import { Button, Row, Col, Table } from "react-bootstrap";

import { Link } from "react-router-dom";

// importing context datas
import { todo_data } from "../App";

function Done() {
  // context data
  const context = React.useContext(todo_data);
  const dones = context.dones;

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
            <Button style={{ width: "100%" }} variant="danger" disabled>
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
          </tr>
        </thead>
        <tbody>
          {/* showing all done list data */}
          {dones.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <del>{item.title}</del>
              </td>
              <td>
                <del>{item.last_date}</del>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Done;
