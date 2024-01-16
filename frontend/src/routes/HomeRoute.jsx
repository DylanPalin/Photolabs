import React from "react";
import PhotoList from '../components/PhotoList';
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ showModal, getAllPhotos, toggleFav, isLiked, ifFavPhotoExists, topics, getTopicPhotos, photos, dark, setDark}) => {
  return (
    <div className="home-route">
      <TopNavigationBar getAllPhotos={getAllPhotos} getTopicPhotos={getTopicPhotos} topics={topics} ifFavPhotoExists={ifFavPhotoExists} dark={dark} setDark={setDark} />
      <PhotoList photos={photos} getTopicPhotos={getTopicPhotos} toggleFav={toggleFav} showModal={showModal} dark={dark} />
    </div>
  );
};

export default HomeRoute;