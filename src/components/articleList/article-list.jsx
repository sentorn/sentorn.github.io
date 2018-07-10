import React from 'react';
import { connect } from 'react-redux';
import Article from './article';
// import { removeArticle } from '../../reducers/articleReducer';

class ArticleList extends React.Component {
  state = {
    articleList: this.props.list
  };
  removeItem = (id) => {
    this.setState({ articleList: this.state.articleList.filter(article => id !== article.id) });
  };
  render() {
    return (
      this.state.articleList.map(article => (
        <Article
          key={article.id}
          article={article}
          remove={this.removeItem.bind(this, article.id)}
        />
      ))
    );
  }
}

const mapStateToProps = state => ({ list: state });

const mapDispatchToProps = dispatch => ({
  // removeArticle: () =>
  //   dispatch({
  //     type: 'REMOVE_ARTICLE'
  //   })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);