import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photo, toggleFav, darkMode, favoritePhotos }) {
  
  
  const { id } = photo;
  const isFav = favoritePhotos ? favoritePhotos.includes(id) : false;

  return (
    <div className={`photo-list__fav-icon ${isFav ? "favorited" : ""}`} onClick={() => toggleFav(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav} darkMode={darkMode}></FavIcon>
      </div>
    </div>
  );
}
export default PhotoFavButton;