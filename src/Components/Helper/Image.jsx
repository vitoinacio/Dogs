import React from 'react'
import Styles from './Style.modules/Image.module.css'

const Image = ({alt, ...props}) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoading({target}) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={Styles.wrapper}>
      {skeleton && <div className={Styles.skeleton}></div>}
      <img onLoad={handleLoading} className={Styles.img} alt={alt} {...props}/>
    </div>
  )
}

export default Image