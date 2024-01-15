import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photo, toggleFav, favoritePhotos }) {
  const id = photo.id;
  const isFav = function() {
    if (favoritePhotos) {
      return false;
    } else if (favoritePhotos.includes(photo.id)) {
      return true;
    };
  };
  return (
    <div className={`photo-list__fav-icon ${isFav ? "favorited" : ""}`} onClick={() => toggleFav(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav} />
      </div>
    </div>
  );
};
export default PhotoFavButton;