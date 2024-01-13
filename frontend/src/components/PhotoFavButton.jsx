import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isFavorited, setIsfavorited] = useState(false);

  const handleFavClick = useCallback(() => {
    setIsfavorited(prevIsFavorited => !prevIsFavorited);
  }, []);

  return (
    <div className={`photo-list__fav-icon ${isFavorited ? "favorited" : ""}`} onClick={handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon />
      </div>
    </div>
  );
}

export default PhotoFavButton;