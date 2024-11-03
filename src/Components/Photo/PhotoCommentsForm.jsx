import React from 'react';
import Enviar from '../../Assets/enviar.svg?react';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error';
import Styles from './Style.modules/PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const textarea = React.useRef(null);
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
      textarea.current.focus();
    }
  }

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <textarea
        ref={textarea}
        className={Styles.textarea}
        id="comment"
        name="comment"
        placeholder="comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={Styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
