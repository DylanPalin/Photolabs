import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ isFavorited, onFavClick }) {
  return (
    <div className={`photo-list__fav-icon ${isFavorited ? "favorited" : ""}`} onClick={onFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon />
      </div>
    </div>
  );
}

export default PhotoFavButton;