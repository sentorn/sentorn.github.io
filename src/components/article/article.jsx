import React, { Component } from 'react';

import './_article.scss';

function contentClick() {
  this.setState({
    isOpen: !this.state.isOpen,
    commentOpen: false
  });
}

function commentClick() {
  this.setState({
    commentOpen: !this.state.commentOpen
  });
}

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      commentOpen: false
    };
    this.contentClick = contentClick.bind(this);
    this.commentClick = commentClick.bind(this);
  }
  render() {
    const { article } = this.props;
    const commentList = article.comments;
    const listItems = commentList.map(comment => <p key={comment.id}>{comment.text}</p>);
    const comments = this.state.commentOpen && (
      <div className='comments__content'>
        {listItems}
      </div>
    );
    const content = this.state.isOpen && (
      <div className='news-article__content'>
        <p>{article.text}</p>
        <div className='comments'>
          <div className='comments__title'>
            <h2>Comments <span>({commentList.length})</span></h2>
            <button onClick={this.commentClick}>
              {this.state.commentOpen ? 'hide comments' : 'open comments'}
            </button>
          </div>
          {comments}
        </div>
      </div>
    );

    return (
      <article className='news-article'>
        <div className='news-article__title'>
          <h2>{article.title}</h2>
          <button onClick={this.contentClick}>
            { this.state.isOpen ? 'hide article' : 'show article' }
          </button>
        </div>
        <h3>{article.date}</h3>
        {content}
      </article>
    );
  }
}

export default Article;