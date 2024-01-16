import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, dark, showModal, toggleLike, isLiked }) => {
  if (typeof (photos) === 'object') {
    photos = Object.values(photos);
  }

  const template = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        toggleLike={toggleLike}
        showModal={showModal}
        isLiked={isLiked}
        dark={dark}
      />
    );
  });

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;