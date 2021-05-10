import Home from './Pages/Home/home';
import Navigation from './components/Navigation/navigation';
import Blog from './Pages/Blog/blog';
import Error from './Pages/Error/error';
import SingleArticle from './Pages/Single Article/single-article.jsx';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/blog' component={Blog} />
				<Route path='/article/:id' component={SingleArticle} />
				<Route path='*' component={Error} />
			</Switch>
		</>
	);
}

export default App;
