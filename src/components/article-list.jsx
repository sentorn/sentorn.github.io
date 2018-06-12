import React from 'react';
import Article from './article';

function ArticleList({ articles }) {
  const listItems = articles.map(article =>
    <div key={article.id}><Article article={article} /></div>);
  return (
    <div>{listItems}</div>
  );
}

export default ArticleList;