import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment'



export default function AddComment() {
    let [comments, setComments] = React.useState([])
    const [newComment, setNewComment] = React.useState()

    // React.useEffect(() => {
    //     const getData = async () {
    //          response = axios.get('http://localhost:8090/cupcakeShop/v1/comments')
    //     }
    // })
    const getData = async () => {
        setComments = axios.get(`/cupcakeShop/v1/comments`);
        
    }
    const onCreate = () => {


            
            try {
                const response = axios.post(`/cupcakeShop/v1/comments/`,{
            comment: `${newComment}`
        })
        console.log('Returned Data:', response)
            } catch(e) {
                console.log(`axios request failed:  ${e}`)
            }    
    }

    useEffect(() =>{
        axios.get(`http://localhost:8070/cupcakeShop/v1/comments/`)
        .then(res => {
            comments = res.data;
            let reversedComments = comments.map( comment=> comment).reverse();
            setComments(reversedComments);
            
        })
    } )
    return (
        <div>
            {/* <textarea id="new-comment-box" value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    />
            <button className="button text-white" id="create-button" onClick={onCreate}>Create</button> */}
            {comments.map(comment =>(
                <li id="list-comment" key={comment.id}>
                    <Comment comment={comment}></Comment>
                </li>
            ))}
{/*     
            <textarea id="new-comment-box" value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    />
            <button className="button text-white" id="create-button" onClick={onCreate}>Create</button> */}
        </div>
    )
}
