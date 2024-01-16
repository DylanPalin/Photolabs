import React, { useState } from "react";
import PhotoList from '../components/PhotoList';
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ onPhotoClick, toggleFav, isFav, navbarFavs, favoritePhotos, topics,  }) => {
  return (
    <div className="home-route">
      <TopNavigationBar onTopicClick={setTopicData} navbarFavs={navbarFavs} favoritePhotos={favoritePhotos} topics={topics}/>
      <PhotoList photos={photos} favoritePhotos={favoritePhotos} selectedTopic={selectedTopic} toggleFav={toggleFav} onPhotoClick={onPhotoClick} isFav={isFav} darkMode={darkMode}/>
    </div>
  );
};

export default HomeRoute;