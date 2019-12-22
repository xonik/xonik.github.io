import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RouterComponent from './router/RouterComponent';
import './index.scss';

ReactDOM.render(
  <RouterComponent />,
  document.getElementById('root')
);
