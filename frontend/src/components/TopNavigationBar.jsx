import React, { useState, useCallback } from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics }) => {
  
  const [showTopic, setshowTopic] = useState(null);
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

const onTopicClick = useCallback((topicId) => {
    setshowTopic(topicId);
  }, []);

  const handleTopicClick = (topicId) => {
    setshowTopic(topicId);
  };

  const onFavClick = useCallback(() => {
    setIsFavPhotoExist((prevIsFavPhotoExist) => !prevIsFavPhotoExist);
  });

  
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
