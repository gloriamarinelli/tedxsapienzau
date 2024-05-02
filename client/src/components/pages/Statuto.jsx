import React from "react";
import { useOutletContext } from "react-router";
import "../../index.css";
import { Container, Row, Col } from "react-bootstrap";
import Statute from "../images/statuto.pdf";

export default function Statuto() {
  const [windowSize, setWindowSize] = useOutletContext();

    return (
      <Container className="w-100 me-0 ms-0 pe-0 pb-0 mb-0 ps-0" fluid style={{marginTop: "20px"}}>
        <Row>
          <Col>
            <iframe className="w-100" src={Statute} height={1000}/>
          </Col>
        </Row>
        
      </Container>

    );
  }

