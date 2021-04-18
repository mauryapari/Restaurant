require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDom from 'react-dom';
import App from './App/App';
import Login from './App/containers/login';

const appElement = document.getElementById('root');

ReactDom.render(<App/>, appElement);