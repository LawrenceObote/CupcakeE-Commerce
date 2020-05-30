import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import {Container} from 'reactstrap';

export default function Item() {
    return (
        <div className="wrapper">
            <Container>
            <Card className="card-margin-top">
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>name FROM DATABASE</CardTitle>
                    <CardSubtitle>price(REPLACE)</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                </Card>
            </Container>
        </div>
    )
}
