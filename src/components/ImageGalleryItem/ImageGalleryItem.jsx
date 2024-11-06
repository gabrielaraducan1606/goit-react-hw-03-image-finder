import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({ webformatURL, largeImageURL, tags, onClick }) {
  return (
    <li  onClick={() => onClick(largeImageURL, tags)}>
      <img src={webformatURL} alt={tags} className={styles.galleryItem}/>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
