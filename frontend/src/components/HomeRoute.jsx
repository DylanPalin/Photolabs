import React, { useState } from "react";
import PhotoList from './PhotoList';
import TopNavigationBar from "./TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
  };

  return (
    <div className="home-route">
      <TopNavigationBar onTopicClick={handleTopicClick} topics={topics}/>
      <PhotoList photos={photos} selectedTopic={selectedTopic}/>
    </div>
  );
};

export default HomeRoute;
