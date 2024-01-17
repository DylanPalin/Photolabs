import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, dark, showModal, toggleFav, isFav }) => {
  // Check if photos is an object or an array
  if (typeof(photos) === 'object') {
    photos = Object.values(photos);
  }

  // Create a template for each photo
  const photoList = photos.map(photo => {
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        photoId={photo.id}
        toggleFav={toggleFav}
        showModal={() => showModal(photo)}
        isFav={isFav}
        dark={dark}
      />
    );
  });
  
 // Return the template wrapped in a ul
  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;