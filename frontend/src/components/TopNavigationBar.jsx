import React, { useState, useCallback, useEffect } from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ onTopicClick, topics, favoritePhotos, navbarFavs }) => {
  
  const [showTopic, setshowTopic] = useState(null);
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(null);
  
  
  const handleTopicClick = (topicId) => {
    setshowTopic(topicId);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__right">
        <TopicList onTopicClick={handleTopicClick} topics={topics} />
        <FavBadge selected="true" navbarFavs={navbarFavs} />
        </div>
    </div>
  );
};

export default TopNavigation;
