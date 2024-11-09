import React from 'react';
import Styles from './Style.module/PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import UserContext from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={Styles.photo}>
      <div className={Styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={Styles.details}>
        <div>
          <p className={Styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={Styles.vizualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={Styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade <= 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} photo={photo} comments={comments} />
    </div>
  );
};

export default PhotoContent;
