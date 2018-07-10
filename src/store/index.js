import { createStore } from 'redux';
import reducer from '../reducers';
import articles from '../components/articleList/articles';

const initialState = {
  articleList: articles
};

function articleList(state = initialState.articleList, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(articleList);

export default store;