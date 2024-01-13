import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ onTopicClick, topic }) => {
  return (
    <span className="topic-list__item span">
    <li onClick={() => onTopicClick(topic.id)}>
      {topic.title}
    </li>
    </span>
  );
};


export default TopicListItem;