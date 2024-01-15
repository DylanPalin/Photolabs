import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, selectedTopic, toggleFav, onPhotoClick, isFav }) => {
  return (
    <div className="photo-list">
      {photos && photos.map((photo) => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            toggleFav={toggleFav}
            onPhotoClick={onPhotoClick}
            isFav={isFav}
          />
        );
      })}
    </div>
  );
};
export default PhotoList;