import React from 'react'
import axios from 'axios'

export const  Comment = ({comment}) => {
    const[name, setName] = React.useState(comment.name);
    


    const onUpdate = () => {
        axios.put(`/cupcakeShop/v1/comments/${comment.id}`)
      }

      const onDelete = () => {
          axios.delete(`/cupcakeShop/v1/comments/${comment.id}`)
      }

    return (
        <div>
            <div className="form-group">
                <label className="text-white" for="comment">Comment:</label>
                <textarea className="form-control" rows="4" id="comment" value={name} onChange={e => {
                    setName(e.target.value)}}></textarea>
            </div>

            <div className="buttons">
                <button className="button text-white" id="create-button" onClick={onUpdate}>Update</button>
                <button className="button text-white" id="delete-button" onClick={onDelete}>Delete</button>
            </div>
            <br></br>
            
        </div>
    )
}
export default Comment;
