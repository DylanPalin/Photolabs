import React, { useState, useCallback, useEffect } from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";


const TopNavigation = ({ getTopicPhotos, getAllPhotos, topics, ifFavPhotoExists, dark, setDark }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={getAllPhotos}>PhotoLabs</span>
      <div className="top-nav-bar__right">
        <TopicList getTopicPhotos={getTopicPhotos} topics={topics} />
        <FavBadge dark={dark} setDark={setDark} ifFavPhotoExists={ifFavPhotoExists} />
        </div>
    </div>
  );
};

export default TopNavigation;
