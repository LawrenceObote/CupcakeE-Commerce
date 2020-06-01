import React from 'react';
import axios from 'axios';
import Comments from './Comments'


export default function AddComment() {
    const [comments, setComments] = React.useState([])
    const [newComment, setNewComment] = React.useState()

    // React.useEffect(() => {
    //     const getData = async () {
    //          response = axios.get('http://localhost:8090/cupcakeShop/v1/comments')
    //     }
    // })

    const onCreate = () => {
        axios.post(`http://localhost:8090/cupcakeShop/v1/comments`,{
            comment: `${newComment}`
        })
    }
    return (
        <div>
            <input id="new-comment-box" value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    />
            <button className="button text-white" id="create-button" onClick={onCreate}>Create</button>

            <Comments></Comments>
        </div>
    )
}
