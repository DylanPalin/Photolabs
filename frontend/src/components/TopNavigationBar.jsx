import React, { useState, useCallback, useEffect } from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";


const TopNavigation = ({ getTopicPhotos, getAllPhotos, topics, ifFavPhotoExist, dark, setDark }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={getAllPhotos}>PhotoLabs</span><div className='dark-mode' onClick={setDark}>
      {dark ? <SunIcon /> : <MoonIcon />}
      </div>
      <div className="top-nav-bar__right">
        <TopicList getTopicPhotos={getTopicPhotos} topics={topics} />
        <FavBadge dark={dark} setDark={setDark} ifFavPhotoExist={ifFavPhotoExist} />
        </div>
    </div>
  );
};

export default TopNavigation;
