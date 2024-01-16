import React, { useState } from "react";
import PhotoList from '../components/PhotoList';
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ onPhotoClick, toggleFav, favoritePhotos, topics, getTopicPhotos, photos }) => {
  return (
    <div className="home-route">
      <TopNavigationBar onTopicClick={getTopicPhotos} getTopicPhotos={getTopicPhotos} topics={topics} />
      <PhotoList photos={photos} favoritePhotos={favoritePhotos} getTopicPhotos={getTopicPhotos} toggleFav={toggleFav} onPhotoClick={onPhotoClick} dark={dark} />
    </div>
  );
};

export default HomeRoute;