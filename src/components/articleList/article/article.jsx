import React, { Component } from 'react';
import shave from 'shave';
import PropTypes from 'prop-types';

import Button from './button';
import CommentList from './commentList';
import Modal from './modal';

import SwitchContext from '../../context';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modalIsOpen: false
    };
    this.contentText = React.createRef();
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setHeight();
    });
    this.setHeight();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      this.setHeight();
    });
  }
  setHeight() {
    const height = this.getLinesHeight(this.contentText.current);
    shave(this.contentText.current, this.state.isOpen ? Infinity : height);
  }
  getLinesHeight = (el) => {
    const style = window.getComputedStyle(el);
    const height = style.getPropertyValue('line-height');
    return parseInt(height, 10) * 2;
  };
  contentClick = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      });
      shave(this.contentText.current, this.getLinesHeight(this.contentText.current));
    } else {
      this.setState({
        isOpen: true
      });
      shave(this.contentText.current, Infinity);
    }
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    const { article } = this.props;
    const content = (
      <div className='news-article__content'>
        <p ref={this.contentText}>{article.text}</p>
        <CommentList comments={article.comments} />
      </div>
    );
    return (
      <article className='news-article'>
        <div className='news-article__title'>
          <div className='news-article__title-left'>
            <h2>{article.title}</h2>
            <Button
              nameOfClass='btn'
              contentClick={this.contentClick}
              text={this.state.isOpen ? 'hide more article' : 'show more article'}
            />
          </div>
          <SwitchContext.Consumer>
            { context =>
              (context.state.visibleRemove
                ? <button className='btn' onClick={this.openModal}>remove article</button>
                : null)
            }
          </SwitchContext.Consumer>
        </div>
        <h3>{article.date}</h3>
        {content}
        {this.state.modalIsOpen && <Modal
          open={this.state.modalIsOpen}
          close={this.closeModal}
          removeElement={this.props.remove}
          name='Article'
        />}
      </article>
    );
  }
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired
};

export default Article;