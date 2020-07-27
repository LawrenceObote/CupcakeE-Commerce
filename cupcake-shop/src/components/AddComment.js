import React from 'react';
import axios from 'axios';
import Comment from './Comment'



export default class AddComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            newComment: ''
        }
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/comments/`)
        let comments = res.data;
        this.setState = { comments: res.data };
        console.log(this.state);
        let reversedComments = comments.map(comment => comment).reverse();
        this.setState = { comments: reversedComments };

    }

    handleChange(e) {
        this.setState({
            newComment: e.target.value
        })
    }

    render() {







        const onCreate = () => {
            axios({
                method: 'post',
                url: 'https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/comments',
                data: {
                    comment: this.state.newComment
                }
            })

            // const letters = `${newComment}`
            // try {
            //     const response = axios.post(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/http://localhost:8080/cupcakeShop/v1/comments`, {
            //         comment: "hello"
            //     })

            // } catch (e) {
            //     console.log(`axios request failed:  ${e}`)
            // }
        }



        return (
            <div>
                <textarea id="new-comment-box" value={this.state.newComment}
                    onChange={this.handleChange}
                />
                <button className="button text-white" id="create-button" onClick={onCreate}>Create</button>
                {this.state.comments.map(comment => (
                    <li id="list-comment" key={this.state.comments.id}>
                        <Comment className="comment" comment={comment}></Comment>
                    </li>
                ))}
            </div>
        )
    }
}
