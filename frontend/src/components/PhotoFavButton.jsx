import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ isLiked, toggleFav, photoId, dark }) {
  return (
    <div className={`photo-list__fav-icon ${dark}`} onClick={() => toggleFav(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked(photoId)} dark={dark}></FavIcon>
      </div>
    </div>
  );
};

export default PhotoFavButton;