import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

import Article from './components/article';

ReactDOM.render([
    <div key='one'><Article /></div>,
    <div key='two'><Article /></div>],
  document.getElementById('root')
);
