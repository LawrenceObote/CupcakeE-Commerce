import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import { Container, Row, Col } from 'reactstrap';
import Item from './Item'
import { render } from 'react-dom';
import axios from 'axios';
import AddComment from './AddComment'
import Comment from './Comment';

class Cupcakes extends Component {

    constructor(props) {
        super(props);
        this.state = {cupcakes: [], isLoading: true};
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
    

            <AddComment></AddComment>
        </div>
        ) 
}
}
export default Cupcakes;
