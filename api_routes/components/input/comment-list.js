import classes from './comment-list.module.css';

function CommentList(props) {

  const { commentsData } = props 

  return (
    <ul className={classes.comments}>
      {commentsData.map(comment=>(
        <li key={comment._id}>
        <p>{comment.text}</p>
        <div>
          By <address>{comment.name}</address>
        </div>
      </li>
      ))}
    </ul>
  );
}

export default CommentList;
