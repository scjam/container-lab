import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <div>
    <p>{title}{author}{description}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Article;
