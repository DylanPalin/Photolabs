import React, { useState } from "react";
import PhotoList from '../components/PhotoList';
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, onPhotoClick, toggleFav, isFav }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
  };

  const newFavs = favoritePhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar onTopicClick={handleTopicClick} newFavs={newFavs} topics={topics} favoritePhotos={favoritePhotos} />
      <PhotoList favoritePhotos={favoritePhotos} photos={photos} selectedTopic={selectedTopic} toggleFav={toggleFav} onPhotoClick={onPhotoClick} isFav={isFav}/>
    </div>
  );
};

export default HomeRoute;