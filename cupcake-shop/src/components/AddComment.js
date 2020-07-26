import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment'



export default function AddComment() {
    let [comments, setComments] = React.useState([]);
    let [newComment, setNewComment] = React.useState([]);




    const onCreate = () => {
        axios({
            method: 'post',
            url: 'https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/comments',
            data: {
                comment: `${newComment}`
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
            <textarea id="new-comment-box" value={newComment}
                onChange={e => setNewComment(e.target.value)}
            />
            <button className="button text-white" id="create-button" onClick={onCreate}>Create</button>
            {comments.map(comment => (
                <li id="list-comment" key={comment.id}>
                    <Comment comment={comment}></Comment>
                </li>
            ))}
        </div>
    )
}
