import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = ({ onTopicClick, topics }) => {
  return (
    <ul className="top-nav-bar__topic-list">
      {Object.values(topics).map((topic, index) => {
        return <TopicListItem key={index} topic={topic} />;
      })}
    </ul>
  );
};

export default TopicList;
