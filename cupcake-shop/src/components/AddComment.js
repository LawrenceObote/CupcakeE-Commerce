import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment'



export default function AddComment() {
    let [comments, setComments] = React.useState([]);
    let [newComment, setNewComment] = React.useState();


    // const getData = async () => {
    //     const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/comments/`)
    //     comments = res.data;
    //     let reversedComments = comments.map(comment => comment).reverse();
    //     setComments(reversedComments);

    // }
    const onCreate = () => {

        axios({
            method: 'post',
            url: 'https://cors-anywhere.herokuapp.com/http://localhost:8070/cupcakeShop/v1/comments',
            data: {
                comment: "comment"
            }
        })

        // const letters = `${newComment}`
        // try {
        //     const response = axios.post(`https://cors-anywhere.herokuapp.com/http://localhost:8080/cupcakeShop/v1/comments`, {
        //         comment: "hello"
        //     })

        // } catch (e) {
        //     console.log(`axios request failed:  ${e}`)
        // }
    }

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://localhost:8080/cupcakeShop/v1/comments`)
            comments = res.data;
            let reversedComments = comments.map(comment => comment).reverse();
            setComments(reversedComments);

        }
        // const res = axios.get(`https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/comments/`)
        // comments = res.data;
        // let reversedComments = comments.map(comment => comment).reverse();
        // setComments(reversedComments);

        // .then(res => {
        //     comments = res.data;
        //     let reversedComments = comments.map(comment => comment).reverse();
        //     setComments(reversedComments);

    })

    return (
        <div>
            <textarea id="new-comment-box" value={newComment}
                onChange={e => setNewComment(e.target.value)}
            />
            <button className="button text-white" id="create-button" onClick={onCreate}>Create</button>
            {comments.map(comment => (
                <li id="list-comment" key={comment.id}>
                    <Comment comment={comment}></Comment>
                </li>
            ))}

            <textarea id="new-comment-box" value={newComment}
                onChange={e => setNewComment(e.target.value)}
            />
            <button className="button text-white" id="create-button" onClick={onCreate}>Create</button>
        </div>
    )
}
