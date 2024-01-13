import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic }) => (
  <ul className="topic-list__item" key="topicListItem">
    <span>{topic.title}</span>
    </ul>
);

TopicListItem.propTypes = {
  topic: PropTypes.object.isRequired
};

export default TopicListItem;