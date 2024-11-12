import React from 'react';
import UserContext from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import Styles from './Style.module/PhotoComments.module.css';
import useMedia from '../../Hooks/useMedia';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const mobile = useMedia('(max-width: 64rem)');
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  },[comments])

  return (
    <>
      <ul ref={commentsSection} className={`${Styles.comments} ${props.single ? Styles.single : ''}`} 
      style={{
        height: `${mobile && comments.length > 0 ? '12rem' : 'auto'}`,
      }}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments}/>}
    </>
  );
};

export default PhotoComments;
