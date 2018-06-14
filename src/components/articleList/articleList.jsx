import React from 'react';
import PropTypes from 'prop-types';
import Article from './article';

const ArticleList = ({ articles }) => {
  const Fragment = React.Fragment;
  const listItems = articles.map(article =>
    <Article key={article.id} article={article} />);
  return (
    <Fragment>{ listItems }</Fragment>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ArticleList;