import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  return (
    <div>
      <img src={photo.imageSource} alt={photo.username} />
      <h2>{photo.username}</h2>
      <p>{photo.location.city}, {photo.location.country}</p>
    </div>
  );
};

export default PhotoListItem;