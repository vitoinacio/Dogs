import React from 'react';
import Styles from './Style.module/PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok)  window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={Styles.delete} disabled>
        Deletar
      </button>
      ) : (
        <button onClick={handleClick} className={Styles.delete}>
      Deletar
    </button>
    )}
    </>
  );
};

export default PhotoDelete;
