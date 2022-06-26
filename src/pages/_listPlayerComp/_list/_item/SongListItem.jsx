import * as React from 'react';
import { Image } from '../../../../ui-components';
import styles from './SongListItem.module.css';

export const SongListItem = React.memo(({ data, onClick }) => {

  const { title, photo, duration, artist } = data;

  return(
    <button className={styles.buttonOuterStyle}>
      <Image src={photo} alt={title} className={styles.imageStyle} />
      <div>
        <p>{title}</p>
        <p>{artist}</p>
      </div>
      <p>{duration}</p>
    </button>
  )
});
