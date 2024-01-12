import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo }) => (
  <div className="photo-list__item">
    <PhotoFavButton isFavorited={photo.isFavorited} />
    <img
      className="photo-list__image"
      src={photo.urls.regular}
      alt={photo.user.username}
    />
    <div className="photo-list__user-details">
      <div className="photo-list__user-info">
        <span>{photo.user.username}</span>
      </div>
      <span>
        {photo.location.city}, {photo.location.country}
      </span>
    </div>
  </div>
);

export default PhotoListItem;
