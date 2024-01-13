import React from "react";
import TopicListItem from "./TopicListItem";
import sampleDataForTopicList from "./sampleDataForTopicList";

import "../styles/TopicList.scss";

const TopicList = () => {
  return (
    <ol className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((sampleData, index) => {
        return <TopicListItem key={index} topic={sampleData} />;
      })}
    </ol>
  );
};

export default TopicList;
