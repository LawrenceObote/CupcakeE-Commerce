import React from 'react'
import NavigationBar from './NavigationBar'
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import Item from './Item'

export default function Cupcakes() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Row className="side-margin">
                <Col md="4">
                    <Item name={"Vanilla"} price={"$6"} image={"https://images.unsplash.com/photo-1567022432449-5cdf87e209a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}></Item>
                </Col>
                <Col md="4">
                <Item name={"Chocolate"} price={"$3"} image={"https://images.unsplash.com/photo-1583625494781-8f80e36bd727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}></Item>
                </Col>
                <Col md="4">
                <Item name={"Red-Velvet"} price={"$3"} image={"https://images.unsplash.com/photo-1582241785274-2009ebb9b440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}></Item>
                </Col>
            </Row>
            <Row className="side-margin">
                <Col md="4">
                    <Item name={"StrawBerry"} price={"$3"} image={"https://images.unsplash.com/photo-1555684655-49a1c6b94dd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}></Item>
                </Col>
                <Col md="4">
                <Item name={"Banana"} price={"$3"} image={"https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"}></Item>
                </Col>
                <Col md="4">
                <Item name={"Carrot"} price={"$3"} image={"https://images.unsplash.com/photo-1487124504955-e42a39e11aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1012&q=80"}></Item>
                </Col>
            </Row>
        </div>
    )
}
