import React from 'react';
import UserContext from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import Styles from './Style.modules/PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);

  return (
    <>
      <ul className={StyleSheet.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  );
};

export default PhotoComments;
