import React from 'react';

import ArticleList from './articleList';
import news from './articleList/articles';

const App = () => {
  const Fragment = React.Fragment;
  return (
    <Fragment>
      <h1>News Post</h1>
      <ArticleList articles={news} />
    </Fragment>
  );
};

export default App;