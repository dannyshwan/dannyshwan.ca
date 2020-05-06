import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import { App } from './app.jsx';

ReactDOM.render((
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<App/>
	</BrowserRouter>), document.getElementById('root')
);