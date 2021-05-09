import AboutMe from '../../components/About-Me/about-me';
import Header from '../../components/Header/header';
import Services from '../../components/Services/services';
import LatestWorks from '../../components/Latest-Works/latest-works.jsx';
import WorkExperiences from '../../components/Work-Experiences/work-experiences';
import HireMe from '../../components/Hire-Me/hire-me';
import ContactMe from '../../components/Contact-Me/contact-me';
import Closing from '../../components/Closing/closing.jsx';
import Footer from '../../components/Footer/footer';
import Reviews from '../../components/Reviews/reviews';
import Navigation from '../../components/Navigation/navigation';
import './home.scss';
import { animateScroll as scroll } from 'react-scroll';

const scrollToTop = () => {
	scroll.scrollToTop();
};

function Home() {
	return (
		<div className='page-container'>
			<Navigation />
			<Header id='head' />
			<AboutMe id='about-me' />
			<Services id='services' />
			<LatestWorks id='latest-works' />
			<Reviews />
			<WorkExperiences />
			<HireMe />
			<ContactMe id='contact' />
			<Closing />
			<Footer />
			<button className='back-to-top' onClick={scrollToTop}>
				Back to Top
			</button>
		</div>
	);
}

export default Home;
