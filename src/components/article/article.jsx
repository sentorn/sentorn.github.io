import React, { Component } from 'react';

import './_article.scss';

import Comments from './comments';

function handleClick() {
  this.setState({
    isOpen: !this.state.isOpen
  })
}

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = handleClick.bind(this);
  }
  render() {
    const content = this.state.isOpen && (
      <div className='news-article__content'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
          amet commodi error et fuga labore, pariatur saepe similique sint, soluta
          tempore temporibus, totam voluptas voluptatem. Amet assumenda autem, dicta
          dignissimos doloremque eaque esse harum minus mollitia obcaecati praesentium
          provident, quam saepe sed sint sunt, tempore! Accusantium animi iure rem.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
          amet commodi error et fuga labore, pariatur saepe similique sint, soluta
          tempore temporibus, totam voluptas voluptatem. Amet assumenda autem, dicta
          dignissimos doloremque eaque esse harum minus mollitia obcaecati praesentium
          provident, quam saepe sed sint sunt, tempore! Accusantium animi iure rem.
        </p>
        <Comments count={2} />
      </div>
    );
    return (
      <article className='news-article'>
        <div className='news-article__title'>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <button onClick={this.handleClick}>
            { this.state.isOpen ? 'hide article' : 'show article' }
          </button>
        </div>
        <h3>{ new Date().toDateString() }</h3>
        {content}
      </article>
    );
  }
}

export default Article;