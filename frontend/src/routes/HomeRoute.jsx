import React from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  dark,
  getAllPhotos,
  getTopicPhotos,
  ifFavPhotoExist,
  isFav,
  photos,
  setDark,
  showModal,
  toggleFav,
  topics,
}) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar
        dark={dark}
        getAllPhotos={getAllPhotos}
        getTopicPhotos={getTopicPhotos}
        ifFavPhotoExist={ifFavPhotoExist}
        isFav={isFav}
        setDark={setDark}
        topics={topics}
      />
      <PhotoList
        dark={dark}
        getTopicPhotos={getTopicPhotos}
        isFav={isFav}
        photos={photos}
        showModal={showModal}
        toggleFav={toggleFav}
      />
    </div>
  );
};

export default HomeRoute;
