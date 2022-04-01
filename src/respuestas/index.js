import React from "react";
import {  Card, Row, Col } from "react-bootstrap";
function Respuestas(props){
    return (
            <Row className="mb-2">
                <Col>
                    <Card body>{props.text}</Card>
                </Col>
            </Row>
    )
}

export { Respuestas }