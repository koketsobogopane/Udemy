import { useState, useEffect } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [ comments, setComments ] = useState([])

  useEffect( () => {
    fetch(`/api/comments/${eventId}`)
      .then( res => res.json() )
      .then( data => setComments(data.comments) )

  },[showComments])
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers:{
        'Content-Type':"application/json",
      }
    })
    .then( res=> res.json())
    .then( data=> console.log(data) )
    console.log ( 'function ran')

  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList commentsData = {comments} />}
    </section>
  );
}

export default Comments;
