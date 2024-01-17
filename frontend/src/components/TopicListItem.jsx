import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic, getTopicPhotos }) => {
  return (
    <div className="topic-list__item" onClick={() => getTopicPhotos(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};


export default TopicListItem;