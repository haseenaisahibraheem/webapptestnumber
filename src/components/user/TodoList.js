import React, { Component } from "react";
import classNames from "classnames";
import { Container, Row, Col, Button } from "reactstrap";

import "../../style/User.TodoList.css";

export default class TodoList extends Component {
  render() {
    const { item, onClicked } = this.props;
    return (
      <div className="TodoList">
        <Row>
          <Col sm="8">
            <p
              className={classNames("todo-item", {
                "todo-item-complete": item.isComplete
              })}
            >
              {item.title}
            </p>
          </Col>
          <Col sm="4">
            <Button color="secondary" size="sm" onClick={onClicked}>
              Change
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
