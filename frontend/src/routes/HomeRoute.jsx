import React from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";
import SearchBar from "components/SearchBar";

const HomeRoute = ({
  showModal,
  getAllPhotos,
  toggleFav,
  isFav,
  ifFavPhotoExist,
  topics,
  getTopicPhotos,
  photos,
  dark,
  setDark,
  searchReq,
}) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar
        getAllPhotos={getAllPhotos}
        getTopicPhotos={getTopicPhotos}
        topics={topics}
        ifFavPhotoExist={ifFavPhotoExist}
        dark={dark}
        setDark={setDark}
        isFav={isFav}
      />
      <div className="searchbar">
      <SearchBar dark={dark} searchReq={searchReq} />
      </div>
      <PhotoList
        photos={photos}
        getTopicPhotos={getTopicPhotos}
        toggleFav={toggleFav}
        showModal={showModal}
        dark={dark}
        isFav={isFav}
      />
    </div>
  );
};

export default HomeRoute;
