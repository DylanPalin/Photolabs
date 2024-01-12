import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isFavorited, setIsfavorited] = useState(false);

  const handleFavClick = useCallback(() => {
    setIsfavorited(prevIsFavorited => !prevIsFavorited);
}, []);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
          <FavIcon onClick={handleFavClick} className={isFavorited ? "favorited" : ""} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
