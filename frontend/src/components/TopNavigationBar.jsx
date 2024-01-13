import React, { useState, useCallback, useEffect } from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ onTopicClick, topics, favoritePhotos }) => {
  
  const [showTopic, setshowTopic] = useState(null);
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  useEffect(() => {
    setIsFavPhotoExist(favoritePhotos && favoritePhotos.length > 0);
  }, [favoritePhotos]);
  
  const handleTopicClick = (topicId) => {
    setshowTopic(topicId);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__right">
        <TopicList onTopicClick={handleTopicClick} topics={topics} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
        </div>
    </div>
  );
};

export default TopNavigation;
