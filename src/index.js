import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Pages/Home/App';
import Blog from './Pages/Blog/blog';
import Navigation from './components/Navigation/navigation';
import Error from './Pages/Error/error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Navigation />
		<Switch>
			<Route exact path='/'>
				<App />
			</Route>

			<Route path='/blog'>
				<Blog />
			</Route>
			<Route path='*'>
				<Error />
			</Route>
		</Switch>
	</Router>,
	document.getElementById('root')
);
