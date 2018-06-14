import React, { Component } from 'react';
import shave from 'shave';
import PropTypes from 'prop-types';

import './_article.scss';

import Button from './button';
import CommentList from './commentList';

const twoLines = (el) => {
  const style = window.getComputedStyle(el);
  const height = style.getPropertyValue('line-height');
  return parseInt(height, 10) * 2;
};

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      commentOpen: false
    };
    this.contentText = React.createRef();
  }
  componentDidMount() {
    if (!this.state.isOpen) {
      shave(this.contentText.current, twoLines(this.contentText.current));
    }
  }
  contentClick = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
        commentOpen: false
      });
      shave(this.contentText.current, twoLines(this.contentText.current));
    } else {
      this.setState({
        isOpen: true
      });
      shave(this.contentText.current, 'none');
      const ch = this.contentText.current.children;
      for (let i = 0; i < ch.length; i++) {
        if (ch[i].classList.contains('js-shave-char')) {
          ch[i].innerHTML = '';
        }
        ch[i].removeAttribute('style');
      }
    }
  };
  commentClick = () => {
    this.setState({
      commentOpen: !this.state.commentOpen
    });
  };
  render() {
    const { article } = this.props;
    const commentList = article.comments;
    const comments = this.state.commentOpen && <CommentList comments={commentList} />;
    const content = (
      <div className='news-article__content'>
        <p ref={this.contentText}>{article.text}</p>
        <div className='comments'>
          <div className='comments__title'>
            <h2>Comments <span>{`(${commentList.length})`}</span></h2>
            <Button contentClick={this.commentClick} text={this.state.commentOpen ? 'close comments' : 'open comments'} />
          </div>
          {comments}
        </div>
      </div>
    );
    return (
      <article className='news-article'>
        <div className='news-article__title'>
          <h2>{article.title}</h2>
          <Button contentClick={this.contentClick} text={this.state.isOpen ? 'hide more article' : 'show more article'} />
        </div>
        <h3>{article.date}</h3>
        {content}
      </article>
    );
  }
}

Article.propTypes = {
  article: PropTypes.object.isRequired
};

export default Article;