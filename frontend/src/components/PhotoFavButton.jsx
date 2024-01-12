import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isFavorited, setIsfavorited] = useState(false);

  const handleFavClick = useCallback(() => {
    setIsfavorited(!isFavorited);
  }, [isFavorited]);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button
          onClick={handleFavClick}
          className={isFavorited ? "favorited" : ""}
        >
          <FavIcon isFavorited={isFavorited} />
        </button>
      </div>
    </div>
  );
}

export default PhotoFavButton;
