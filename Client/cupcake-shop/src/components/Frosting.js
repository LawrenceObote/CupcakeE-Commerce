import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import Item from './Item'
import { render } from 'react-dom';
import axios from 'axios';
import AddComment from './AddComment';

class Frosting extends Component {

    constructor(props) {
        super(props);
        this.state = {frostings: [], isLoading: true};
        // this.remove = this.remove.bind(this);
        this.getFrostings = this.getFrostings.bind(this);
    }

     getFrostings = async () => {
       
        const {frostings} = this.state;
        const response = await axios.get('/cupcakeShop/v1/frosting/', frostings)
        this.setState({data: response.data})
       
        
    }


    componentDidMount(){
        axios.get(`/cupcakeShop/v1/frosting/`)
        .then(res => {
            const frostings = res.data;
            this.setState({frostings})
        })
    
    }
    render() {

        return (
        <div>
          <NavigationBar></NavigationBar>
            <Row>
            {this.state.frostings.map(frosting => 
            <Col md="4">
            <Item name={frosting.frostingName} price={`$` +`${frosting.price}`} image={frosting.imageURL}/>
            </Col>   
            )}
        </Row>

        <AddComment></AddComment>
        </div>
        ) 
}
}
export default Frosting;