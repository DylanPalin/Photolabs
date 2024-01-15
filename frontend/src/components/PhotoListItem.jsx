import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, onFavClick, favoritePhotos, onPhotoClick }) => (
  <div className="photo-list__item" onClick={() => onPhotoClick(photo)}>
    <PhotoFavButton 
      isFavorited={favoritePhotos.includes(photo.id)} 
      onFavClick={() => onFavClick(photo.id)} 
    />
    <img
      className="photo-list__image"
      src={photo.urls.regular}
      alt={photo.user.username}
    />
    <div className="photo-list__user-details">
      <img
        className="photo-list__user-profile"
        src={photo.user.profile}
        alt={`${photo.user.username}'s profile`}
      />
      <div className="photo-list__user-info">
        <span>{photo.user.username}</span>
        <div className="photo-list__location">
          <span>
          {photo.location.city}, {photo.location.country}
        </span>          
        </div>
      </div>
    </div>
  </div>
);

export default PhotoListItem;