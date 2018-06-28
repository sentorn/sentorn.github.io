import React from 'react';

import ArticleList from './articleList';
import news from './articleList/articles';
import Button from './articleList/article/button';

import SwitchContext from './context';

class App extends React.Component {
  state = {
    visibleRemove: true
  };
  switchClick = () => {
    this.setState({ visibleRemove: !this.state.visibleRemove });
  };
  render() {
    return (
      <React.Fragment>
        <SwitchContext.Provider value={{
          state: this.state
        }}
        >
          <h1>News Post</h1>
          <div className="button-container">
            <Button
              nameOfClass='btn'
              contentClick={this.switchClick}
              text={this.state.visibleRemove ? 'hide buttons' : 'show buttons'}
            />
          </div>
          <ArticleList articles={news} />
        </SwitchContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;