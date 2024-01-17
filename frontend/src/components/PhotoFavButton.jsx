import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ isFav, toggleFav, photoId, dark }) {
  return (
    <div className={`photo-list__fav-icon ${dark}`} onClick={() => toggleFav(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav(photoId)} dark={dark}></FavIcon>
      </div>
    </div>
  );
};

export default PhotoFavButton;