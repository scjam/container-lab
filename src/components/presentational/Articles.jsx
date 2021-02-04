import React from 'react';
import PropTypes from 'prop-types';

const Articles = ({ articles }) => {
  const articleList = articles.map(article => (
    <li key={article.title}>
      {...article}
    </li>
  ));

  return (
    <ul>
      {articleList}
    </ul>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default Articles;
