import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ isFav, toggleFav, hideModal, selectedPhoto, dark }) => {
  const { id, urls, user, location, similar_photos } = selectedPhoto;

  return (
    <div className={`photo-details-modal ${dark}`}>
      <button className="photo-details-modal__close-button" onClick={hideModal}>
        <img src={closeSymbol} alt="close" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton isFav={isFav} toggleFav={toggleFav} photoId={id} dark={dark}></PhotoFavButton>
        <img className="photo-details-modal__image" src={urls.regular} alt={`Image taken in ${location.city}, ${location.country}`}></img>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={user.profile} alt={`Profile for ${user.username}`}></img>
          <div className="photo-list__user-info">
            <span>{user.name}</span>
            <div className="photo-list__user-location">
              {location.city}, {location.country}
            </div>
          </div>
        </div>
        <p className='photo-details-modal__header'>Similar Photos</p>
      </div>
      <div className='photo-details-modal__top-bar'>
        <PhotoList isFav={isFav} toggleFav={toggleFav} photos={similar_photos} dark={dark} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;