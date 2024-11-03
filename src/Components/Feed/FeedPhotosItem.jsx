import React from 'react'
import Styles from './Style.modules/FeedPhotosItem.module.css';

const FeedPhotosItem = ({photo, setModalPhoto}) => {

  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li className={Styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={Styles.vizualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem