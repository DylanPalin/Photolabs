import React from "react";
import PhotoListItem from "./PhotoListItem";
import sampleDataForPhotoListItem from "./sampleDataForPhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({ numPhotos }) => (
  <div className="photo-list">
    {Array.from({ length: numPhotos }).map((_, index) => {
      const sampleData = sampleDataForPhotoListItem[index];
      return <PhotoListItem key={sampleData.id} photo={sampleData} />;
    })}
  </div>
);

export default PhotoList;
