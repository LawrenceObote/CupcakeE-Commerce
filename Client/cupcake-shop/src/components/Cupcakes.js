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
import AddComment from './AddComment'
import Comment from './Comment';

class Cupcakes extends Component {

    constructor(props) {
        super(props);
        this.state = {cupcakes: [], isLoading: true};
        // this.remove = this.remove.bind(this);
        this.getCupcakes = this.getCupcakes.bind(this);
    }

     getCupcakes = async () => {
       
        const {cupcakes} =this.state;
        const response = await axios.get('http://localhost:8070/cupcakeShop/v1/cupcakes/', cupcakes)
        this.setState({data: response.data})
       
        
    }


    componentDidMount(){
        axios.get(`http://localhost:8070/cupcakeShop/v1/cupcakes/`)
        .then(res => {
            const cupcakes = res.data;
            this.setState({cupcakes})
            console.log("cupcakes",cupcakes);
        })
    
    }
    render() {
        return (
        <div>
            <NavigationBar/>
            <Row>
            {this.state.cupcakes.map(cupcake => 
            <Col md="4">
            <Item name={cupcake.name} price={`$` +`${cupcake.price}`} image={cupcake.imageURL}/>
            </Col>   
            )}
        </Row>
    {/* // return (
    //     <div>
    //         <NavigationBar></NavigationBar>
    //         <Row className="side-margin">
    //             <Col md="4">
    //                 <Item name={`${this.state.data[0]}`} price={"$10"} image={"https://images.unsplash.com/photo-1567022432449-5cdf87e209a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}></Item>
    //             </Col>
    //             <Col md="4">
    //             <Item name={"Chocolate"} price={"$3"} image={"https://images.unsplash.com/photo-1583625494781-8f80e36bd727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}></Item>
    //             </Col>
    //             <Col md="4">
    //             <Item name={"Red-Velvet"} price={"$3"} image={"https://images.unsplash.com/photo-1582241785274-2009ebb9b440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}></Item>
    //             </Col>
    //         </Row>
    //         <Row className="side-margin">
    //             <Col md="4">
    //                 <Item name={"Strawberry"} price={"$3"} image={"https://images.unsplash.com/photo-1555684655-49a1c6b94dd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}></Item>
    //             </Col>
    //             <Col md="4">
    //             <Item name={"Banana"} price={"$3"} image={"https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"}></Item>
    //             </Col>
    //             <Col md="4">
    //             <Item name={"Carrot"} price={"$3"} image={"https://images.unsplash.com/photo-1487124504955-e42a39e11aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1012&q=80"}></Item>
    //             </Col>
    //         </Row>
    //     </div>
    // ) */}

    <AddComment></AddComment>
    </div>
        ) 
}
}
export default Cupcakes;
