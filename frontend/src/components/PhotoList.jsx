import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, selectedTopic, numPhotos, onFavClick, favoritePhotos, onPhotoClick }) => {
  const filteredPhotos = selectedTopic 
    ? photos.filter(photo => photo.topicId === selectedTopic)
    : photos.slice(0, numPhotos);

  return (
    <div className="photo-list">
      {filteredPhotos.map((photo, index) => (
        <PhotoListItem key={photo.id} photo={photo} onFavClick={onFavClick} favoritePhotos={favoritePhotos} onPhotoClick={() => onPhotoClick(photo)} />
      ))}
    </div>
  );
};

export default PhotoList;