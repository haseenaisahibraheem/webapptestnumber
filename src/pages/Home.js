import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import TextTransform from "../components/TextTransform";
import SlideHome from "../components/SlideHome";
import User from "../components/user/User";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container>
          <Row>
            <Col>
              <TextTransform />
              <SlideHome />
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <User />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
