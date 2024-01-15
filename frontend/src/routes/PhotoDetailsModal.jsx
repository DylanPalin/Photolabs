import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ selectedPhoto, hideModal, toggleFav, darkMode, favoritePhotos }) => {
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
        <PhotoFavButton photo={selectedPhoto} favoritePhotos={favoritePhotos} toggleFav={toggleFav} darkMode={darkMode} />
        <img className="photo-details-modal__image" src={url} alt={title} />
        <div className="photo-details-modal__header">
          <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={profile} alt={username} />            
            <div className="photo-details-modal__photographer-info">
            <span>{user.name}</span>
            <div className="photo-list__user-location">
              {location.city}, {location.country}
            </div>
          </div>
        </div>
        <p>Similar Photos</p>
      </div>
      <div className="photo-details-modal__top-bar">
        <PhotoList className="photo-details-modal__images" toggleFav={toggleFav} darkMode={darkMode} />
      </div>
    </div>
  </div>
  );
};

export default PhotoDetailsModal;