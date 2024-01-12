import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo }) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton />      
      <img
        className="photo-list__image"
        src={photo.imageSource}
        alt={photo.username}
      />
      <div className="photo-list__user-info">
        <h2>{photo.username}</h2>
        <p className="photo-list__user-location">
          {photo.location.city}, {photo.location.country}
        </p>
      </div>
    </div>
  );
};


export default PhotoListItem;