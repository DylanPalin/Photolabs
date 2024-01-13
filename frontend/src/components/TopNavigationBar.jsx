import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = () => {
  const [showTopic, setshowTopic] = useState(null);
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  const onTopicClick = useCallback((topicId) => {
    setshowTopic(topicId);
  }, []);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__right">
        <TopicList onTopicClick={onTopicClick} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
        </div>
    </div>
  );
};

export default TopNavigation;
