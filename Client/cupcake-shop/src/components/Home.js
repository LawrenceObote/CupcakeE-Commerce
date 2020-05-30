import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios';
import Menu from './Menu'

export default class Home extends Component {
    state = {
        backgroundImage: ''
    }
    componentDidMount(){
         const call = async () =>{
            return axios.get(`https://api.unsplash.com/photos/random?&query=cupcake&client_id=4_-191W_jUgFQg_ujNLY9H3gpr7zGA4yY8ffZXQoJO0`)
            .then(response => {
                const img = response.data.urls.regular;
                console.log(response.data.urls.regular);
                this.setState({
                    backgroundImage: img
                })
                return response.data.urls.regular;

            })
        }
        call();
        
    }
    render() {
        console.log(this.call);
        return (
            <div>
                <NavigationBar id="sticky"/>
                <div class="parallax" style={{backgroundImage: `url(${this.state.backgroundImage})` }}>
                    <p id="welcome">Welcome to the Cupcake Shop</p>
                </div>
                <Menu></Menu>
                
            </div>
        )
    }
}
