import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    <span className="topic-list__item span">
    <li onClick={() => onTopicClick(topic.id)}>
      {topic.title}
    </li>
    </span>
  );
};

TopicListItem.propTypes = {
  topic: PropTypes.object.isRequired
};

export default TopicListItem;