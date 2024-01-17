import React from "react";
import PhotoList from '../components/PhotoList';
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ showModal, getAllPhotos, toggleFav, isLiked, ifFavPhotoExist, topics, getTopicPhotos, photos, dark, setDark}) => {
  return (
    <div className="home-route">
      <TopNavigationBar getAllPhotos={getAllPhotos} getTopicPhotos={getTopicPhotos} topics={topics} ifFavPhotoExist={ifFavPhotoExist} dark={dark} setDark={setDark} isLiked={isLiked} />
      <PhotoList photos={photos} getTopicPhotos={getTopicPhotos} toggleFav={toggleFav} showModal={showModal} dark={dark} isLiked={isLiked} />
    </div>
  );
};

export default HomeRoute;