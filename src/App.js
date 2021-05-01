import AboutMe from './components/About-Me/about-me';
import Navigation from './components/Navigation/navigation';
import Header from './components/Header/header';
import Services from './components/Services/services';
import LatestWorks from './components/Latest-Works/latest-works.jsx';
import WorkExperiences from './components/Work-Experiences/work-experiences';
import HireMe from './components/Hire-Me/hire-me';
import ContactMe from './components/Contact-Me/contact-me';
import Closing from './components/Closing/closing.jsx';
import Footer from './components/Footer/footer';
import Reviews from './components/Reviews/reviews';
import './App.scss';

function App() {
	return (
		<div>
			<Navigation />
			<Header />
			<AboutMe />
			<Services />
			<LatestWorks />
			<Reviews />
			<WorkExperiences />
			<HireMe />
			<ContactMe />
			<Closing />
			<Footer />
		</div>
	);
}

export default App;
