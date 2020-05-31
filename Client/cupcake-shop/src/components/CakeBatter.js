import React from 'react'
import NavigationBar from './NavigationBar';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import Item from './Item'

export default function CakeBatter() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Row className="side-margin">
                <Col md="4">
                    <Item></Item>
                </Col>
                <Col md="4">
                <Item></Item>
                </Col>
                <Col md="4">
                <Item></Item>
                </Col>
            </Row>
        </div>
    )
}
