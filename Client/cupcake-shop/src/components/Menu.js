import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
        <Container>
            <Row>
                <Col md="4">
                <Card>
                        <CardImg top width="100%" src="https://bakerish.com/wp-content/uploads/2019/03/VANILLA-CUPCAKES.jpg" alt="Cupcake" />
                        <CardBody>
                        <CardTitle tag={Link} to="/cupcakes">Cupcakes</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                <Card>
                        <CardImg top width="100%" src="https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/07/homemade-cake-pops-5.jpg" alt="Cake Batter" />
                        <CardBody>
                        <CardTitle tag={Link} to="/cakebatter">Cake Batter</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardImg top width="100%" src="https://i0.wp.com/brookewilkerson.com/wp-content/uploads/2019/09/cream-cheese-frosting.jpg?fit=683%2C1024&ssl=1" alt="Frosting" />
                        <CardBody>
                        <CardTitle tag={Link} to="/frosting">Frosting</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

