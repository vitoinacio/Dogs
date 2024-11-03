import React from 'react'
import Styles from './Style.modules/FeedPhotosItem.module.css';
import Image from '../Helper/Image';

const FeedPhotosItem = ({photo, setModalPhoto}) => {

  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li className={Styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={Styles.vizualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem