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
import './home.scss';

function Home() {
	return (
		<div className='page-container'>
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

export default Home;
