import React from 'react';
import { render } from 'react-dom';

import './styles/main.scss';

import ArticleList from './components';
import news from './articles';

render(<ArticleList articles={news} />, document.getElementById('root'));

