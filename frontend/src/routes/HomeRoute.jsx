import React, { useState } from "react";
import PhotoList from '../components/PhotoList';
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, onPhotoClick, toggleFav, isFav, navbarFavs, favoritePhotos }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
  };


  return (
    <div className="home-route">
      <TopNavigationBar onTopicClick={handleTopicClick} navbarFavs={navbarFavs} topics={topics} favoritePhotos={favoritePhotos} />
      <PhotoList favoritePhotos={favoritePhotos} photos={photos} selectedTopic={selectedTopic} toggleFav={toggleFav} onPhotoClick={onPhotoClick} isFav={isFav}/>
    </div>
  );
};

export default HomeRoute;