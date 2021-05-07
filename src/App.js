import Home from './Pages/Home/home';
import Navigation from './components/Navigation/navigation';
import Blog from './Pages/Blog/blog';
import Error from './Pages/Error/error';
import AboutMe from './components/About-Me/about-me';
import Services from './components/Services/services';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import LatestWorks from './components/Latest-Works/latest-works';
import ContactMe from './components/Contact-Me/contact-me';

function App() {
	return (
		<>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/aboutme' component={AboutMe} />
				<Route exact path='/services' component={Services} />
				<Route exact path='/portfolio' component={LatestWorks} />
				<Route exact path='/contact' component={ContactMe} />
				<Route path='/blog' component={Blog} />
				<Route path='*' component={Error} />
			</Switch>
		</>
	);
}

export default App;
