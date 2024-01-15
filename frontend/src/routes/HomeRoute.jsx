import React, { useState } from "react";
import PhotoList from '../components/PhotoList';
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ onPhotoClick, toggleFav, isFav, navbarFavs, favoritePhotos }) => {
  return (
    <div className="home-route">
      <TopNavigationBar onTopicClick={handleTopicClick} navbarFavs={navbarFavs} favoritePhotos={favoritePhotos} topics={topics}/>
      <PhotoList favoritePhotos={favoritePhotos} selectedTopic={selectedTopic} toggleFav={toggleFav} onPhotoClick={onPhotoClick} isFav={isFav}/>
    </div>
  );
};

export default HomeRoute;