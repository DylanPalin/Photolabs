import React, { useState } from "react";
import PhotoList from './PhotoList';
import TopNavigationBar from "./TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
  };

  const handleFavClick = (photoId) => {
    setFavoritePhotos(prevFavorites => {
      return prevFavorites.includes(photoId)
        ? prevFavorites.filter(id => id !== photoId)
        : [...prevFavorites, photoId];
    });
  };

  return (
    <div className="home-route">
      <TopNavigationBar onTopicClick={handleTopicClick} topics={topics}/>
      <PhotoList favoritePhotos={favoritePhotos} photos={photos} selectedTopic={selectedTopic} onFavClick={handleFavClick}/>
    </div>
  );
};

export default HomeRoute;