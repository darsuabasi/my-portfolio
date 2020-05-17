import React, { useState, useReducer } from 'react';
import '../css/Comments.css'

const Comments = () => {
    const [userComment, setUserComment] = useState([]);
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}), 
        {
            name: "",
            comment: ""
        }
    );

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value } = e.target;
        setUserInput({[name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, value} = e.target
        setUserInput({[name]: value})
        let date = new Date().toString()
        let newComment = { name : userInput.name, comment: userInput.comment, date: date };
        let newComments = [newComment, ...userComment]
        setUserComment(newComments)
    } 

    const displayComment = userComment.map(el =>{
        return (
            <div className="comments">
                <h2 className="nameStyle">{el.name}</h2>
                <h3 className="commentStyle">{el.comment}</h3>
                <p className="dateStyle">{el.date}</p>
            </div>
        )
    })


    return (
        <div className="commentDiv">

        <h1 className="commentH1">Comment Section</h1>
        <div>
        <form onSubmit={handleSubmit}>
            <label className="commentLabel" >Name: </label>
            
            <br/>
            <input className="commentInput" type="text" name="name" value={userInput.name} placeholder="Name" required onChange={handleChange}/>
            <br></br>
            <label className="commentLabel" >Comment: </label>
            
            <br/>
            <input className="commentInput" type="text" name="comment" value={userInput.comment} placeholder="Comment" required onChange={handleChange}/>
            <br/>

            <div className="buttonDiv"> 
            <button className="commentButton" type="submit" value="add comment">Submit</button>
            </div>
        </form>
        </div>
        <div >
            {displayComment}
        </div>
        </div>
    )

}

export default Comments;

