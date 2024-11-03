import React from 'react';
import Styles from './Style.modules/PhotoContent.module.css';
import { Link } from 'react-router-dom';
import Photo from './Photo';
import PhotoComments from './PhotoComments';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <div className={Styles.photo}>
      <div className={Styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={Styles.details}>
        <div>
          <p className={Styles.author}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={Styles.vizualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={Styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade <= 1 ? `${photo.idade} ano` : `${photo.idade} anos` }</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments}/>
    </div>
  );
};

export default PhotoContent;
