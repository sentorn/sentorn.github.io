import React from 'react';
import PropTypes from 'prop-types';
import Article from './article';

const ArticleList = ({ articles }) => {
  const listItems = articles.map(article =>
    <Article key={article.id} article={article} />);
  return (
    <React.Fragment>{ listItems }</React.Fragment>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ArticleList;