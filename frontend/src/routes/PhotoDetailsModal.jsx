import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ selectedPhoto, hideModal, toggleFav, darkMode }) => {
  console.log(selectedPhoto);
  const { similar_photos: photos, location } = selectedPhoto;
  const { title, urls: { regular: url }, user } = selectedPhoto;
  const { username, name, profile } = user;

  return (
    <div className={`photo-details-modal ${darkMode}`}>
      <button className="photo-details-modal__close-button" onClick={hideModal}>
        <img src={closeSymbol} alt="close" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton photo={selectedPhoto} toggleFav={toggleFav} darkMode={darkMode} />
        <div className="photo-details-modal__image-wrapper">
          <img className="photo-details-modal__image" src={url} alt={title} />
        </div>
        <div className="photo-details-modal__photographer-details"></div>
        <div className="photo-details-modal__header">
          <img className="photo-details-modal__photographer-profile" src={profile} alt={username} />
          <div className="photo-details-modal__photographer-info">
            <span className="photo-details-modal__photographer-name">{name}</span>
            <span className="photo-details-modal__photographer-location">{location.city}, {location.country}</span>
          </div>
        </div>
        <p>Similar Photos</p>
      </div>
      <div className="photo-details-modal__top-bar">
        <PhotoList className="photo-details-modal__images" toggleFav={toggleFav} darkMode={darkMode} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;