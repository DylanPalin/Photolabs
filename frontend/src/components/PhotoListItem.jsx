import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, photoId, toggleFav, isFav, dark, showModal }) => {
  // Destructure the photo object
  const { urls, user, location } = photo;
  // Return the template for each photo
  return (
    <div className={`photo-list__item ${dark}`}>
      <PhotoFavButton isFav={isFav} toggleFav={toggleFav} photoId={photoId} dark={dark}></PhotoFavButton>
      <img className="photo-list__image" src={urls.regular} alt={`Image taken in ${location.city}, ${location.country}`} onClick={showModal}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`Profile for ${user.username}`}></img>
        <div className="photo-list__user-info">
          <span>{user.name}</span>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;