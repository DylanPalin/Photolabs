import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose }) => {
  console.log(photo);
  const { title, url } = photo;
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__content">
        <h2 className="photo-details-modal__title">{title}</h2>
        <img className="photo-details-modal__image" src={url} alt={title} />
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
    </div>
  )
};
export default PhotoDetailsModal;