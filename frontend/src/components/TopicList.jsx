import React from "react";
import TopicListItem from "./TopicListItem";
import sampleDataForTopicList from "./sampleDataForTopicList";
import "../styles/TopicList.scss";

const TopicList = ({ onTopicClick }) => {
  return (
    <ul className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((sampleData, index) => {
        return <TopicListItem key={index} topic={sampleData} onTopicClick={onTopicClick} />;
      })}
    </ul>
  );
};

export default TopicList;
