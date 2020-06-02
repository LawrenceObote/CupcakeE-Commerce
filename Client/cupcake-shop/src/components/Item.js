import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import {Container} from 'reactstrap';

export default function Item(props) {
    return (
        <div className="wrapper">
            <Container>
            <Card className="card-margin-top">
                <CardImg top width="100%" height="300px" src={props.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.price}</CardSubtitle>
                    
                </CardBody>
                </Card>
            </Container>
        </div>
    )
}
